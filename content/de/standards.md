---
title: Standards & Frameworks
description: >-
  Die KI- und Organisationsstandards IQ:NS-Modelle — was sie abdecken, für wen
  sie gelten und wie sie verbunden sind.
lang: de
navigation:
  section: ontologies
  label: Standards
  order: 20
---
# Standards & Rahmenwerke

## Die Landschaft

Kein einzelnes Rahmenwerk deckt alles ab. Die meisten Organisationen stehen vor überlappenden Anforderungen aus mehreren Standards — und die Lücken dazwischen sind dort, wo Probleme verborgen sind.

IQ:NS modelliert über 50 Frameworks und Domänenmodelle aus `./ontologies/v1/` als strukturierte Ontologien. Das ist, was sie abdecken.

IQ:NS priorisiert nicht ein einzelnes Regelwerk; es wählt die relevanten Ontologie‑Modelle für jeden Kontext aus dem Repository aus.

---

## Horizontale Rahmenwerke

### EU AI Act
- **Gilt für:** Jede Organisation, die KI in der EU anbietet oder einsetzt
- **Umfasst:** Risikoklassifizierung, Konformitätsbewertung, Transparenz, technische Dokumentation, menschliche Aufsicht
- **Durchsetzung:** Geldbußen bis zu 7 % des globalen Umsatzes

### NIST AI Risk Management Framework
- **Gilt für:** Freiwillig, wird aber zunehmend von US‑Regulierungsbehörden und Beschaffungsstellen referenziert
- **Umfasst:** Vier Kernfunktionen — Govern, Map, Measure, Manage
- **Warum es wichtig ist:** Das operativ am meisten umsetzbare Rahmenwerk, das derzeit verfügbar ist

### ISO 42001
- **Gilt für:** Organisationen, die eine formale KI‑Management‑Zertifizierung anstreben
- **Umfasst:** Plan‑Do‑Check‑Act‑Managementsystem, Anhang‑A‑Kontrollen, interne Audits

### EU GDPR (KI‑Bestimmungen)
- **Gilt für:** Jede Organisation, die personenbezogene Daten von EU‑Bewohnern mit KI verarbeitet
- **Umfasst:** Artikel 22 (automatisierte Entscheidungen), Transparenz beim Profiling, Datenminimierung

---

## Branchenspezifische Standards

### Finanzdienstleistungen
| Rahmenwerk | Rechtsgebiet | Fokus |
|---|---|---|
| SR 11-7 | USA | Modellrisikomanagement |
| EBA AI Guidelines | EU | KI‑Überwachung von Kreditinstituten |
| MAS AI Governance | Singapur | KI‑Governance von Finanzinstituten |

### Gesundheitswesen
| Rahmenwerk | Rechtsgebiet | Fokus |
|---|---|---|
| FDA AI/ML SaMD | USA | Klinische KI und Software als Medizinprodukt |
| ONC Trustworthy AI | USA | KI‑Standards für Gesundheits‑IT |

### Sicherheit
| Rahmenwerk | Fokus |
|---|---|
| OWASP LLM Top 10 | Sicherheitslücken bei LLMs |
| MITRE ATLAS | Bedrohungslandschaft für adversariale KI |
| Google SAIF | Sicheres KI‑Rahmenwerk |

### Ethik & Prinzipien
| Rahmenwerk | Ursprung |
|---|---|
| OECD AI Principles | OECD |
| UNESCO AI Ethics | UNESCO |
| IEEE 7000 | IEEE |

---

## Wie Rahmenwerke überlappen

Unterschiedliche Terminologie, gleiche Konzepte:

| Konzept | EU AI‑Gesetz | NIST AI RMF | ISO 42001 |
|---|---|---|---|
| Risikomanagement | Artikel 9 | Map‑Funktion | Klausel 6.1 |
| Menschliche Aufsicht | Artikel 14 | Govern 1.4 | A.8.4 |
| Technische Dokumentation | Artikel 11 | Map 3.4 | A.6.2 |
| Voreingenommenheit und Fairness | Artikel 10(2)(f) | Measure 2.6 | A.10.3 |
| Transparenz | Kapitel IV | Govern 4.1 | A.8.3 |

IQ:NS mappt diese Querverweise strukturell — so können Sie sehen, wo ein Konzept mehrere Standards überspannt und wo echte Lücken bestehen.

---

[Siehe, wie die Ontologien funktionieren](/how-it-works) · [Auf GitHub erkunden](https://github.com/iqns-org/ontologies)
