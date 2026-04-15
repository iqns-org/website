---
title: Technologie & Architecture
description: >-
  Comment les ontologies IQ:NS sont construites : fondations du web sémantique,
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

- **JSON-LD** — le modèle de données universel. Chaque triplet RDF est interrogeable, exportable, reliable.
- **SKOS** — capture les hiérarchies, les mappings et les alignements entre les cadres.
- **OWL** — définit les classes, les propriétés et les relations logiques entre les concepts.
- **SHACL** — valide les formes de données et les contraintes.

Chaque concept possède un IRI canonique (stable, permanent), une définition formelle référencée au texte original, et des relations explicites avec des concepts liés à travers les cadres.

---

## Comment ça fonctionne

Lorsqu'un standard change, la mise à jour de l'ontologie se propage à travers chaque concept mappé — chaque obligation liée, chaque contrôle associé. Aucun remappage manuel.

### Déduplication inter-cadres

Lorsque différentes règles, politiques ou standards opérationnels exigent tous la transparence, IQ:NS les reconnaît comme `skos:exactMatch` et expose un seul concept, pas deux. Une requête résout les deux.

### Profilage contextuel

En fonction de la juridiction, du secteur et du type de capacité IA, une requête SPARQL renvoie l'ensemble précis et déduplié des concepts pertinents — pas une liste de cadres, mais exactement ce qui s'applique.

---

## Modèles de domaine modulaires

IQ:NS est publié comme un graphe de connaissances modulaire, aligné sur les domaines, plutôt que comme une simple liste de contrôle de standards. Plus de 40 modules d'ontologie indépendants et versionnés sont disponibles dans `./ontologies/v1/`, et chaque module est aligné avec le reste du graphe en utilisant SKOS, OWL et des modèles sémantiques partagés.

Les domaines représentatifs incluent la gouvernance de l'IA, la confidentialité des données, la résilience de la sécurité, le risque financier, la supervision de la santé, la transparence gouvernementale et les contrôles d'entreprise. Cette structure maintient chaque modèle de domaine clair tout en préservant le raisonnement et la réutilisation inter-domaines.

Chaque module est un document RDF/Turtle autonome avec des alignements sémantiques explicites afin qu'une seule requête puisse traverser plusieurs domaines.

---

## API et intégration

### Point d'accès SPARQL

Le graphe complet est interrogeable via SPARQL 1.1. Tout outil qui comprend SPARQL — plateformes BI, entrepôts de données, frameworks d'agents — obtient des réponses structurées.

### Accès au graphe prêt pour les agents

Chaque concept est publié avec un IRI canonique, des métadonnées lisibles par machine et des relations sémantiques formelles. Les agents et les outils d'automatisation peuvent consommer le graphe directement — via SPARQL ou une API native du graphe — au lieu de dépendre de PDF non structurés ou d'une ingénierie de prompts ad hoc.

Cela maintient le même modèle sémantique disponible pour les flux de travail de conformité et le raisonnement enrichi par la récupération, de sorte que les agents résolvent obligations, risques et contrôles à partir d'une source unique de vérité.

---

## Déploiement

| Mode | Description |
|------|-------------|
| **GitHub** | Télécharger et charger dans votre propre magasin RDF |
| **Cloud hosted** | Graphe géré sur une instance privée, chiffré |
| **Private cloud** | Déployé dans votre VPC (AWS, Azure, GCP) |
| **Air-gapped** | Disponible sur site pour chaque client |

---

## Standards ouverts, sans verrouillage

Les ontologies sont publiées sous licence ouverte. Exportez en tant que RDF standard à tout moment. Si vous partez, vous emportez avec vous un graphe de connaissances complet et portable.

---

[Explorer sur GitHub](https://github.com/iqns-org/ontologies) · [Voir les fonctionnalités](/features) · [Commencer](/getting-started)
