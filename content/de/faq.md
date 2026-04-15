---
title: Häufig gestellte Fragen
description: 'Häufige Fragen zu IQ:NS, den Ontologien und deren Verwendung.'
lang: de
navigation:
  section: ontologies
  label: FAQ
  order: 30
---
# Häufig gestellte Fragen

## Über IQ:NS

### Was ist IQ:NS?

Ein Open‑Source‑Projekt, das KI‑Standards, Vorschriften und institutionelles Wissen als formale Ontologien modelliert. Aufgebaut auf RDF, SKOS, OWL und SHACL — abfragbar von Menschen und Maschinen.

### Ist es kostenlos?

Die Kern‑Ontologien sind kostenlos und Open Source. Es gibt eine kommerzielle Stufe für gehostete Dienste, private Wissensbasen und Integrationssupport.

### Für wen ist das?

Jeder, der mit KI‑Standards arbeitet — Compliance‑Teams, Ingenieure, Integrationsarchitekten, Forschende oder alle, die Agenten bauen, die über institutionelle Regeln nachdenken müssen.

### Wie unterscheidet es sich von einer GRC‑Plattform?

GRC‑Plattformen steuern Workflows und Genehmigungen. IQ:NS liefert die semantische Schicht darunter — strukturiertes Wissen darüber, was die Standards sagen und wie sie zusammenhängen. Sie ergänzen sich.

---

## Über die Ontologien

### Welche Standards decken Sie ab?

Mehr als 50 Rahmenwerke, darunter EU‑AI‑Act, NIST AI RMF, ISO 42001, DSGVO, OWASP LLM Top 10, MITRE ATLAS, branchenspezifische Vorschriften (FDA, EBA, SR 11‑7) und mehr. Siehe [vollständige Abdeckung](/standards).

### Wie werden sie erstellt?

Jeder Standard wird als OWL‑Klassen mit SKOS‑Bezeichnungen, Definitionen und übergreifenden Alignments modelliert. Jeder Begriff lässt sich auf den autoritativen Quelltext zurückführen.

### Wie verwende ich sie?

Laden Sie die Turtle‑Dateien von GitHub herunter, importieren Sie sie in einen beliebigen Triplestore und fragen Sie mit SPARQL ab. Oder nutzen Sie den gehosteten MCP‑Server, um KI‑Agenten direkt zu verbinden.

### Kann ich beitragen?

Ja. Die Ontologien finden Sie auf [GitHub](https://github.com/iqns-org/ontologies). Fachwissen, Korrekturen und neue Rahmenwerke sind willkommen.

### Was passiert, wenn ein Standard geändert wird?

Die Community aktualisiert die Ontologien. Jede Version wird nachverfolgt — Sie können sehen, was sich wann geändert hat.

---

## Über die kommerzielle Stufe

### Was beinhaltet die kostenpflichtige Stufe?

Private Wissensbasen, gehostete SPARQL‑Endpoints, MCP‑Server‑Zugang, ITIL‑SKMS‑Connectoren und praxisnahen Support.

### Brauche ich das?

Für die meisten Anwendungsfälle reichen die kostenlosen Ontologien aus. Die kommerzielle Stufe richtet sich an Teams, die verwaltetes Hosting, private Erweiterungen oder Integrationssupport wünschen.

### Gibt es Bindungen?

Nein. Alles lässt sich als Standard‑RDF‑Turtle exportieren. Sie können jederzeit mit Ihrem vollständigen Wissensgraphen gehen.

---

## Technisch

### Sieht IQ:NS meine Daten?

Nein. Die Ontologien beschreiben Konzepte und Beziehungen. Wir berühren niemals Modelldaten, Trainingsdatensätze, Inferenz‑Ergebnisse oder personenbezogene Daten (PII).

### Kann ich es vor Ort ausführen?

Ja. Die Ontologien sind Dateien, die Sie überall hosten können. Die kommerzielle Stufe unterstützt zudem private Cloud‑ und air‑gapped‑Deployments.

---

[Entdecken Sie die Ontologien](https://github.com/iqns-org/ontologies) · [Kontaktieren Sie uns](/support)
