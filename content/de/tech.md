---
title: Technologie & Architektur
description: >-
  Wie IQ:NS-Ontologien aufgebaut werden: Grundlagen des semantischen Webs,
  maschinenlesbare Rahmenwerke und agentenbereite APIs.
lang: de
navigation:
  section: platform
  label: Technologie
  order: 20
---
# Technologie & Architektur

## Auf semantischen Webstandards aufgebaut

IQ:NS verwendet dieselben Standards, die weltweit wissenschaftliche Publikationen, pharmazeutische Forschung und Unternehmensdatenintegration antreiben:

- **RDF** — das universelle Datenmodell. Jeder Triple ist abfragbar, exportierbar, verlinkbar.
- **SKOS** — erfasst Hierarchien, Zuordnungen und Ausrichtungen über Frameworks hinweg.
- **OWL** — definiert Klassen, Eigenschaften und logische Beziehungen zwischen Konzepten.
- **SHACL** — validiert Datenformen und -einschränkungen.

Jedes Konzept trägt eine kanonische IRI (stabil, permanent), eine formale Definition, die aus dem Originaltext stammt, und explizite Beziehungen zu verwandten Konzepten über Frameworks hinweg.

---

## Wie es funktioniert

Wenn sich ein Standard ändert, propagiert das Ontologie-Update durch jedes zugeordnete Konzept — jede verknüpfte Verpflichtung, jede verwandte Kontrolle. Keine manuelle Neuzuordnung.

### Framework-übergreifende Duplikatentfernung

Wenn Artikel 22 der DSGVO und Artikel 13 des EU AI Act beide Transparenz verlangen, erkennt IQ:NS sie als `skos:exactMatch` und stellt ein Konzept bereit, nicht zwei. Eine Abfrage löst beide.

### Kontextbezogene Profilerstellung

Angesichts von Rechtsgebiet, Sektor und KI‑Fähigkeitstyp liefert eine SPARQL‑Abfrage den genauen, deduplizierten Satz relevanter Konzepte — nicht eine Liste von Frameworks, sondern genau das, was zutrifft.

---

## Abdeckung von Frameworks

40 + Frameworks über sieben Bereiche:

| Domäne | Frameworks |
|--------|-----------|
| **KI** | EU AI Act, NIST AI RMF, ISO 42001, ISO 23894, ISO 24027–29 |
| **Daten & Datenschutz** | GDPR, UK GDPR, CCPA, eIDAS |
| **Sicherheit** | OWASP LLM Top 10, NIST CSF 2.0, ISO 27001, SOC 2 |
| **Finanzen** | EBA guidelines, DORA, Basel model risk |
| **Gesundheit** | FDA AI/ML guidance, MDR, HIPAA |
| **Regierung** | NIST EO 13960, UK algorithmic transparency |
| **Unternehmen** | ISO 31000, COSO ERM, ITIL 4, IEEE 7000 series |

Jedes Framework ist ein eigenständiges, versioniertes Turtle‑Dokument.

---

## APIs und Integration

### SPARQL‑Endpunkt

Der gesamte Graph ist über SPARQL 1.1 abfragbar. Jedes Tool, das SPARQL versteht — BI‑Plattformen, Data Warehouses, Agenten‑Frameworks — erhält strukturierte Antworten.

### MCP für Agenten

Jedes Konzept hat eine stabile IRI, maschinenlesbare Definition und formale Beziehungen. KI‑Agenten fragen den Graphen direkt ab — kein PDF‑Kontext‑Einbetten.

---

## Bereitstellung

| Modus | Beschreibung |
|------|-------------|
| **GitHub** | Turtle-Dateien herunterladen, in Ihren eigenen Triplestore laden |
| **Cloud-gehostet** | Verwalteter Graph auf einer privaten Instanz, verschlüsselt |
| **Private Cloud** | Im eigenen VPC (AWS, Azure, GCP) bereitgestellt |
| **Air-gapped** | Vollständig on‑premises für regulierte Umgebungen |

---

## Offene Standards, kein Lock‑in

Die Ontologien werden unter einer offenen Lizenz veröffentlicht. Exportieren Sie jederzeit als Standard‑RDF‑Turtle. Wenn Sie gehen, nehmen Sie einen vollständigen, portablen Wissensgraphen mit.

---

[Auf GitHub erkunden](https://github.com/iqns-org/ontologies) · [Funktionen ansehen](/features) · [Loslegen](/getting-started)
