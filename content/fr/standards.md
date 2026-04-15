---
title: Normes & Cadres
description: >-
  Les normes AI et organisationnelles modèles IQ:NS — ce qu'elles couvrent, à
  qui elles s'appliquent et comment elles se connectent.
lang: fr
navigation:
  section: ontologies
  label: Normes
  order: 20
---
# Normes et Cadres

## Le paysage

Aucun cadre unique ne couvre tout. La plupart des organisations font face à des exigences qui se chevauchent provenant de multiples normes — et les lacunes entre elles sont là où les problèmes se cachent.

IQ:NS modélise plus de 50 cadres et modèles de domaine depuis `./ontologies/v1/` sous forme d’ontologies structurées. Voici ce qu’ils couvrent.

IQ:NS ne privilégie pas un ensemble unique de réglementations ; il sélectionne les modèles d’ontologie pertinents pour chaque contexte dans le référentiel.

---

## Cadres horizontaux

### EU AI Act
- **S’applique à :** Toute organisation offrant ou déployant de l’IA dans l’UE
- **Couvre :** Classification des risques, évaluation de conformité, transparence, documentation technique, supervision humaine
- **Application :** Amendes pouvant atteindre 7 % du chiffre d’affaires mondial

### NIST AI Risk Management Framework
- **S’applique à :** Volontaire, mais de plus en plus référencé par les régulateurs et les achats américains
- **Couvre :** Quatre fonctions de base — Gouverner, Cartographier, Mesurer, Gérer
- **Pourquoi c’est important :** Le cadre le plus opérationnellement exploitable disponible

### ISO 42001
- **S’applique à :** Organisations cherchant une certification formelle de gestion de l’IA
- **Couvre :** Système de gestion planifier‑faire‑vérifier‑agir, contrôles de l’Annexe A, audit interne

### EU GDPR (dispositions IA)
- **S’applique à :** Toute organisation traitant des données personnelles de résidents de l’UE avec de l’IA
- **Couvre :** Article 22 (décisions automatisées), transparence du profilage, minimisation des données

---

## Normes sectorielles spécifiques

### Services financiers
| Cadre | Juridiction | Focus |
|---|---|---|
| SR 11‑7 | US | Gestion du risque de modèle |
| Lignes directrices IA de l’EBA | UE | Surveillance de l’IA des établissements de crédit |
| Gouvernance IA de la MAS | Singapour | Gouvernance de l’IA des institutions financières |

### Santé
| Cadre | Juridiction | Focus |
|---|---|---|
| FDA AI/ML SaMD | US | IA clinique et logiciel en tant que dispositif médical |
| ONC IA digne de confiance | US | Normes d’IA pour les technologies de santé |

### Sécurité
| Cadre | Focus |
|---|---|
| OWASP LLM Top 10 | Vulnérabilités de sécurité des LLM |
| MITRE ATLAS | Paysage des menaces d’IA adversaire |
| Google SAIF | Cadre d’IA sécurisée |

### Éthique & Principes
| Cadre | Origine |
|---|---|
| Principes IA de l’OCDE | OCDE |
| Éthique IA de l’UNESCO | UNESCO |
| IEEE 7000 | IEEE |

---

## Comment les cadres se chevauchent

Terminologie différente, mêmes concepts :

| Concept | EU AI Act | NIST AI RMF | ISO 42001 |
|---|---|---|---|
| Gestion des risques | Article 9 | Fonction Cartographier | Clause 6.1 |
| Supervision humaine | Article 14 | Gouverner 1.4 | A.8.4 |
| Documentation technique | Article 11 | Cartographier 3.4 | A.6.2 |
| Biais et équité | Article 10(2)(f) | Mesurer 2.6 | A.10.3 |
| Transparence | Chapitre IV | Gouverner 4.1 | A.8.3 |

IQ:NS cartographie ces correspondances de manière structurée — vous pouvez ainsi voir où un concept s’étend sur plusieurs normes et où de véritables lacunes existent.

---

[Voir comment les ontologies fonctionnent](/how-it-works) · [Explorer sur GitHub](https://github.com/iqns-org/ontologies)
