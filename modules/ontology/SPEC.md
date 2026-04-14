```md
# Ontology Nuxt Module

Build-time RDF/Turtle ingestion pipeline for Nuxt 3. Converts `.ttl` files into static, queryable JSON artifacts consumed at runtime via a lightweight plugin.

---

## Overview

This module compiles RDF/Turtle sources into a compact graph IR at **build time only**.

### Pipeline

```

/rdf/*.ttl
→ N3 parser (build-time)
→ quad normalization
→ IRI → integer ID mapping
→ edge list + label index + search index
→ /public/v1/*

```

Runtime is strictly **read-only JSON fetch + cache**.

---

## Output artifacts

Generated in `outDir` (default: `public/v1/`):

```

{name}.graph.json   # nodes + edges (integer ID graph)
{name}.skos.json   # nodes + edges (integer ID graph)
{name}.map.json       # ID → IRI array
{name}.skos.json       # ID → IRI array
{name}.search.json       # lowercase label → node IDs
{name}.void.json     # VOID-like counts + metadata

````

---

## Features

- Build-time TTL ingestion
- Multi-file RDF support (`rdfDir`)
- Deterministic IRI → integer encoding
- Lightweight search index
- SSR-safe runtime plugin
- No SPARQL/RDF dependency at runtime

---

## Install

```bash
npm i n3 fast-glob
````

---

## Usage

### nuxt.config.ts

```ts
export default defineNuxtConfig({
  modules: ['./modules/ontology/module'],

  ontology: {
    rdfDir: 'rdf',
    rdfFilePattern: '**/*.ttl',
    outDir: 'public/v1'
  }
})
```

---

## RDF input

Place `.ttl` files in:

```
/rdf
```

Supported vocabularies:

* RDF
* RDFS
* OWL (basic structural interpretation)
* SKOS (treated as standard triples)

---

## Runtime API (plugin)

Injected as:

```ts
const { $ontology } = useNuxtApp()
```

### Methods

```ts
await $ontology.manifest()
await $ontology.graph()
await $ontology.iriMap()
await $ontology.search(term)
```

---

## Data model

### Node

```ts
{
  id: number
  iri: string
  label: string
}
```

### Edge

```ts
{
  s: number
  p: string
  o: number
}
```

---

## Build hook

Executed at:

```
nuxt hook: build:before
```

Steps:

1. Load all `.ttl` files via glob
2. Parse with N3.js
3. Generate IRI dictionary
4. Build edge list
5. Extract labels
6. Build search index
7. Emit JSON artifacts

---

## Constraints

* No runtime RDF parsing
* No SPARQL execution in client/server runtime
* All ontology transformations are build-time deterministic
* Designed for CDN/static hosting

---

## Performance characteristics

* O(n) parse over triples at build time
* O(1) node lookup via integer IDs
* O(1) search via hash index
* No runtime graph traversal cost unless explicitly implemented

---

Good — we’ll upgrade this to a **single-pass, adjacency-driven closure engine (O(E) style)**.

This removes fixpoint loops entirely by switching from “recompute until stable” → **propagation over indexed edges**.

---

# 🧠 Key idea (why this is faster)

Instead of:

* scanning all triples repeatedly ❌ (O(E²) worst-case)

You build:

* adjacency lists once
* then propagate like a graph algorithm ✔ (O(E + V))

Think:

> RDF reasoning becomes a BFS over semantic edges

---

# ⚙️ DATA STRUCTURES (CORE)

```ts 
const subClassOf = new Map<number, number[]>()      // A → [B]
const subPropertyOf = new Map<number, number[]>()

