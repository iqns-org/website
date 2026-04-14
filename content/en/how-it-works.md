---
title: How IQ:NS Works
description: How IQ:NS turns standards and institutional knowledge into structured, queryable ontologies that AI agents and teams can use.
lang: en
navigation:
  section: platform
  label: howItWorks
  order: 15
---

# How IQ:NS Works

## From documents to structured knowledge

Standards, regulations, and institutional rules exist as natural language in PDFs. Useful for people reading them cover to cover — less useful when you need a machine to reason about how Article 13 of the EU AI Act relates to a NIST control or an ISO clause.

IQ:NS models these concepts as formal ontologies — structured vocabularies where every term has a stable identifier, a definition grounded in its source, and explicit relationships to related concepts across frameworks.

## The four layers

### 1. Concept modelling

Each standard is broken into its constituent concepts — obligations, controls, risk categories, roles — and represented as OWL classes with SKOS labels and definitions. Every concept traces back to its authoritative source.

### 2. Cross-framework alignment

Frameworks overlap constantly. GDPR Article 22 and EU AI Act Article 13 both address transparency. ISO 42001 and NIST AI RMF both define risk management processes. IQ:NS captures these alignments explicitly using `skos:exactMatch`, `skos:broadMatch`, and `skos:relatedMatch`.

One query shows you where frameworks converge, where they diverge, and where gaps exist.

### 3. Contextual profiling

Not every concept applies to every situation. IQ:NS supports profiling by jurisdiction, sector, and capability type — so you can query "what applies to a credit-scoring system in the EU?" and get a precise, deduplicated answer.

### 4. Continuous maintenance

Frameworks change. New standards arrive. The community maintains and extends the ontologies so the knowledge stays current. Every version is tracked — you can always see what changed and when.

---

## How you use it

- **Browse on GitHub** — download the Turtle files, load into your triplestore
- **Query via SPARQL** — ask questions across frameworks programmatically
- **Connect via MCP** — let your AI agents reason over institutional knowledge directly
- **Integrate with tools** — plug into GRC platforms, data catalogs, CI/CD pipelines

---

## What IQ:NS is not

- Not a policy engine — it doesn't execute rules
- Not a GRC platform — it doesn't run workflows or approvals
- Not a consultancy — you make the decisions; the ontologies provide the structure

IQ:NS is the **semantic foundation** those systems can build on.

---

[Explore the ontologies](https://github.com/iqns-org/ontologies) · [See the technology](/tech) · [Get started](/getting-started)
