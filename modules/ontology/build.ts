import fs from 'node:fs'
import path from 'node:path'
import { Parser } from 'n3'

export async function buildOntology({
  rdfFiles,
  outPath
}: {
  rdfFiles: string[]
  outPath: string
}) {
  fs.mkdirSync(outPath, { recursive: true })

  const parser = new Parser()
  const quads: any[] = []

  // -------------------------
  // LOAD ALL TTL FILES
  // -------------------------
  for (const file of rdfFiles) {
    const ttl = fs.readFileSync(file, 'utf-8')
    quads.push(...parser.parse(ttl))
  }

  // -------------------------
  // ID SYSTEM (IRI → int)
  // -------------------------
  const iriToId = new Map<string, number>()
  const idToIri: string[] = []

  const getId = (iri: string) => {
    let id = iriToId.get(iri)
    if (id !== undefined) return id
    id = idToIri.length
    iriToId.set(iri, id)
    idToIri.push(iri)
    return id
  }

  const labels = new Map<string, string>()
  const edges: Array<{ s: number; p: string; o: number }> = []

  // -------------------------
  // PROCESS TRIPLES
  // -------------------------
  for (const q of quads) {
    const s = q.subject.value
    const p = q.predicate.value
    const o = q.object.value

    const sid = getId(s)

    // labels
    if (p.includes('label') && q.object.termType === 'Literal') {
      labels.set(s, q.object.value)
      continue
    }

    // edges only named nodes
    if (
      q.subject.termType === 'NamedNode' &&
      q.object.termType === 'NamedNode'
    ) {
      const oid = getId(o)

      edges.push({
        s: sid,
        p,
        o: oid
      })
    }
  }

  // -------------------------
  // WRITE CORE GRAPH
  // -------------------------
  fs.writeFileSync(
    path.join(outPath, 'graph.core.json'),
    JSON.stringify(
      {
        nodes: idToIri.map((iri, id) => ({
          id,
          iri,
          label: labels.get(iri) ?? iri.split(/[#/]/).pop()
        })),
        edges
      },
      null,
      2
    )
  )

  // -------------------------
  // WRITE IRI MAP
  // -------------------------
  fs.writeFileSync(
    path.join(outPath, 'iriMap.json'),
    JSON.stringify(idToIri)
  )

  // -------------------------
  // WRITE SEARCH INDEX
  // -------------------------
  const search: Record<string, number[]> = {}

  for (let i = 0; i < idToIri.length; i++) {
    const iri = idToIri[i]
    const label =
      labels.get(iri) ?? iri.split(/[#/]/).pop()!

    const key = label.toLowerCase()

    if (!search[key]) search[key] = []
    search[key].push(i)
  }

  fs.writeFileSync(
    path.join(outPath, 'search.json'),
    JSON.stringify(search, null, 2)
  )

  // -------------------------
  // MANIFEST
  // -------------------------
  fs.writeFileSync(
    path.join(outPath, 'manifest.json'),
    JSON.stringify(
      {
        nodeCount: idToIri.length,
        edgeCount: edges.length
      },
      null,
      2
    )
  )

  console.log(
    `[ontology] built ${idToIri.length} nodes, ${edges.length} edges`
  )
}