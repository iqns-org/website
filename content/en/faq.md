---
title: Frequently Asked Questions
description: Common questions about IQ:NS, the ontologies, and how to use them.
lang: en
navigation:
  section: governance
  label: FAQ
  order: 30
---

# Frequently Asked Questions

## About IQ:NS

### What is IQ:NS?

An open-source project that models AI standards, regulations, and institutional knowledge as formal ontologies. Built on RDF, SKOS, OWL, and SHACL — queryable by people and machines.

### Is it free?

The core ontologies are free and open source. There's a commercial tier for hosted services, private knowledge bases, and integration support.

### Who is this for?

Anyone working with AI standards — compliance teams, engineers, integration architects, researchers, or anyone building agents that need to reason about institutional rules.

### How is this different from a GRC platform?

GRC platforms run workflows and approvals. IQ:NS provides the semantic layer underneath — structured knowledge about what the standards say and how they relate. They're complementary.

---

## About the ontologies

### What standards do you cover?

50+ frameworks including EU AI Act, NIST AI RMF, ISO 42001, GDPR, OWASP LLM Top 10, MITRE ATLAS, sector-specific regulations (FDA, EBA, SR 11-7), and more. See [full coverage](/regulations).

### How are they built?

Each standard is modelled as OWL classes with SKOS labels, definitions, and cross-framework alignment mappings. Every concept traces back to its authoritative source text.

### How do I use them?

Download the Turtle files from GitHub, load into any triplestore, and query with SPARQL. Or use the hosted MCP server to connect AI agents directly.

### Can I contribute?

Yes. The ontologies are on [GitHub](https://github.com/iqns-org/ontologies). Domain expertise, corrections, and new framework coverage are welcome.

### What happens when a standard changes?

The community updates the ontologies. Every version is tracked — you can see what changed and when.

---

## About the commercial tier

### What does the paid tier include?

Private knowledge bases, hosted SPARQL endpoints, MCP server access, ITIL SKMS connectors, and hands-on support.

### Do I need it?

For most use cases, the free ontologies are enough. The commercial tier is for teams that want managed hosting, private extensions, or integration support.

### Is there lock-in?

No. Everything exports as standard RDF Turtle. You can leave with your complete knowledge graph at any time.

---

## Technical

### Does IQ:NS see my data?

No. The ontologies describe concepts and relationships. We never touch model data, training sets, inference outputs, or PII.

### Can I run it on-premise?

Yes. The ontologies are files you can host anywhere. The commercial tier also supports private cloud and air-gapped deployments.

---

[Explore the ontologies](https://github.com/iqns-org/ontologies) · [Contact us](/contact)
