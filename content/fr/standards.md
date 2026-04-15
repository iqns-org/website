---
title: Normes et cadres
description: >-
  Les normes d'IA et organisationnelles IQ:NS — ce qu'elles couvrent, à qui
  elles s'appliquent et comment elles se relient.
lang: fr
navigation:
  section: ontologies
  label: Normes
  order: 20
---
# Normes et Cadres

## Le paysage

Aucun cadre unique ne couvre tout. La plupart des organisations font face à des exigences qui se chevauchent provenant de multiples normes — et les lacunes entre elles sont là où les problèmes se cachent.

IQ:NS modélise plus de 50 cadres et modèles de domaine à partir de `./ontologies/v1/` sous forme d'ontologies structurées. Voici ce qu'ils couvrent.

IQ:NS ne privilégie pas un ensemble unique de réglementations ; il sélectionne les modèles d'ontologie pertinents pour chaque contexte à partir du référentiel.

---

## Cadres Horizontaux

### Loi IA de l'UE
- **S'applique à :** Toute organisation offrant ou déployant de l'IA dans l'UE
- **Couvre :** Classification des risques, évaluation de conformité, transparence, documentation technique, supervision humaine
- **Application :** Amendes pouvant atteindre 7 % du chiffre d'affaires mondial

### Cadre de Gestion des Risques IA du NIST
- **S'applique à :** Volontaire, mais de plus en plus référencé par les régulateurs et les achats américains
- **Couvre :** Quatre fonctions de base — Gouverner, Cartographier, Mesurer, Gérer
- **Pourquoi c'est important :** Le cadre le plus opérationnellement exploitable disponible

### ISO 42001
- **S'applique à :** Organisations recherchant une certification formelle de gestion de l'IA
- **Couvre :** Système de gestion Plan-Do-Check-Act, contrôles de l'Annexe A, audit interne

### RGPD de l'UE (dispositions IA)
- **S'applique à :** Toute organisation traitant des données personnelles de résidents de l'UE avec l'IA
- **Couvre :** Article 22 (décisions automatisées), transparence du profilage, minimisation des données

---

## Normes Spécifiques aux Secteurs

### Services Financiers
| Cadre | Juridiction | Objectif |
|---|---|---|
| SR 11-7 | États‑Unis | Gestion du risque de modèle |
| EBA AI Guidelines | UE | Supervision IA des établissements de crédit |
| MAS AI Governance | Singapour | Gouvernance IA des institutions financières |

### Santé
| Cadre | Juridiction | Objectif |
|---|---|---|
| FDA AI/ML SaMD | États‑Unis | IA clinique et logiciel en tant que dispositif médical |
| ONC Trustworthy AI | États‑Unis | Normes IA pour les technologies de santé |

### Sécurité
| Cadre | Objectif |
|---|---|
| OWASP LLM Top 10 | Vulnérabilités de sécurité des LLM |
| MITRE ATLAS | Paysage des menaces IA adversaires |
| Google SAIF | Cadre IA sécurisé |

### Éthique & Principes
| Cadre | Origine |
|---|---|
| Principes IA de l'OCDE | OCDE |
| Éthique IA de l'UNESCO | UNESCO |
| IEEE 7000 | IEEE |

---

## Comment les cadres se chevauchent

Terminologie différente, mêmes concepts :

| Concept | Loi IA de l'UE | Cadre RMF IA du NIST | ISO 42001 |
|---|---|---|---|
| Gestion des risques | Article 9 | Fonction Cartographier | Clause 6.1 |
| Supervision humaine | Article 14 | Gouverner 1.4 | A.8.4 |
| Documentation technique | Article 11 | Cartographier 3.4 | A.6.2 |
| Biais et équité | Article 10(2)(f) | Mesurer 2.6 | A.10.3 |
| Transparence | Chapitre IV | Gouverner 4.1 | A.8.3 |

IQ:NS cartographie ces correspondances de manière structurée — ainsi vous pouvez voir où un concept s'étend sur plusieurs normes et où de véritables lacunes existent.

[Voir comment les ontologies fonctionnent](/how-it-works) · [Explorer sur GitHub](https://github.com/iqns-org/ontologies)
