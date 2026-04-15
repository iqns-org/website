---
title: Technologie & Architektur
description: >-
  Wie IQ:NS Ontologien aufgebaut werden: Grundlagen des semantischen Webs,
  maschinenlesbare Rahmenwerke und agentenbereite APIs.
lang: de
navigation:
  section: platform
  label: Technologie
  order: 20
---
# Technologie & Architektur

## Auf Basis von Semantic-Web-Standards

IQ:NS verwendet dieselben Standards, die weltweit das wissenschaftliche Publizieren, die pharmazeutische Forschung und die Unternehmensdatenintegration antreiben:

- **JSON-LD** — das universelle Datenmodell. Jeder RDF‑Triple ist abfragbar, exportierbar, verlinkbar.
- **SKOS** — erfasst Hierarchien, Zuordnungen und Ausrichtungen über Frameworks hinweg.
- **OWL** — definiert Klassen, Eigenschaften und logische Beziehungen zwischen Konzepten.
- **SHACL** — validiert Datenformen und -einschränkungen.

Jedes Konzept trägt eine kanonische IRI (stabil, permanent), eine formale Definition, die auf den Originaltext zurückgeht, und explizite Beziehungen zu verwandten Konzepten über Frameworks hinweg.

---

## Wie es funktioniert

Wenn sich ein Standard ändert, propagiert das Ontologie‑Update durch jedes zugeordnete Konzept — jede verknüpfte Verpflichtung, jede verwandte Kontrolle. Keine manuelle Neuzuordnung.

### Cross‑Framework-Deduplizierung

Wenn verschiedene Regeln, Richtlinien oder betriebliche Standards alle Transparenz verlangen, erkennt IQ:NS sie als `skos:exactMatch` und stellt ein Konzept bereit, nicht zwei. Eine Abfrage löst beide.

### Kontextbezogenes Profiling

Angesichts von Rechtsordnung, Sektor und KI‑Fähigkeitstyp liefert eine SPARQL‑Abfrage die präzise, deduplizierte Menge relevanter Konzepte — nicht eine Liste von Frameworks, sondern genau das, was gilt.

---

## Modulare Domänenmodelle

IQ:NS wird als modularer, domänen‑ausgerichteter Knowledge‑Graph veröffentlicht, nicht als flache Checkliste von Standards. Mehr als 40 unabhängige, versionierte Ontologie‑Module sind in `./ontologies/v1/` verfügbar, und jedes Modul ist mit dem Rest des Graphen mittels SKOS, OWL und gemeinsamer semantischer Muster ausgerichtet.

Repräsentative Domänen umfassen KI‑Governance, Datenschutz, Sicherheitsresilienz, Finanzrisiken, Gesundheitsaufsicht, Regierungs‑Transparenz und Unternehmens‑Kontrollen. Diese Struktur hält jedes Domänenmodell klar, während sie domänenübergreifendes Schließen und Wiederverwenden bewahrt.

Jedes Modul ist ein eigenständiges RDF/Turtle‑Dokument mit expliziten semantischen Ausrichtungen, sodass eine einzelne Abfrage mehrere Domänen durchlaufen kann.

---

## APIs und Integration

### SPARQL‑Endpunkt

Der vollständige Graph ist über SPARQL 1.1 abfragbar. Jedes Tool, das SPARQL versteht — BI‑Plattformen, Data‑Warehouses, Agent‑Frameworks — erhält strukturierte Antworten.

### Agent‑bereiter Graph‑Zugriff

Jedes Konzept wird mit einer kanonischen IRI, maschinenlesbaren Metadaten und formalen semantischen Beziehungen veröffentlicht. Agenten und Automatisierungstools können den Graphen direkt konsumieren — über SPARQL oder eine graph‑native API — anstatt sich auf unstrukturierte PDFs oder ad‑hoc‑Prompt‑Engineering zu verlassen.

Damit bleibt dasselbe semantische Modell für Compliance‑Workflows und retrieval‑augmented Reasoning verfügbar, sodass Agenten Verpflichtungen, Risiken und Kontrollen aus einer einzigen Wahrheitsquelle ableiten.

---

## Bereitstellung

| Modus | Beschreibung |
|------|-------------|
| **GitHub** | Herunterladen und in Ihren eigenen RDF‑Store laden |
| **Cloud hosted** | Verwalteter Graph auf einer privaten Instanz, verschlüsselt |
| **Private cloud** | Bereitgestellt in Ihrer VPC (AWS, Azure, GCP) |
| **Air-gapped** | Vor Ort verfügbar für jeden Kunden |

---

## Offene Standards, kein Lock‑In

Die Ontologien werden unter offener Lizenz veröffentlicht. Exportieren Sie jederzeit als Standard‑RDF. Wenn Sie gehen, nehmen Sie einen vollständigen, portablen Knowledge‑Graph mit.

---

[Auf GitHub erkunden](https://github.com/iqns-org/ontologies) · [Funktionen ansehen](/features) · [Loslegen](/getting-started)
