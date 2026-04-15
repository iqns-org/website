---
title: Vertrauen & Sicherheit
description: 'Wie IQ:NS Daten verarbeitet, was wir speichern und wie wir sie schützen.'
lang: de
navigation:
  section: platform
  label: Sicherheit
  order: 30
---
# Vertrauen & Sicherheit

## Was wir speichern

IQ:NS arbeitet nur mit **Metadaten**:

- Rahmenkonzepte und Beziehungen (öffentlicher Regulierungstext)
- Ihre Systemprofile (bei Nutzung der kommerziellen Stufe): Namen, Fähigkeiten, Risikoklassifizierungen
- Ihre Ontologie‑Erweiterungen (falls privat): benutzerdefinierte Konzepte und Zuordnungen
- Evidenz‑Referenzen (Links oder Hashes – nicht die Dokumente selbst)

Wir **speichern niemals** Trainingsdaten, Gewichte, Inferenz‑Ausgaben, Kundendaten oder PII.

## Wo wir es speichern

- **Verschlüsselung:** AES-256 im Ruhezustand, TLS 1.3 während der Übertragung
- **Zugriff:** Rollenbasierte Kontrollen, Audit‑Logging
- **Backups:** Automatisiert täglich, geografisch verteilt

## Bereitstellungsoptionen

- **Selbstgehostet** — Turtle‑Dateien herunterladen, eigenen Triplestore betreiben
- **Cloud‑gehostet** — verwaltete Instanz auf AWS, verschlüsselt
- **Private Cloud** — in Ihrem VPC bereitgestellt
- **Air‑gapped** — Vor Ort für jeden Kunden verfügbar

## Konformität

- SOC 2 Typ II geprüft
- DSGVO‑konform — keine Speicherung personenbezogener Daten
- ISO 27001 zertifiziert
- HIPAA BAA und FedRAMP auf Anfrage verfügbar

## Standardmäßig offen

Die Kernontologien sind Open Source. Sie können jedes Konzept, jede Zuordnung, jede Beziehung prüfen. Transparenz ist strukturell, nicht versprochen.

## Sicherheitsproblem melden

[security@iqns.org](mailto:security@iqns.org)

---

[Privacy policy](/privacy) · [Terms of service](/terms)
