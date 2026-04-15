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
- Eine stabile IRI (dauerhafte Kennung, nicht eine Datenbankzeile)
- Eine formale Definition, die auf den Originaltext zurückgeht
- Beziehungen zu verwandten Konzepten über verschiedene Rahmenwerke hinweg
- Rahmenwerk‑übergreifende Zuordnungen (`skos:exactMatch`, `skos:broadMatch`, `skos:relatedMatch`)

---

## Rahmenwerk‑übergreifende Intelligenz

Rahmenwerke verwenden unterschiedliche Begriffe für dieselben Ideen. IQ:NS ordnet sie strukturell zu:

- EU‑KI‑Gesetz Artikel 9 ↔ NIST AI RMF Map‑Funktion ↔ ISO 42001 Klausel 6.1 (Risikomanagement)
- DSGVO Artikel 22 ↔ EU‑KI‑Gesetz Kapitel IV (Transparenz)
- ISO 24027 ↔ NIST Measure 2.6 (Voreingenommenheit und Fairness)

Eine Abfrage deckt jeden Standard ab. Eine Kontrolle kann mehrere Rahmenwerke erfüllen — und die Zuordnung beweist es.

---

## Kontextbezogene Profilerstellung

Nicht alles gilt für jeden. Profilieren nach:
- **Jurisdiktion** — EU, USA, UK, APAC
- **Sektor** — Finanzen, Gesundheitswesen, Regierung, Personalwesen
- **KI‑Fähigkeit** — LLM, biometrisch, Kredit‑Scoring, autonome Entscheidungen

Erhalten Sie ein präzises, dedupliziertes Set dessen, was relevant ist — nicht 40 Rahmenwerke, sondern nur das, was für Ihren Kontext wichtig ist.

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

Jedes Tool, das SPARQL versteht — BI‑Plattformen, Data‑Warehouses, Agenten‑Frameworks — kann die Ontologien direkt abfragen.

---

## MCP für agentische Workflows

Jedes Konzept hat eine stabile IRI, maschinenlesbare Definition und formale Beziehungen. KI‑Agenten können den Graphen abfragen und strukturierte, typisierte Antworten erhalten — kein PDF‑Prompt‑Stuffing erforderlich.

---

## Integration

IQ:NS lässt sich in bestehende Werkzeuge einbinden:

- **GRC‑Plattformen** — OneTrust, Vanta, ServiceNow
- **Datenkataloge** — Collibra, Alation
- **Modell‑Registries** — MLflow, Weights & Biases
- **Cloud‑Plattformen** — AWS, Azure, GCP
- **Entwicklungs‑Tools** — Jira, CI/CD‑Pipelines
- **ITSM** — ITIL v3/v4 SKMS‑Connectoren

Keine erzwungenen Migrationen. Die Ontologien treffen Sie dort, wo Ihre Werkzeuge stehen.

---

## Versioniert und portabel

Jede Ontologie ist versioniert. Exportiert als standardisiertes RDF‑Turtle. Wenn Sie gehen, nehmen Sie einen vollständigen, standards‑konformen Wissensgraphen mit. Kein Lock‑in.

---

[Auf GitHub erkunden](https://github.com/iqns-org/ontologies) · [Siehe die Technologie](/tech) · [Preise ansehen](/services)
