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

## Modulare Domänenmodelle

IQ:NS wird als modularer, domain-aligned Knowledge Graph veröffentlicht, nicht als einfache Liste von Standards. Mehr als 40 unabhängige, versionierte Ontologie-Module sind in `./ontologies/v1/` verfügbar, und jedes Modul ist über SKOS, OWL und gemeinsame semantische Muster mit dem Rest des Graphen ausgerichtet.

Repräsentative Domänen umfassen KI-Governance, Datenschutz, Sicherheitsresilienz, Finanzrisiken, Gesundheitsaufsicht, staatliche Transparenz und Unternehmenssteuerung. Diese Struktur bewahrt die Klarheit jedes Domänenmodells und ermöglicht dennoch domänenübergreifendes Schließen und Wiederverwendung.

Jedes Modul ist ein eigenständiges RDF/Turtle-Dokument mit expliziten semantischen Ausrichtungen, sodass eine einzige Abfrage mehrere Domänen durchlaufen kann.

---

## APIs und Integration

### SPARQL‑Endpunkt

Der gesamte Graph ist über SPARQL 1.1 abfragbar. Jedes Tool, das SPARQL versteht — BI‑Plattformen, Data Warehouses, Agenten‑Frameworks — erhält strukturierte Antworten.

### Agentenfähiger Graphzugriff

Jedes Konzept wird mit einer kanonischen IRI, maschinenlesbaren Metadaten und formalen semantischen Beziehungen veröffentlicht. Agenten und Automatisierungs-Workflows können den Graphen direkt konsumieren — über SPARQL oder eine graph-native API — statt sich auf unstrukturierte PDFs zu verlassen.

So steht dasselbe semantische Modell sowohl Compliance-Workflows als auch Retrieval-gestütztem Schließen zur Verfügung, damit Agenten Verpflichtungen, Risiken und Kontrollen aus einer einzigen Quelle der Wahrheit ableiten.

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
