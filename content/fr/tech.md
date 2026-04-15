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

## Modèles de domaine modulaires

IQ:NS est publié comme un graphe de connaissances modulaire et aligné par domaine, plutôt que comme une simple checklist de standards. Plus de 40 modules ontologiques indépendants et versionnés sont disponibles dans `./ontologies/v1/`, et chacun est aligné avec le reste du graphe via SKOS, OWL et des patrons sémantiques partagés.

Les domaines représentés comprennent la gouvernance de l'IA, la confidentialité des données, la résilience en sécurité, le risque financier, la supervision de la santé, la transparence gouvernementale et le contrôle d'entreprise. Cette structure maintient chaque modèle de domaine clair tout en préservant le raisonnement et la réutilisation interdomaines.

Chaque module est un document RDF/Turtle autonome avec des alignements sémantiques explicites pour qu'une seule requête puisse traverser plusieurs domaines.

---

## API et intégration

### Point d'accès SPARQL

Le graphe complet est interrogeable via SPARQL 1.1. Tout outil qui comprend SPARQL — plateformes BI, entrepôts de données, cadres d'agents — obtient des réponses structurées.

### Accès graphe prêt pour agents

Chaque concept est publié avec une IRI canonique, des métadonnées lisibles par machine et des relations sémantiques formelles. Les agents et workflows d'automatisation peuvent consommer le graphe directement — via SPARQL ou une API native graphe — plutôt que de s'appuyer sur des PDF non structurés.

Cela permet au même modèle sémantique de servir à la fois les workflows de conformité et le raisonnement enrichi par récupération, de sorte que les agents résolvent obligations, risques et contrôles à partir d'une source de vérité unique.

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
