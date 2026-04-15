---
title: Padrões e Estruturas
description: >-
  Os padrões de IA e organizacionais dos modelos IQ:NS — o que cobrem, a quem se
  aplicam e como se conectam.
lang: pt
navigation:
  section: ontologies
  label: Padrões
  order: 20
---
# Padrões & Estruturas

## O panorama

Nenhuma estrutura única cobre tudo. A maioria das organizações enfrenta requisitos sobrepostos de múltiplos padrões — e as lacunas entre eles são onde os problemas se escondem.

IQ:NS modela mais de 50 estruturas e modelos de domínio a partir de `./ontologies/v1/` como ontologias estruturadas. Aqui está o que eles cobrem.

IQ:NS não prioriza um único conjunto de regulamentações; ele seleciona as ontologias relevantes para cada contexto a partir do repositório.

---

## Estruturas Horizontais

### Lei de IA da UE
- **Aplica‑se a:** Qualquer organização que ofereça ou implante IA na UE
- **Abrange:** Classificação de risco, avaliação de conformidade, transparência, documentação técnica, supervisão humana
- **Aplicação:** Multas de até 7 % da receita global

### Estrutura de Gerenciamento de Risco de IA da NIST
- **Aplica‑se a:** Voluntário, mas cada vez mais referenciado por reguladores e compras dos EUA
- **Abrange:** Quatro funções principais — Governar, Mapear, Medir, Gerenciar
- **Por que importa:** A estrutura mais operacionalmente acionável disponível

### ISO 42001
- **Aplica‑se a:** Organizações que buscam certificação formal de gerenciamento de IA
- **Abrange:** Sistema de gerenciamento plan-do-check-act, controles do Anexo A, auditoria interna

### GDPR da UE (disposições de IA)
- **Aplica‑se a:** Qualquer organização que processe dados pessoais de residentes da UE com IA
- **Abrange:** Artigo 22 (decisões automatizadas), transparência de perfis, minimização de dados

---

## Padrões Setoriais

### Serviços Financeiros
| Framework | Jurisdição | Foco |
|---|---|---|
| SR 11-7 | US | Gestão de risco de modelo |
| EBA AI Guidelines | EU | Supervisão de IA em instituições de crédito |
| MAS AI Governance | Singapore | Governança de IA em instituições financeiras |

### Saúde
| Framework | Jurisdição | Foco |
|---|---|---|
| FDA AI/ML SaMD | US | IA clínica e software como dispositivo médico |
| ONC Trustworthy AI | US | Padrões de IA para TI em saúde |

### Segurança
| Framework | Foco |
|---|---|
| OWASP LLM Top 10 | Vulnerabilidades de segurança de LLM |
| MITRE ATLAS | Cenário de ameaças de IA adversária |
| Google SAIF | Estrutura de IA segura |

### Ética & Princípios
| Framework | Origem |
|---|---|
| OECD AI Principles | OECD |
| UNESCO AI Ethics | UNESCO |
| IEEE 7000 | IEEE |

---

## Como as estruturas se sobrepõem

Terminologia diferente, mesmos conceitos:

| Conceito | EU AI Act | NIST AI RMF | ISO 42001 |
|---|---|---|---|
| Risk management | Article 9 | Map function | Clause 6.1 |
| Human oversight | Article 14 | Govern 1.4 | A.8.4 |
| Technical documentation | Article 11 | Map 3.4 | A.6.2 |
| Bias and fairness | Article 10(2)(f) | Measure 2.6 | A.10.3 |
| Transparency | Chapter IV | Govern 4.1 | A.8.3 |

IQ:NS mapeia essas inter-relações de forma estrutural — para que você possa ver onde um conceito abrange múltiplos padrões e onde realmente existem lacunas.

---

[Veja como as ontologias funcionam](/how-it-works) · [Explore no GitHub](https://github.com/iqns-org/ontologies)
