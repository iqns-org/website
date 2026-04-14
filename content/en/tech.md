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

- **RDF** — the universal data model. Every triple is queryable, exportable, linkable.
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

## Framework coverage

40+ frameworks and sector models are available in `./ontologies/v1/`. These are representative examples across seven domains:

| Domain | Frameworks |
|--------|-----------|
| **AI** | EU AI Act, NIST AI RMF, ISO 42001, ISO 23894, ISO 24027–29 |
| **Data & Privacy** | GDPR, UK GDPR, CCPA, eIDAS |
| **Security** | OWASP LLM Top 10, NIST CSF 2.0, ISO 27001, SOC 2 |
| **Finance** | EBA guidelines, DORA, Basel model risk |
| **Health** | FDA AI/ML guidance, MDR, HIPAA |
| **Government** | NIST EO 13960, UK algorithmic transparency |
| **Enterprise** | ISO 31000, COSO ERM, ITIL 4, IEEE 7000 series |

Each framework is a standalone, versioned Turtle document.

---

## APIs and integration

### SPARQL endpoint

The full graph is queryable via SPARQL 1.1. Any tool that speaks SPARQL — BI platforms, data warehouses, agent frameworks — gets structured answers.

### MCP for agents

Every concept has a stable IRI, machine-readable definition, and formal relationships. AI agents query the graph directly — no PDF context stuffing.

---

## Deployment

| Mode | Description |
|------|-------------|
| **GitHub** | Download Turtle files, load into your own triplestore |
| **Cloud hosted** | Managed graph on a private instance, encrypted |
| **Private cloud** | Deployed in your VPC (AWS, Azure, GCP) |
| **Air-gapped** | Full on-premises for regulated environments |

---

## Open standards, no lock-in

The ontologies are published under open licence. Export as standard RDF Turtle at any time. If you leave, you take a complete, portable knowledge graph with you.

---

[Explore on GitHub](https://github.com/iqns-org/ontologies) · [View features](/features) · [Get started](/getting-started)
