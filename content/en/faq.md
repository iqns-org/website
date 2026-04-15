---
title: Frequently Asked Questions
description: Common questions about IQ:NS, the ontologies, and how to use them.
lang: en
navigation:
  section: platform
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

Over 50 frameworks are currently availabl — AI regulation, privacy, security, sector-specific rules, and enterprise controls. See [Open Ontologies](/ontologies/index).

### How are they built?

Each standard is modelled as OWL classes with SKOS labels, definitions, and cross-framework alignment mappings. Every concept traces back to its authoritative source text.

### How do I use them?

You can connect to our hosted MCP server allowing your AI agents to communicate with each other, and your digital supply chain without ambiguity.

As a developer, you can download the RDF source files from GitHub, load into any triplestore, and query with SPARQL. 

### Can I contribute?

Yes. The open ontologies are on [GitHub](https://github.com/iqns-org/ontologies). Domain expertise, corrections, and new framework coverage are welcome.

### What happens when a standard changes?

The community updates the ontologies. Every version is tracked — you can see what changed and when.

---

## About the commercial tier

### What does the paid tier include?

We boot up an instance of our enterprise knowledge server containing all of the open ontologies and AI governance frameworks.

You can create private knowledge bases that link together any information from multiple sources - SQL, APIs, GraphQL and more.

The instance includes secured SPARQL endpoints, virtual MCP servers, connectors for enterprise SaaS systems, and hands-on support.

### Do I need it?

For many use cases, the free ontologies are enough. 

The commercial tier is for teams that want more - private knowledge, agentic integration, managed hosting, custom extensions, or professional support.

### Is there lock-in?

No. Everything exports as standard RDF Turtle. You can leave with your complete knowledge graph at any time.

---

## Technical

### Does IQ:NS see my data?

No. The ontologies describe concepts and relationships. We never touch model data, training sets, inference outputs, or PII.

All commercially hosted instances are secured in private clouds - either yours or ours.

### Can I run it on-premise?

Yes. The ontologies are files you can host anywhere. 

The commercial tier also supports private cloud and air-gapped deployments for true data sovereignty.

---

[open ontologies](https://github.com/iqns-org/ontologies) · [Contact us](/support)
