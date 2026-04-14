---
title: Tecnologia & Arquitetura
description: >-
  Como as ontologias IQ:NS são construídas: fundamentos da web semântica,
  estruturas legíveis por máquinas e APIs prontas para agentes.
lang: pt
navigation:
  section: platform
  label: Tecnologia
  order: 20
---
# Tecnologia & Arquitetura

## Construído sobre padrões da web semântica

IQ:NS usa os mesmos padrões que impulsionam a publicação científica, a pesquisa farmacêutica e a integração de dados empresariais em todo o mundo:

- **RDF** — o modelo de dados universal. Cada tripla pode ser consultada, exportada, vinculada.
- **SKOS** — captura hierarquias, mapeamentos e alinhamentos entre estruturas.
- **OWL** — define classes, propriedades e relações lógicas entre conceitos.
- **SHACL** — valida formas de dados e restrições.

Cada conceito possui um IRI canônico (estável, permanente), uma definição formal referenciada ao texto original e relações explícitas com conceitos relacionados entre estruturas.

---

## Como funciona

Quando um padrão muda, a atualização da ontologia se propaga por todos os conceitos mapeados — cada obrigação vinculada, cada controle relacionado. Sem remapeamento manual.

### Desduplicação entre estruturas

Quando o Artigo 22 do GDPR e o Artigo 13 do EU AI Act ambos exigem transparência, o IQ:NS reconhece‑os como `skos:exactMatch` e apresenta um único conceito, não dois. Uma consulta resolve ambos.

### Perfilamento contextual

Dada a jurisdição, o setor e o tipo de capacidade de IA, uma consulta SPARQL retorna o conjunto preciso e desduplicado de conceitos relevantes — não uma lista de estruturas, mas exatamente o que se aplica.

---

## Cobertura de estruturas

Mais de 40 estruturas em sete domínios:

| Domínio | Estruturas |
|--------|-----------|
| **IA** | EU AI Act, NIST AI RMF, ISO 42001, ISO 23894, ISO 24027–29 |
| **Dados & Privacidade** | GDPR, UK GDPR, CCPA, eIDAS |
| **Segurança** | OWASP LLM Top 10, NIST CSF 2.0, ISO 27001, SOC 2 |
| **Finanças** | EBA guidelines, DORA, Basel model risk |
| **Saúde** | FDA AI/ML guidance, MDR, HIPAA |
| **Governo** | NIST EO 13960, UK algorithmic transparency |
| **Empresarial** | ISO 31000, COSO ERM, ITIL 4, IEEE 7000 series |

Cada estrutura é um documento Turtle independente e versionado.

---

## APIs e integração

### Ponto de extremidade SPARQL

O grafo completo pode ser consultado via SPARQL 1.1. Qualquer ferramenta que suporte SPARQL — plataformas de BI, data warehouses, frameworks de agentes — obtém respostas estruturadas.

### MCP para agentes

Cada conceito tem um IRI estável, definição legível por máquina e relações formais. Agentes de IA consultam o grafo diretamente — sem inserção de contexto em PDF.

---

## Implantação

| Modo | Descrição |
|------|-----------|
| **GitHub** | Baixe os arquivos Turtle, carregue em seu próprio triplestore |
| **Nuvem hospedada** | Grafo gerenciado em uma instância privada, criptografado |
| **Nuvem privada** | Implantado em sua VPC (AWS, Azure, GCP) |
| **Isolado** | Totalmente on‑premises para ambientes regulados |

---

## Padrões abertos, sem bloqueio

As ontologias são publicadas sob licença aberta. Exporte como RDF Turtle padrão a qualquer momento. Se você sair, leva consigo um grafo de conhecimento completo e portátil.

---

[Explore no GitHub](https://github.com/iqns-org/ontologies) · [Ver recursos](/features) · [Começar](/getting-started)
