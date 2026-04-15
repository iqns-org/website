---
title: 'Como o IQ:NS funciona'
description: >-
  Como o IQ:NS transforma padrões e conhecimento institucional em ontologias
  estruturadas e consultáveis que agentes de IA e equipes podem usar.
lang: pt
navigation:
  section: platform
  label: howItWorks
  order: 15
---
# Como o IQ:NS Funciona

## De documentos a conhecimento estruturado

Normas, regulamentos e regras institucionais existem como linguagem natural em PDFs. Úteis para pessoas que as leem de capa a capa — menos úteis quando você precisa que uma máquina raciocine sobre como o Artigo 13 da Lei de IA da UE se relaciona com um controle NIST ou uma cláusula ISO.

O IQ:NS modela esses conceitos como ontologias formais — vocabulários estruturados onde cada termo tem um identificador estável, uma definição fundamentada em sua fonte e relações explícitas com conceitos relacionados em diferentes estruturas.

## As quatro camadas

### 1. Modelagem de conceitos

Cada norma é dividida em seus conceitos constituintes — obrigações, controles, categorias de risco, papéis — e representada como classes OWL com rótulos e definições SKOS. Cada conceito remonta à sua fonte autoritária.

### 2. Alinhamento entre estruturas

As estruturas se sobrepõem constantemente. O Artigo 22 do GDPR e o Artigo 13 da Lei de IA da UE abordam ambos a transparência. ISO 42001 e NIST AI RMF definem ambos processos de gerenciamento de risco. O IQ:NS captura esses alinhamentos explicitamente usando `skos:exactMatch`, `skos:broadMatch` e `skos:relatedMatch`.

Uma consulta mostra onde as estruturas convergem, onde divergem e onde existem lacunas.

### 3. Perfilamento contextual

Nem todo conceito se aplica a todas as situações. O IQ:NS suporta perfilamento por jurisdição, setor e tipo de capacidade — assim você pode consultar “o que se aplica a um sistema de pontuação de crédito na UE?” e obter uma resposta precisa e deduplicada.

### 4. Manutenção contínua

As estruturas mudam. Novas normas chegam. A comunidade mantém e estende as ontologias para que o conhecimento permaneça atualizado. Cada versão é rastreada — você pode sempre ver o que mudou e quando.

---

## Como você o usa

- **Navegue no GitHub** — baixe os arquivos Turtle, carregue-os no seu triplestore
- **Consulta via SPARQL** — faça perguntas entre estruturas programaticamente
- **Conecte via MCP** — deixe seus agentes de IA raciocinarem diretamente sobre o conhecimento institucional
- **Integre com ferramentas** — conecte a plataformas GRC, catálogos de dados, pipelines CI/CD

---

## O que o IQ:NS não é

- Não é um motor de políticas — não executa regras
- Não é uma plataforma GRC — não executa fluxos de trabalho ou aprovações
- Não é uma consultoria — você toma as decisões; as ontologias fornecem a estrutura

O IQ:NS é a **fundação semântica** sobre a qual esses sistemas podem ser construídos.

---

[Explore as ontologias](https://github.com/iqns-org/ontologies) · [Veja a tecnologia](/tech) · [Comece](/getting-started)