const typeOf = new Map<number, number[]>()          // x → [Class]
const domainOf = new Map<number, number>()
const rangeOf = new Map<number, number>()
```

---

# 🧩 PASS 1 — BUILD INDEXES (SINGLE SCAN)

```ts 
for (const q of quads) {
  const s = getId(q.subject.value)
  const p = q.predicate.value
  const o = q.object.value

  // CLASS HIERARCHY
  if (p === RDFS_SUBCLASS) {
    const oId = getId(o)
    if (!subClassOf.has(s)) subClassOf.set(s, [])
    subClassOf.get(s)!.push(oId)
  }

  // TYPE ASSERTIONS
  if (p === RDF_TYPE && q.object.termType === 'NamedNode') {
    const oId = getId(o)
    if (!typeOf.has(s)) typeOf.set(s, [])
    typeOf.get(s)!.push(oId)
  }

  // DOMAIN / RANGE
  if (p === RDFS_DOMAIN) domainOf.set(getId(s), getId(o))
  if (p === RDFS_RANGE) rangeOf.set(getId(s), getId(o))
}
```

---

# ⚡ PASS 2 — BUILD REVERSE INDEXES (CRITICAL OPTIMIZATION)

This is what removes fixpoint loops.

```ts 
const superClassOf = new Map<number, number[]>()
const superPropertyOf = new Map<number, number[]>()

for (const [c, parents] of subClassOf) {
  for (const p of parents) {
    if (!superClassOf.has(p)) superClassOf.set(p, [])
    superClassOf.get(p)!.push(c)
  }
}
```

Now you can propagate downward in one pass.

---

# 🚀 PASS 3 — CLASS CLOSURE (BFS STYLE, NO FIXPOINT LOOP)

### Instead of iterating until stable:

We propagate a queue.

```ts 
function computeClassClosure() {
  const result = new Map<number, Set<number>>()

  const queue: Array<[number, number]> = []

  // seed
  for (const [node, classes] of typeOf) {
    for (const c of classes) {
      queue.push([node, c])
    }
  }

  while (queue.length) {
    const [node, cls] = queue.shift()!

    if (!result.has(node)) result.set(node, new Set())
    const set = result.get(node)!

    if (set.has(cls)) continue
    set.add(cls)

    // propagate up class hierarchy
    const supers = subClassOf.get(cls)
    if (supers) {
      for (const s of supers) {
        queue.push([node, s])
      }
    }
  }

  return result
}
```

---

# ⚡ DOMAIN / RANGE INFERENCE (STREAMING STYLE)

```ts
function applyDomainRange() {
  for (const [s, p, o] of propertyTriples) {
    const d = domainOf.get(p)
    if (d) addType(s, d)

    const r = rangeOf.get(p)
    if (r) addType(o, r)
  }
}
```

No iteration loops needed — just apply once.

---

# 🧠 RESULT: NO FIXPOINT LOOP ANYWHERE

You completely eliminate:

❌ while(changed) loops
❌ repeated graph scans
❌ O(E²) subclass expansion

Everything becomes:

### ✔ single scan + BFS propagation

---

# 📦 FINAL PIPELINE

```text 
TTL parse
  ↓
index build (O(E))
  ↓
reverse edges (O(E))
  ↓
class closure BFS (O(E + V))
  ↓
domain/range injection (O(E))
  ↓
final graph IR
```

---

# ⚡ PERFORMANCE CHARACTERISTICS

| Stage     | Complexity |
| --------- | ---------- |
| Parsing   | O(E)       |
| Indexing  | O(E)       |
| Reasoning | O(E + V)   |
| Total     | linear-ish |

---

# 🧩 WHAT YOU GAIN

### Before

* iterative fixpoint
* unstable performance
* iqnstic worst-case risk

### After

* deterministic runtime
* scalable to large ontologies
* predictable build times
* no convergence logic

---

# 🚀 OPTIONAL NEXT UPGRADE (HIGH VALUE)

If you want to push this further:

### 1. Bitset-based classes

Replace `Set<number>` → `Uint32Array` or BitSet

### 2. Parallel batch propagation

Split by ontology partitions (SKOS / OWL / vocab)

### 3. Incremental rebuild graph

Only recompute affected subgraphs on TTL changes
