---
title: Normes et cadres
description: >-
  Les modèles IQ:NS des normes d'IA et organisationnelles — ce qu'ils couvrent,
  à qui ils s'appliquent et comment ils se connectent.
lang: fr
navigation:
  section: ontologies
  label: Normes
  order: 20
---
# Normes & Cadres

## Le paysage

Aucun cadre unique ne couvre tout. La plupart des organisations font face à des exigences qui se chevauchent provenant de multiples normes — et les lacunes entre elles sont où les problèmes se cachent.

IQ:NS modélise 50 + cadres et modèles de domaine à partir de `./ontologies/v1/` sous forme d'ontologies structurées. Voici ce qu'ils couvrent.

IQ:NS ne privilégie pas un ensemble unique de réglementations ; il sélectionne les modèles d'ontologie pertinents pour chaque contexte à partir du référentiel.

---

## Cadres Horizontaux

### EU AI Act
- **S'applique à :** Toute organisation offrant ou déployant de l'IA dans l'UE
- **Couvre :** Classification des risques, évaluation de conformité, transparence, documentation technique, supervision humaine
- **Application :** Amendes pouvant atteindre 7 % du chiffre d'affaires mondial

### Cadre de Gestion des Risques IA de NIST
- **S'applique à :** Volontaire, mais de plus en plus référencé par les régulateurs et les achats américains
- **Couvre :** Quatre fonctions de base — Gouverner, Cartographier, Mesurer, Gérer
- **Pourquoi c'est important :** Le cadre le plus opérationnellement exploitable disponible

### ISO 42001
- **S'applique à :** Organisations cherchant une certification formelle de gestion de l'IA
- **Couvre :** Système de gestion Plan-Faire-Vérifier-Agir, contrôles de l'Annexe A, audit interne

### RGPD UE (dispositions IA)
- **S'applique à :** Toute organisation traitant des données personnelles de résidents de l'UE avec l'IA
- **Couvre :** Article 22 (décisions automatisées), transparence du profilage, minimisation des données

---

## Normes spécifiques aux secteurs

### Services financiers
| Cadre | Juridiction | Focus |
|---|---|---|
| SR 11-7 | US | Gestion du risque de modèle |
| EBA AI Guidelines | EU | Supervision IA des établissements de crédit |
| MAS AI Governance | Singapore | Gouvernance IA des institutions financières |

### Santé
| Cadre | Juridiction | Focus |
|---|---|---|
| FDA AI/ML SaMD | US | IA clinique et logiciel en tant que dispositif médical |
| ONC Trustworthy AI | US | Normes IA pour les technologies de l'information en santé |

### Sécurité
| Cadre | Focus |
|---|---|
| OWASP LLM Top 10 | Vulnérabilités de sécurité des LLM |
| MITRE ATLAS | Paysage des menaces IA adversariales |
| Google SAIF | Cadre d'IA sécurisée |

### Éthique & Principes
| Cadre | Origine |
|---|---|
| OECD AI Principles | OECD |
| UNESCO AI Ethics | UNESCO |
| IEEE 7000 | IEEE |

---

## Comment les cadres se chevauchent

Terminologie différente, mêmes concepts :

| Concept | EU AI Act | NIST AI RMF | ISO 42001 |
|---|---|---|---|
| Gestion des risques | Article 9 | Map function | Clause 6.1 |
| Supervision humaine | Article 14 | Govern 1.4 | A.8.4 |
| Documentation technique | Article 11 | Map 3.4 | A.6.2 |
| Biais et équité | Article 10(2)(f) | Measure 2.6 | A.10.3 |
| Transparence | Chapter IV | Govern 4.1 | A.8.3 |

IQ:NS cartographie ces correspondances de manière structurée — ainsi vous pouvez voir où un concept s'étend sur plusieurs normes et où de véritables lacunes existent.

---

[Voir comment les ontologies fonctionnent](/how-it-works) · [Explorer sur GitHub](https://github.com/iqns-org/ontologies)
