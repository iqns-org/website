---
title: Padrões e Estruturas
description: >-
  Os padrões de IA e organizacionais modelos IQ:NS — o que cobrem, a quem se
  aplicam e como se conectam.
lang: pt
navigation:
  section: ontologies
  label: Padrões
  order: 20
---
# Padrões & Estruturas

## O panorama

Nenhum framework único cobre tudo. A maioria das organizações enfrenta requisitos sobrepostos de múltiplos padrões — e as lacunas entre eles são onde os problemas se escondem.

IQ:NS modela mais de 50 frameworks e modelos de domínio de `./ontologies/v1/` como ontologias estruturadas. Veja o que eles cobrem.

IQ:NS não prioriza um único conjunto de regulamentos; ele seleciona cuidadosamente os modelos de ontologia relevantes para cada contexto a partir do repositório.

---

## Frameworks Horizontais

### Lei de IA da UE
- **Aplica-se a:** Qualquer organização que ofereça ou implante IA na UE
- **Abrange:** Classificação de risco, avaliação de conformidade, transparência, documentação técnica, supervisão humana
- **Aplicação:** Multas de até 7% da receita global

### Estrutura de Gerenciamento de Risco de IA da NIST
- **Aplica-se a:** Voluntário, mas cada vez mais referenciado por reguladores e compras dos EUA
- **Abrange:** Quatro funções principais — Governar, Mapear, Medir, Gerenciar
- **Por que importa:** A estrutura mais operacionalmente acionável disponível

### ISO 42001
- **Aplica-se a:** Organizações que buscam certificação formal de gerenciamento de IA
- **Abrange:** Sistema de gerenciamento Plan-Do-Check-Act, controles do Anexo A, auditoria interna

### GDPR da UE (disposições de IA)
- **Aplica-se a:** Qualquer organização que processe dados pessoais de residentes da UE com IA
- **Abrange:** Artigo 22 (decisões automatizadas), transparência de perfis, minimização de dados

---

## Padrões Setoriais Específicos

### Serviços Financeiros
| Framework | Jurisdição | Foco |
|---|---|---|
| SR 11-7 | US | Gerenciamento de risco de modelo |
| Diretrizes de IA do EBA | EU | Supervisão de IA em instituições de crédito |
| Governança de IA da MAS | Singapore | Governança de IA em instituições financeiras |

### Saúde
| Framework | Jurisdição | Foco |
|---|---|---|
| FDA AI/ML SaMD | US | IA clínica e software como dispositivo médico |
| ONC IA Confiável | US | Padrões de IA para TI de saúde |

### Segurança
| Framework | Foco |
|---|---|
| OWASP LLM Top 10 | Vulnerabilidades de segurança de LLM |
| MITRE ATLAS | Cenário de ameaças de IA adversarial |
| Google SAIF | Framework de IA segura |

### Ética e Princípios
| Framework | Origem |
|---|---|
| Princípios de IA da OCDE | OECD |
| Ética de IA da UNESCO | UNESCO |
| IEEE 7000 | IEEE |

---

## Como os frameworks se sobrepõem

Terminologia diferente, mesmos conceitos:

| Conceito | Lei de IA da UE | NIST AI RMF | ISO 42001 |
|---|---|---|---|
| Gerenciamento de risco | Artigo 9 | Função Map | Cláusula 6.1 |
| Supervisão humana | Artigo 14 | Govern 1.4 | A.8.4 |
| Documentação técnica | Artigo 11 | Map 3.4 | A.6.2 |
| Viés e justiça | Artigo 10(2)(f) | Measure 2.6 | A.10.3 |
| Transparência | Capítulo IV | Govern 4.1 | A.8.3 |

IQ:NS mapeia essas correspondências estruturalmente — para que você possa ver onde um conceito abrange múltiplos padrões e onde realmente existem lacunas.

[Veja como as ontologias funcionam](/how-it-works) · [Explore no GitHub](https://github.com/iqns-org/ontologies)
