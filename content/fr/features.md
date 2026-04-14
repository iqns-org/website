---
title: Fonctionnalités et capacités
description: >-
  Ce que IQ:NS fournit — ontologies ouvertes, mappings inter‑cadres, accès
  SPARQL et intégration prête pour les agents.
lang: fr
navigation:
  section: platform
  label: Fonctionnalités
  order: 10
---
# Fonctionnalités & Capacités

## Ontologies ouvertes

Plus de 50 ontologies couvrant l'IA, le juridique, la finance, la santé, le gouvernement, l'entreprise, et plus encore. Chacune est modélisée en RDF/OWL avec des alignements SKOS, publiée sous forme de fichiers Turtle versionnés.

Chaque concept possède :
- Une IRI stable (identifiant permanent, pas une ligne de base de données)
- Une définition formelle référencée au texte original
- Des relations avec des concepts connexes à travers les cadres
- Des correspondances inter-cadres (`skos:exactMatch`, `skos:broadMatch`, `skos:relatedMatch`)

---

## Intelligence inter-cadres

Les cadres utilisent des mots différents pour les mêmes idées. IQ:NS les cartographie de manière structurée :

- Article 9 du AI Act de l'UE ↔ Fonction de la carte NIST AI RMF ↔ Clause 6.1 de l'ISO 42001 (gestion des risques)
- Article 22 du RGPD ↔ Chapitre IV du AI Act de l'UE (transparence)
- ISO 24027 ↔ Mesure 2.6 du NIST (biais et équité)

Une requête couvre chaque norme. Un contrôle peut satisfaire plusieurs cadres — et la cartographie le prouve.

---

## Profilage contextuel

Tout ne s'applique pas à tout le monde. Profilage par :
- **Juridiction** — UE, États‑Unis, Royaume‑Uni, APAC
- **Secteur** — finance, santé, gouvernement, RH
- **Capacité IA** — LLM, biométrie, scoring de crédit, décisions autonomes

Obtenez un ensemble précis et dédupliqué de ce qui est pertinent — pas 40 cadres, seulement ce qui compte pour votre contexte.

---

## Point d'accès SPARQL

Le graphe complet est interrogeable :

```sparql
SELECT ?obligation ?isoControl ?nistControl
WHERE {
  ?obligation skos:exactMatch ?isoControl ;
              skos:exactMatch ?nistControl .
  ?isoControl ai:partOf <iso-42001> .
  ?nistControl ai:partOf <nist-ai-rmf> .
}
```

Tout outil qui comprend SPARQL — plateformes BI, entrepôts de données, cadres d'agents — peut interroger directement les ontologies.

---

## MCP pour les flux de travail agentiques

Chaque concept possède une IRI stable, une définition lisible par machine et des relations formelles. Les agents IA interrogent le graphe et obtiennent des réponses structurées et typées — aucune insertion de prompts PDF n'est requise.

---

## Intégration

IQ:NS s'intègre aux outils existants :

- **Plateformes GRC** — OneTrust, Vanta, ServiceNow
- **Catalogues de données** — Collibra, Alation
- **Registres de modèles** — MLflow, Weights & Biases
- **Plateformes cloud** — AWS, Azure, GCP
- **Outils de développement** — Jira, pipelines CI/CD
- **ITSM** — Connecteurs SKMS ITIL v3/v4

Aucune migration forcée. Les ontologies s'adaptent à vos outils.

---

## Versionnées et portables

Chaque ontologie est versionnée. Exportée au format RDF Turtle standard. Si vous partez, vous emportez avec vous un graphe de connaissances complet et conforme aux standards. Aucun verrouillage.

---

[Explorer sur GitHub](https://github.com/iqns-org/ontologies) · [Voir la technologie](/tech) · [Voir les tarifs](/pricing)
