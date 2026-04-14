---
title: Features & Capabilities
description: What IQ:NS provides — open ontologies, cross-framework mappings, SPARQL access, and agent-ready integration.
lang: en
navigation:
  section: platform
  label: Features
  order: 10
---

# Features & Capabilities

## Open ontologies

50+ ontologies covering AI, legal, finance, health, government, enterprise, and more. Each one modelled in RDF/OWL with SKOS alignments, published as versioned Turtle files.

Every concept has:
- A stable IRI (permanent identifier, not a database row)
- A formal definition sourced to the original text
- Relationships to related concepts across frameworks
- Cross-framework mappings (`skos:exactMatch`, `skos:broadMatch`, `skos:relatedMatch`)

---

## Cross-framework intelligence

Frameworks use different words for the same ideas. IQ:NS maps them structurally:

- EU AI Act Article 9 ↔ NIST AI RMF Map function ↔ ISO 42001 Clause 6.1 (risk management)
- GDPR Article 22 ↔ EU AI Act Chapter IV (transparency)
- ISO 24027 ↔ NIST Measure 2.6 (bias and fairness)

One query spans every standard. One control can satisfy multiple frameworks — and the mapping proves it.

---

## Contextual profiling

Not everything applies to everyone. Profile by:
- **Jurisdiction** — EU, US, UK, APAC
- **Sector** — finance, healthcare, government, HR
- **AI capability** — LLM, biometric, credit scoring, autonomous decisions

Get a precise, deduplicated set of what's relevant — not 40 frameworks, just what matters to your context.

---

## SPARQL endpoint

The full graph is queryable:

```sparql
SELECT ?obligation ?isoControl ?nistControl
WHERE {
  ?obligation skos:exactMatch ?isoControl ;
              skos:exactMatch ?nistControl .
  ?isoControl ai:partOf <iso-42001> .
  ?nistControl ai:partOf <nist-ai-rmf> .
}
```

Any tool that speaks SPARQL — BI platforms, data warehouses, agent frameworks — can query the ontologies directly.

---

## MCP for agentic workflows

Every concept has a stable IRI, machine-readable definition, and formal relationships. AI agents query the graph and get structured, typed answers — no PDF prompt-stuffing required.

---

## Integration

IQ:NS plugs into existing tools:

- **GRC platforms** — OneTrust, Vanta, ServiceNow
- **Data catalogs** — Collibra, Alation
- **Model registries** — MLflow, Weights & Biases
- **Cloud platforms** — AWS, Azure, GCP
- **Development tools** — Jira, CI/CD pipelines
- **ITSM** — ITIL v3/v4 SKMS connectors

No forced migrations. The ontologies meet you where your tools are.

---

## Versioned and portable

Every ontology is versioned. Exported as standard RDF Turtle. If you leave, you take a complete, standards-compliant knowledge graph with you. No lock-in.

---

[Explore on GitHub](https://github.com/iqns-org/ontologies) · [See the technology](/tech) · [View pricing](/pricing)
