---
title: Trust & Security
description: How IQ:NS handles data, what we store, and how we protect it.
lang: en
navigation:
  section: platform
  label: Security
  order: 30
---

# Trust & Security

## What we store

IQ:NS operates on **metadata only**:

- Framework concepts and relationships (public regulatory text)
- Your system profiles (if using the commercial tier): names, capabilities, risk classifications
- Your ontology extensions (if private): custom concepts and mappings
- Evidence references (links or hashes — not the documents themselves)

We **never** store model training data, weights, inference outputs, customer data, or PII.

## Where we store it

- **Encryption:** AES-256 at rest, TLS 1.3 in transit
- **Access:** Role-based controls, audit logging
- **Backups:** Automated daily, geographically distributed

## Deployment options

- **Self-hosted** — download Turtle files, run your own triplestore
- **Cloud hosted** — managed instance on AWS, encrypted
- **Private cloud** — deployed in your VPC
- **Air-gapped** — Available on-premises for every customer

## Compliance

- SOC 2 Type II audited
- GDPR compliant — no personal data retention
- ISO 27001 certified
- HIPAA BAA and FedRAMP available on request

## Open by default

The core ontologies are open source. You can verify every concept, every mapping, every relationship. Transparency is structural, not promised.

## Report a security issue

[security@iqns.org](mailto:security@iqns.org)

---

[Privacy policy](/privacy) · [Terms of service](/terms)
