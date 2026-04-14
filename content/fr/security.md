---
title: Confiance et sécurité
description: >-
  Comment IQ:NS gère les données, ce que nous stockons et comment nous les
  protégeons.
lang: fr
navigation:
  section: platform
  label: Sécurité
  order: 30
---
# Confiance et Sécurité

## Ce que nous stockons

IQ:NS fonctionne uniquement sur **les métadonnées** :

- Concepts et cadres ainsi que leurs relations (texte réglementaire public)
- Vos profils système (si vous utilisez le niveau commercial) : noms, capacités, classifications de risque
- Vos extensions d'ontologie (si privées) : concepts et mappages personnalisés
- Références de preuves (liens ou hachages — pas les documents eux‑mêmes)

Nous **ne stockons jamais** les données d'entraînement du modèle, les poids, les sorties d'inférence, les données client ou les informations personnelles identifiables (PII).

## Où nous les stockons

- **Chiffrement :** AES-256 au repos, TLS 1.3 en transit
- **Accès :** Contrôles basés sur les rôles, journalisation d'audit
- **Sauvegardes :** Automatisées quotidiennement, réparties géographiquement

## Options de déploiement

- **Auto-hébergé** — téléchargez les fichiers Turtle, exécutez votre propre triplestore
- **Hébergé sur le cloud** — instance gérée sur AWS, chiffrée
- **Cloud privé** — déployé dans votre VPC
- **Air-gapped** — entièrement sur site pour les environnements réglementés

## Conformité

- Audité SOC 2 Type II
- Conforme au RGPD — aucune rétention de données personnelles
- Certifié ISO 27001
- HIPAA BAA et FedRAMP disponibles sur demande

## Ouvert par défaut

Les ontologies de base sont open source. Vous pouvez vérifier chaque concept, chaque mappage, chaque relation. La transparence est structurelle, pas simplement promise.

## Signaler un problème de sécurité

[security@iqns.org](mailto:security@iqns.org)

---

[Politique de confidentialité](/privacy) · [Conditions d'utilisation](/terms)
