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

- Rahmenkonzepte und Beziehungen (öffentlicher regulatorischer Text)
- Ihre Systemprofile (bei Nutzung der kommerziellen Stufe): Namen, Fähigkeiten, Risikoklassifizierungen
- Ihre Ontologie-Erweiterungen (wenn privat): benutzerdefinierte Konzepte und Zuordnungen
- Evidenzreferenzen (Links oder Hashes – nicht die Dokumente selbst)

Wir **speichern niemals** Modelldaten zum Training, Gewichte, Inferenzausgaben, Kundendaten oder PII.

## Wo wir es speichern

- **Verschlüsselung:** AES-256 im Ruhezustand, TLS 1.3 während der Übertragung
- **Zugriff:** Rollenbasierte Kontrollen, Audit-Logging
- **Backups:** Automatisiert täglich, geografisch verteilt

## Bereitstellungsoptionen

- **Selbstgehostet** — Turtle-Dateien herunterladen, eigenen Triplestore betreiben
- **Cloud-gehostet** — verwaltete Instanz auf AWS, verschlüsselt
- **Private Cloud** — bereitgestellt in Ihrem VPC
- **Air-gapped** — Vor Ort für jeden Kunden verfügbar

## Konformität

- SOC 2 Type II geprüft
- DSGVO-konform — keine Speicherung personenbezogener Daten
- ISO 27001 zertifiziert
- HIPAA BAA und FedRAMP auf Anfrage verfügbar

## Standardmäßig offen

Die Kernontologien sind Open Source. Sie können jedes Konzept, jede Zuordnung, jede Beziehung überprüfen. Transparenz ist strukturell, nicht versprochen.

## Melden Sie ein Sicherheitsproblem

[security@iqns.org](mailto:security@iqns.org)

---

[Privacy policy](/privacy) · [Terms of service](/terms)
