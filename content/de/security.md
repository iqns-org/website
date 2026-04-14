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

- Rahmenkonzepte und -beziehungen (öffentlicher regulatorischer Text)
- Ihre Systemprofile (bei Nutzung der kommerziellen Stufe): Namen, Fähigkeiten, Risikoklassifizierungen
- Ihre Ontologie-Erweiterungen (falls privat): benutzerdefinierte Konzepte und Zuordnungen
- Evidenzreferenzen (Links oder Hashes — nicht die Dokumente selbst)

Wir **speichern niemals** Trainingsdaten von Modellen, Gewichte, Inferenzausgaben, Kundendaten oder personenbezogene Daten (PII).

## Wo wir es speichern

- **Verschlüsselung:** AES-256 im Ruhezustand, TLS 1.3 während der Übertragung
- **Zugriff:** Rollenbasierte Kontrollen, Audit-Logging
- **Backups:** Automatisiert täglich, geografisch verteilt

## Bereitstellungsoptionen

- **Selbstgehostet** — Turtle-Dateien herunterladen, eigenen Triplestore betreiben
- **Cloud-gehostet** — verwaltete Instanz auf AWS, verschlüsselt
- **Private Cloud** — bereitgestellt in Ihrem VPC
- **Air-gapped** — vollständig vor Ort für regulierte Umgebungen

## Konformität

- SOC 2 Type II geprüft
- DSGVO-konform — keine Aufbewahrung personenbezogener Daten
- ISO 27001 zertifiziert
- HIPAA BAA und FedRAMP auf Anfrage verfügbar

## Standardmäßig offen

Die Kernontologien sind Open Source. Sie können jedes Konzept, jede Zuordnung, jede Beziehung überprüfen. Transparenz ist strukturell, nicht versprochen.

## Melden Sie ein Sicherheitsproblem

[security@iqns.org](mailto:security@iqns.org)

---

[Privacy policy](/privacy) · [Terms of service](/terms)
