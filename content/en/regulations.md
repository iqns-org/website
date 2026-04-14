---
title: Standards & Frameworks
description: The AI and organisational standards IQ:NS models — what they cover, who they apply to, and how they connect.
lang: en
navigation:
  section: governance
  label: Standards
  order: 20
---

# Standards & Frameworks

## The landscape

No single framework covers everything. Most organisations face overlapping requirements from multiple standards — and the gaps between them are where problems hide.

IQ:NS models 50+ frameworks and domain models from `./ontologies/v1/` as structured ontologies. Here's what they cover.

IQ:NS does not prioritise a single set of regulations; it cherry-picks the relevant ontology models for each context from the repository.

---

## Horizontal Frameworks

### EU AI Act
- **Applies to:** Any organisation offering or deploying AI in the EU
- **Covers:** Risk classification, conformity assessment, transparency, technical documentation, human oversight
- **Enforcement:** Fines up to 7% of global revenue

### NIST AI Risk Management Framework
- **Applies to:** Voluntary, but increasingly referenced by US regulators and procurement
- **Covers:** Four core functions — Govern, Map, Measure, Manage
- **Why it matters:** The most operationally actionable framework available

### ISO 42001
- **Applies to:** Organisations seeking formal AI management certification
- **Covers:** Plan-do-check-act management system, Annex A controls, internal audit

### EU GDPR (AI provisions)
- **Applies to:** Any organisation processing EU resident personal data with AI
- **Covers:** Article 22 (automated decisions), profiling transparency, data minimization

---

## Sector-Specific Standards

### Financial Services
| Framework | Jurisdiction | Focus |
|---|---|---|
| SR 11-7 | US | Model risk management |
| EBA AI Guidelines | EU | Credit institution AI oversight |
| MAS AI Governance | Singapore | Financial institution AI governance |

### Healthcare
| Framework | Jurisdiction | Focus |
|---|---|---|
| FDA AI/ML SaMD | US | Clinical AI and software as medical device |
| ONC Trustworthy AI | US | Health IT AI standards |

### Security
| Framework | Focus |
|---|---|
| OWASP LLM Top 10 | LLM security vulnerabilities |
| MITRE ATLAS | Adversarial AI threat landscape |
| Google SAIF | Secure AI framework |

### Ethics & Principles
| Framework | Origin |
|---|---|
| OECD AI Principles | OECD |
| UNESCO AI Ethics | UNESCO |
| IEEE 7000 | IEEE |

---

## How frameworks overlap

Different terminology, same concepts:

| Concept | EU AI Act | NIST AI RMF | ISO 42001 |
|---|---|---|---|
| Risk management | Article 9 | Map function | Clause 6.1 |
| Human oversight | Article 14 | Govern 1.4 | A.8.4 |
| Technical documentation | Article 11 | Map 3.4 | A.6.2 |
| Bias and fairness | Article 10(2)(f) | Measure 2.6 | A.10.3 |
| Transparency | Chapter IV | Govern 4.1 | A.8.3 |

IQ:NS maps these crosswalks structurally — so you can see where one concept spans multiple standards and where genuine gaps exist.

---

[See how the ontologies work](/how-it-works) · [Explore on GitHub](https://github.com/iqns-org/ontologies)
