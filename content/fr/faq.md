---
title: Foire aux questions
description: 'Questions courantes sur IQ:NS, les ontologies et comment les utiliser.'
lang: fr
navigation:
  section: ontologies
  label: FAQ
  order: 30
---
# Questions fréquentes

## À propos d'IQ:NS

### Qu'est-ce qu'IQ:NS ?

Un projet open source qui modélise les normes, réglementations et connaissances institutionnelles en IA sous forme d'ontologies formelles. Construit sur RDF, SKOS, OWL et SHACL — interrogeable par les personnes et les machines.

### Est-ce gratuit ?

Les ontologies de base sont gratuites et open source. Il existe un niveau commercial pour les services hébergés, les bases de connaissances privées et le support d'intégration.

### À qui s'adresse-t-il ?

Toute personne travaillant avec les normes IA — équipes de conformité, ingénieurs, architectes d'intégration, chercheurs, ou toute personne créant des agents qui doivent raisonner sur les règles institutionnelles.

### En quoi cela diffère-t-il d'une plateforme GRC ?

Les plateformes GRC exécutent des flux de travail et des approbations. IQ:NS fournit la couche sémantique sous‑jacente — connaissances structurées sur ce que disent les normes et comment elles se relient. Elles sont complémentaires.

---

## À propos des ontologies

### Quels standards couvrez-vous ?

Plus de 50 cadres, dont le EU AI Act, le NIST AI RMF, l'ISO 42001, le GDPR, l'OWASP LLM Top 10, le MITRE ATLAS, les réglementations sectorielles (FDA, EBA, SR 11‑7), et plus encore. Voir la [couverture complète](/standards).

### Comment sont-ils construits ?

Chaque norme est modélisée comme des classes OWL avec des libellés SKOS, des définitions et des mappings d'alignement inter‑cadres. Chaque concept remonte à son texte source autoritaire.

### Comment les utiliser ?

Téléchargez les fichiers Turtle depuis GitHub, chargez‑les dans n'importe quel triplestore et interrogez‑les avec SPARQL. Ou utilisez le serveur MCP hébergé pour connecter directement les agents IA.

### Puis‑je contribuer ?

Oui. Les ontologies sont sur [GitHub](https://github.com/iqns-org/ontologies). L'expertise métier, les corrections et la couverture de nouveaux cadres sont les bienvenues.

### Que se passe-t-il lorsqu'un standard change ?

La communauté met à jour les ontologies. Chaque version est suivie — vous pouvez voir ce qui a changé et quand.

---

## À propos du niveau commercial

### Que comprend le niveau payant ?

Bases de connaissances privées, points d'accès SPARQL hébergés, accès au serveur MCP, connecteurs ITIL SKMS et support pratique.

### En ai‑je besoin ?

Pour la plupart des cas d'usage, les ontologies gratuites suffisent. Le niveau commercial s'adresse aux équipes qui souhaitent un hébergement géré, des extensions privées ou un support d'intégration.

### Y a-t-il un verrouillage ?

Non. Tout s'exporte au format RDF Turtle standard. Vous pouvez partir avec votre graphe de connaissances complet à tout moment.

---

## Technique

### IQ:NS voit‑il mes données ?

Non. Les ontologies décrivent des concepts et des relations. Nous ne touchons jamais aux données de modèle, aux ensembles d'entraînement, aux sorties d'inférence ou aux PII.

### Puis‑je l'exécuter sur site ?

Oui. Les ontologies sont des fichiers que vous pouvez héberger où vous le souhaitez. Le niveau commercial prend également en charge le cloud privé et les déploiements isolés.

---

[Explorer les ontologies](https://github.com/iqns-org/ontologies) · [Contactez‑nous](/support)
