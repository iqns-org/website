---
title: Foire aux questions
description: 'Questions courantes sur IQ:NS, les ontologies et comment les utiliser.'
lang: fr
navigation:
  section: platform
  label: FAQ
  order: 30
---
# Questions fréquentes

## À propos de IQ:NS

### Qu'est-ce que IQ:NS ?

Un projet open‑source qui modélise les normes d'IA, les réglementations et les connaissances institutionnelles sous forme d'ontologies formelles. Construit sur RDF, SKOS, OWL et SHACL — interrogeable par les personnes et les machines.

### Est‑il gratuit ?

Les ontologies de base sont gratuites et open‑source. Il existe un niveau commercial pour les services hébergés, les bases de connaissances privées et le support d'intégration.

### À qui s'adresse‑t‑il ?

Toute personne travaillant avec les normes d'IA — équipes de conformité, ingénieurs, architectes d'intégration, chercheurs, ou toute personne créant des agents qui doivent raisonner sur les règles institutionnelles.

### En quoi cela diffère‑t‑il d'une plateforme GRC ?

Les plateformes GRC exécutent des flux de travail et des approbations. IQ:NS fournit la couche sémantique sous‑jacente — des connaissances structurées sur ce que disent les normes et comment elles se relient. Elles sont complémentaires.

---

## À propos des ontologies

### Quels standards couvrez‑vous ?

Plus de 50 cadres sont actuellement disponibles — réglementation de l'IA, confidentialité, sécurité, règles sectorielles et contrôles d'entreprise. Voir [Ontologies ouvertes](/ontologies/index).

### Comment sont‑elles construites ?

Chaque norme est modélisée comme des classes OWL avec des libellés SKOS, des définitions et des correspondances d'alignement inter‑cadres. Chaque concept remonte à son texte source autoritaire.

### Comment les utiliser ?

Vous pouvez vous connecter à notre serveur MCP hébergé permettant à vos agents IA de communiquer entre eux et à votre chaîne d'approvisionnement numérique sans ambiguïté.

En tant que développeur, vous pouvez télécharger les fichiers source RDF depuis GitHub, les charger dans n'importe quel triplestore et les interroger avec SPARQL. 

### Puis‑je contribuer ?

Oui. Les ontologies ouvertes sont sur [GitHub](https://github.com/iqns-org/ontologies). L'expertise métier, les corrections et la couverture de nouveaux cadres sont les bienvenues.

### Que se passe‑t‑il lorsqu'une norme change ?

La communauté met à jour les ontologies. Chaque version est suivie — vous pouvez voir ce qui a changé et quand.

---

## À propos du niveau commercial

### Que comprend le niveau payant ?

Nous déployons une instance de notre serveur de connaissances d'entreprise contenant toutes les ontologies ouvertes et les cadres de gouvernance de l'IA.

Vous pouvez créer des bases de connaissances privées qui relient toutes les informations provenant de multiples sources — SQL, API, GraphQL et plus encore.

L'instance comprend des points d'accès SPARQL sécurisés, des serveurs MCP virtuels, des connecteurs pour les systèmes SaaS d'entreprise et un support pratique.

### En ai‑je besoin ?

Pour de nombreux cas d'utilisation, les ontologies gratuites suffisent. 

Le niveau commercial s'adresse aux équipes qui souhaitent davantage — connaissances privées, intégration d'agents, hébergement géré, extensions personnalisées ou support professionnel.

### Y a‑t‑il un verrouillage ?

Non. Tout s'exporte au format RDF Turtle standard. Vous pouvez partir avec votre graphe de connaissances complet à tout moment.

---

## Technique

### IQ:NS voit‑il mes données ?

Non. Les ontologies décrivent des concepts et des relations. Nous ne touchons jamais aux données de modèle, aux ensembles d'entraînement, aux sorties d'inférence ou aux informations personnelles identifiables (PII).

Toutes les instances hébergées commercialement sont sécurisées dans des clouds privés — les vôtres ou les nôtres.

### Puis‑je l'exécuter sur site ?

Oui. Les ontologies sont des fichiers que vous pouvez héberger n'importe où. 

Le niveau commercial prend également en charge les déploiements en cloud privé et isolés (air‑gapped) pour une véritable souveraineté des données.

---

[ontologies ouvertes](https://github.com/iqns-org/ontologies) · [Contactez‑nous](/support)
