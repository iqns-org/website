---
title: Funktionen & Fähigkeiten
description: >-
  Was IQ:NS bietet — offene Ontologien, plattformübergreifende Zuordnungen,
  SPARQL‑Zugriff und agentenbereite Integration.
lang: de
navigation:
  section: platform
  label: Funktionen
  order: 10
---
# Funktionen & Fähigkeiten

## Offene Ontologien

50+ Ontologien, die KI, Recht, Finanzen, Gesundheit, Regierung, Unternehmen und mehr abdecken. Jede ist in RDF/OWL mit SKOS‑Ausrichtungen modelliert und als versionierte Turtle‑Dateien veröffentlicht.

Jedes Konzept hat:
- Eine stabile IRI (permanenter Bezeichner, nicht eine Datenbankzeile)
- Eine formale Definition, die auf den Originaltext zurückgeht
- Beziehungen zu verwandten Konzepten über Frameworks hinweg
- Framework‑übergreifende Zuordnungen (`skos:exactMatch`, `skos:broadMatch`, `skos:relatedMatch`)

---

## Framework‑übergreifende Intelligenz

Frameworks verwenden unterschiedliche Begriffe für dieselben Ideen. IQ:NS ordnet sie strukturell:

- EU AI Act Artikel 9 ↔ NIST AI RMF Map‑Funktion ↔ ISO 42001 Klausel 6.1 (Risikomanagement)
- DSGVO Artikel 22 ↔ EU AI Act Kapitel IV (Transparenz)
- ISO 24027 ↔ NIST Maßnahme 2.6 (Voreingenommenheit und Fairness)

Eine Abfrage deckt jeden Standard ab. Eine Kontrolle kann mehrere Frameworks erfüllen — und die Zuordnung beweist es.

---

## Kontextuelles Profiling

Nicht alles gilt für jeden. Profilieren nach:
- **Jurisdiktion** — EU, USA, UK, APAC
- **Sektor** — Finanzen, Gesundheitswesen, Regierung, Personal
- **KI‑Fähigkeit** — LLM, biometrisch, Kredit‑Scoring, autonome Entscheidungen

Erhalten Sie ein präzises, dedupliziertes Set dessen, was relevant ist — nicht 40 Frameworks, sondern nur das, was für Ihren Kontext wichtig ist.

---

## SPARQL‑Endpunkt

Der gesamte Graph ist abfragbar:

```sparql
SELECT ?obligation ?isoControl ?nistControl
WHERE {
  ?obligation skos:exactMatch ?isoControl ;
              skos:exactMatch ?nistControl .
  ?isoControl ai:partOf <iso-42001> .
  ?nistControl ai:partOf <nist-ai-rmf> .
}
```

Jedes Tool, das SPARQL versteht — BI‑Plattformen, Data Warehouses, Agenten‑Frameworks — kann die Ontologien direkt abfragen.

---

## MCP für agentische Workflows

Jedes Konzept hat eine stabile IRI, eine maschinenlesbare Definition und formale Beziehungen. KI‑Agenten fragen den Graphen ab und erhalten strukturierte, typisierte Antworten — kein PDF‑Prompt‑Stuffing erforderlich.

---

## Integration

IQ:NS lässt sich in bestehende Werkzeuge integrieren:

- **GRC‑Plattformen** — OneTrust, Vanta, ServiceNow
- **Datenkataloge** — Collibra, Alation
- **Modell‑Registries** — MLflow, Weights & Biases
- **Cloud‑Plattformen** — AWS, Azure, GCP
- **Entwicklungswerkzeuge** — Jira, CI/CD‑Pipelines
- **ITSM** — ITIL v3/v4 SKMS‑Connectoren

Keine erzwungenen Migrationen. Die Ontologien treffen Sie dort, wo Ihre Werkzeuge stehen.

---

## Versioniert und portabel

Jede Ontologie ist versioniert. Exportiert als Standard‑RDF‑Turtle. Wenn Sie gehen, nehmen Sie einen vollständigen, standardkonformen Wissensgraphen mit. Kein Lock‑in.

---

[Auf GitHub erkunden](https://github.com/iqns-org/ontologies) · [Technologie ansehen](/tech) · [Preise ansehen](/pricing)
