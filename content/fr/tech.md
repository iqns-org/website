---
title: Technologie & Architecture
description: >-
  Comment les ontologies IQ:NS sont construites : bases du web sémantique,
  cadres lisibles par machine et API prêtes pour les agents.
lang: fr
navigation:
  section: platform
  label: Technologie
  order: 20
---
# Technologie & Architecture

## Construit sur les standards du web sémantique

IQ:NS utilise les mêmes standards qui alimentent la publication scientifique, la recherche pharmaceutique et l'intégration de données d'entreprise à l'échelle mondiale :

- **RDF** — le modèle de données universel. Chaque triplet est interrogeable, exportable, reliable.
- **SKOS** — capture les hiérarchies, les mappings et les alignements entre les cadres.
- **OWL** — définit les classes, les propriétés et les relations logiques entre les concepts.
- **SHACL** — valide les formes de données et les contraintes.

Chaque concept possède un IRI canonique (stable, permanent), une définition formelle provenant du texte original, et des relations explicites avec des concepts liés à travers les cadres.

---

## Comment ça fonctionne

Lorsque un standard change, la mise à jour de l'ontologie se propage à travers chaque concept mappé — chaque obligation liée, chaque contrôle associé. Aucun remappage manuel.

### Déduplication inter-cadres

Lorsque l'Article 22 du RGPD et l'Article 13 de la loi européenne sur l'IA exigent tous deux la transparence, IQ:NS les reconnaît comme `skos:exactMatch` et fait apparaître un seul concept, pas deux. Une requête résout les deux.

### Profilage contextuel

En fonction de la juridiction, du secteur et du type de capacité IA, une requête SPARQL renvoie l'ensemble précis et déduplié des concepts pertinents — pas une liste de cadres, mais exactement ce qui s'applique.

---

## Couverture des cadres

Plus de 40 cadres répartis sur sept domaines :

| Domaine | Cadres |
|--------|-----------|
| **IA** | EU AI Act, NIST AI RMF, ISO 42001, ISO 23894, ISO 24027–29 |
| **Données & Confidentialité** | GDPR, UK GDPR, CCPA, eIDAS |
| **Sécurité** | OWASP LLM Top 10, NIST CSF 2.0, ISO 27001, SOC 2 |
| **Finance** | EBA guidelines, DORA, Basel model risk |
| **Santé** | FDA AI/ML guidance, MDR, HIPAA |
| **Gouvernement** | NIST EO 13960, UK algorithmic transparency |
| **Entreprise** | ISO 31000, COSO ERM, ITIL 4, IEEE 7000 series |

Chaque cadre est un document Turtle autonome et versionné.

---

## API et intégration

### Point d'accès SPARQL

Le graphe complet est interrogeable via SPARQL 1.1. Tout outil qui comprend SPARQL — plateformes BI, entrepôts de données, cadres d'agents — obtient des réponses structurées.

### MCP pour les agents

Chaque concept possède un IRI stable, une définition lisible par machine et des relations formelles. Les agents IA interrogent le graphe directement — pas de bourrage de contexte PDF.

---

## Déploiement

| Mode | Description |
|------|-------------|
| **GitHub** | Téléchargez les fichiers Turtle, chargez-les dans votre propre triplestore |
| **Cloud hosted** | Graphe géré sur une instance privée, chiffré |
| **Private cloud** | Déployé dans votre VPC (AWS, Azure, GCP) |
| **Air-gapped** | Entièrement sur site pour les environnements réglementés |

---

## Standards ouverts, sans verrouillage

Les ontologies sont publiées sous licence ouverte. Exportez au format RDF Turtle standard à tout moment. Si vous partez, vous emportez avec vous un graphe de connaissances complet et portable.

---

[Explorer sur GitHub](https://github.com/iqns-org/ontologies) · [Voir les fonctionnalités](/features) · [Commencer](/getting-started)
