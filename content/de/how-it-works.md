---
title: 'Wie IQ:NS funktioniert'
description: >-
  Wie IQ:NS Standards und institutionelles Wissen in strukturierte, abfragbare
  Ontologien verwandelt, die KI‑Agenten und Teams nutzen können.
lang: de
navigation:
  section: platform
  label: howItWorks
  order: 15
---
# Wie IQ:NS funktioniert

## Von Dokumenten zu strukturiertem Wissen

Standards, Vorschriften und institutionelle Regeln liegen als natürliche Sprache in PDFs vor. Sie sind nützlich für Menschen, die sie von Anfang bis Ende lesen — weniger nützlich, wenn eine Maschine darüber nachdenken muss, wie Artikel 13 des EU‑KI‑Gesetzes zu einer NIST‑Kontrolle oder einer ISO‑Klausel in Beziehung steht.

IQ:NS modelliert diese Konzepte als formale Ontologien — strukturierte Vokabulare, bei denen jeder Begriff eine stabile Kennung, eine auf seiner Quelle basierende Definition und explizite Beziehungen zu verwandten Konzepten über verschiedene Rahmenwerke hinweg hat.

## Die vier Ebenen

### 1. Konzeptmodellierung

Jeder Standard wird in seine Bestandteile zerlegt — Verpflichtungen, Kontrollen, Risikokategorien, Rollen — und als OWL‑Klassen mit SKOS‑Bezeichnungen und Definitionen dargestellt. Jeder Begriff lässt sich auf seine maßgebliche Quelle zurückverfolgen.

### 2. Rahmenübergreifende Ausrichtung

Rahmenwerke überschneiden sich ständig. Artikel 22 der DSGVO und Artikel 13 des EU‑KI‑Gesetzes behandeln beide Transparenz. ISO 42001 und NIST AI RMF definieren beide Risikomanagement‑Prozesse. IQ:NS erfasst diese Ausrichtungen explizit mittels `skos:exactMatch`, `skos:broadMatch` und `skos:relatedMatch`.

Eine Abfrage zeigt Ihnen, wo Rahmenwerke konvergieren, wo sie divergieren und wo Lücken bestehen.

### 3. Kontextbezogenes Profiling

Nicht jedes Konzept gilt für jede Situation. IQ:NS unterstützt das Profiling nach Rechtsgebiet, Sektor und Fähigkeitstyp — sodass Sie fragen können: „Was gilt für ein Kredit‑Scoring‑System in der EU?“ und eine präzise, deduplizierte Antwort erhalten.

### 4. Kontinuierliche Wartung

Rahmenwerke ändern sich. Neue Standards kommen hinzu. Die Community pflegt und erweitert die Ontologien, damit das Wissen aktuell bleibt. Jede Version wird nachverfolgt — Sie können jederzeit sehen, was sich wann geändert hat.

---

## Wie Sie es nutzen

- **Auf GitHub browsen** — die Turtle‑Dateien herunterladen, in Ihren Triplestore laden
- **Abfragen via SPARQL** — programmatisch Fragen über Rahmenwerke stellen
- **Verbinden via MCP** — lassen Sie Ihre KI‑Agenten direkt über institutionelles Wissen nachdenken
- **In Werkzeuge integrieren** — in GRC‑Plattformen, Datenkataloge, CI/CD‑Pipelines einbinden

---

## Was IQ:NS nicht ist

- Kein Policy‑Engine — sie führt keine Regeln aus
- Keine GRC‑Plattform — sie führt keine Workflows oder Genehmigungen aus
- Keine Beratung — Sie treffen die Entscheidungen; die Ontologien liefern die Struktur

IQ:NS ist das **semantische Fundament**, auf dem diese Systeme aufbauen können.

---

[Entdecken Sie die Ontologien](https://github.com/iqns-org/ontologies) · [Technologie ansehen](/tech) · [Erste Schritte](/getting-started)
