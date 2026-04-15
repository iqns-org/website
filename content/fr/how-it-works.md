---
title: 'Comment IQ:NS fonctionne'
description: >-
  Comment IQ:NS transforme les normes et les connaissances institutionnelles en
  ontologies structurées et interrogeables que les agents IA et les équipes
  peuvent utiliser.
lang: fr
navigation:
  section: platform
  label: howItWorks
  order: 15
---
# Comment fonctionne IQ:NS

## Des documents à la connaissance structurée

Les normes, règlements et règles institutionnelles existent sous forme de langage naturel dans les PDF. Utiles pour les personnes qui les lisent de bout en bout — moins utiles lorsqu’il faut qu’une machine raisonne sur la façon dont l’article 13 du EU AI Act se rapporte à un contrôle NIST ou à une clause ISO.

IQ:NS modélise ces concepts comme des ontologies formelles — des vocabulaires structurés où chaque terme possède un identifiant stable, une définition ancrée dans sa source, et des relations explicites avec les concepts connexes à travers les cadres.

## Les quatre couches

### 1. Modélisation des concepts

Chaque norme est décomposée en ses concepts constitutifs — obligations, contrôles, catégories de risque, rôles — et représentée sous forme de classes OWL avec des libellés et définitions SKOS. Chaque concept remonte à sa source autoritaire.

### 2. Alignement inter‑cadres

Les cadres se chevauchent constamment. L’article 22 du RGPD et l’article 13 du EU AI Act abordent tous deux la transparence. ISO 42001 et NIST AI RMF définissent tous deux des processus de gestion des risques. IQ:NS capture ces alignements explicitement en utilisant `skos:exactMatch`, `skos:broadMatch` et `skos:relatedMatch`.

Une requête vous montre où les cadres convergent, où ils divergent, et où des lacunes existent.

### 3. Profilage contextuel

Tous les concepts ne s’appliquent pas à chaque situation. IQ:NS prend en charge le profilage par juridiction, secteur et type de capacité — ainsi vous pouvez interroger « qu’est‑ce qui s’applique à un système de scoring de crédit dans l’UE ? » et obtenir une réponse précise et dédupliquée.

### 4. Maintenance continue

Les cadres évoluent. De nouvelles normes apparaissent. La communauté maintient et étend les ontologies afin que la connaissance reste à jour. Chaque version est suivie — vous pouvez toujours voir ce qui a changé et quand.

---

## Comment l’utiliser

- **Parcourir sur GitHub** — téléchargez les fichiers Turtle, chargez‑les dans votre triplestore  
- **Interroger via SPARQL** — posez des questions à travers les cadres de façon programmatique  
- **Connecter via MCP** — laissez vos agents IA raisonner directement sur la connaissance institutionnelle  
- **Intégrer aux outils** — branchez‑vous aux plateformes GRC, catalogues de données, pipelines CI/CD  

---

## Ce que IQ:NS n’est pas

- Ce n’est pas un moteur de politiques — il n’exécute pas de règles  
- Ce n’est pas une plateforme GRC — elle ne gère pas les flux de travail ou les approbations  
- Ce n’est pas un cabinet de conseil — vous prenez les décisions ; les ontologies fournissent la structure  

IQ:NS est le **fondement sémantique** sur lequel ces systèmes peuvent se construire.

---

[Explorer les ontologies](https://github.com/iqns-org/ontologies) · [Voir la technologie](/tech) · [Commencer](/getting-started)
