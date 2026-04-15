---
title: Technology & Architecture
description: 'How IQ:NS ontologies are built: semantic web foundations, machine-readable frameworks, and agent-ready APIs.'
lang: en
navigation:
  section: platform
  label: Technology
  order: 20
---

# Technology & Architecture

## Built on semantic web standards

IQ:NS uses the same standards that power scientific publishing, pharmaceutical research, and enterprise data integration worldwide:

- **JSON-LD** — the universal data model. Every RDF triple is queryable, exportable, linkable.
- **SKOS** — captures hierarchies, mappings, and alignments across frameworks.
- **OWL** — defines classes, properties, and logical relationships between concepts.
- **SHACL** — validates data shapes and constraints.

Each concept carries a canonical IRI (stable, permanent), a formal definition sourced to the original text, and explicit relationships to related concepts across frameworks.

---

## How it works

When a standard changes, the ontology update propagates through every mapped concept — every linked obligation, every related control. No manual re-mapping.

### Cross-framework deduplication

When different rules, policies, or operational standards all require transparency, IQ:NS recognises them as `skos:exactMatch` and surfaces one concept, not two. One query resolves both.

### Contextual profiling

Given jurisdiction, sector, and AI capability type, a SPARQL query returns the precise, deduplicated set of relevant concepts — not a list of frameworks, but exactly what applies.

---

## Modular domain models

IQ:NS is published as a modular, domain-aligned knowledge graph rather than a flat checklist of standards. More than 40 independent, versioned ontology modules are available in `./ontologies/v1/`, and each module is aligned to the rest of the graph using SKOS, OWL, and shared semantic patterns.

Representative domains include AI governance, data privacy, security resilience, financial risk, health oversight, government transparency, and enterprise controls. This structure keeps each domain model clear while preserving cross-domain reasoning and reuse.

Each module is a standalone RDF/Turtle document with explicit semantic alignments so a single query can traverse multiple domains.

---

## APIs and integration

### SPARQL endpoint

The full graph is queryable via SPARQL 1.1. Any tool that speaks SPARQL — BI platforms, data warehouses, agent frameworks — gets structured answers.

### Agent-ready graph access

Each concept is published with a canonical IRI, machine-readable metadata, and formal semantic relationships. Agents and automation tools can consume the graph directly — via SPARQL or a graph-native API — instead of relying on unstructured PDFs or ad hoc prompt engineering.

This keeps the same semantic model available to compliance workflows and retrieval-augmented reasoning, so agents resolve obligations, risks, and controls from a single source of truth.

---

## Deployment

| Mode | Description |
|------|-------------|
| **GitHub** | Download and load into your own RDF store |
| **Cloud hosted** | Managed graph on a private instance, encrypted |
| **Private cloud** | Deployed in your VPC (AWS, Azure, GCP) |
| **Air-gapped** | Available on-premises for every customer |

---

## Open standards, no lock-in

The ontologies are published under open licence. Export as standard RDF at any time. If you leave, you take a complete, portable knowledge graph with you.

---

[Explore on GitHub](https://github.com/iqns-org/ontologies) · [View features](/features) · [Get started](/getting-started)
