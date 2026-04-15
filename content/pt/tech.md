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

## Modelos modulares de domínio

IQ:NS é publicado como um grafo de conhecimento modular e alinhado por domínio, não como uma lista plana de padrões. Mais de 40 módulos ontológicos independentes e versionados estão disponíveis em `./ontologies/v1/`, e cada módulo é alinhado ao restante do grafo usando SKOS, OWL e padrões semânticos compartilhados.

Os domínios representados incluem governança de IA, privacidade de dados, resiliência de segurança, risco financeiro, supervisão de saúde, transparência governamental e controles empresariais. Essa estrutura mantém cada modelo de domínio claro, enquanto preserva a inferência e a reutilização entre domínios.

Cada módulo é um documento RDF/Turtle independente com alinhamentos semânticos explícitos, para que uma única consulta possa percorrer vários domínios.

---

## APIs e integração

### Ponto de extremidade SPARQL

O grafo completo pode ser consultado via SPARQL 1.1. Qualquer ferramenta que suporte SPARQL — plataformas de BI, data warehouses, frameworks de agentes — obtém respostas estruturadas.

### Acesso a grafo pronto para agentes

Cada conceito é publicado com uma IRI canônica, metadados legíveis por máquina e relações semânticas formais. Agentes e fluxos de trabalho de automação podem consumir o grafo diretamente — via SPARQL ou uma API nativa de grafo — em vez de depender de PDFs não estruturados.

Isso permite que o mesmo modelo semântico sirva tanto aos fluxos de trabalho de conformidade quanto ao raciocínio enriquecido por recuperação, para que agentes resolvam obrigações, riscos e controles a partir de uma única fonte de verdade.

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
