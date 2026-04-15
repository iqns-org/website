---
title: Tecnologia & Arquitetura
description: >-
  Como as ontologias IQ:NS são construídas: fundamentos da web semântica,
  frameworks legíveis por máquina e APIs prontas para agentes.
lang: pt
navigation:
  section: platform
  label: Tecnologia
  order: 20
---
# Tecnologia & Arquitetura

## Construído sobre padrões da web semântica

IQ:NS usa os mesmos padrões que impulsionam a publicação científica, a pesquisa farmacêutica e a integração de dados empresariais em todo o mundo:

- **JSON-LD** — o modelo de dados universal. Cada tripla RDF é consultável, exportável, vinculável.
- **SKOS** — captura hierarquias, mapeamentos e alinhamentos entre estruturas.
- **OWL** — define classes, propriedades e relações lógicas entre conceitos.
- **SHACL** — valida formas de dados e restrições.

Cada conceito possui um IRI canônico (estável, permanente), uma definição formal referenciada ao texto original e relações explícitas com conceitos relacionados entre estruturas.

---

## Como funciona

Quando um padrão muda, a atualização da ontologia se propaga por todos os conceitos mapeados — cada obrigação vinculada, cada controle relacionado. Sem remapeamento manual.

### Desduplicação entre estruturas

Quando diferentes regras, políticas ou padrões operacionais exigem transparência, o IQ:NS reconhece‑os como `skos:exactMatch` e apresenta um único conceito, não dois. Uma consulta resolve ambos.

### Perfil contextual

Dada a jurisdição, o setor e o tipo de capacidade de IA, uma consulta SPARQL retorna o conjunto preciso e desduplicado de conceitos relevantes — não uma lista de estruturas, mas exatamente o que se aplica.

---

## Modelos de domínio modulares

IQ:NS é publicado como um grafo de conhecimento modular e alinhado por domínio, em vez de uma lista plana de padrões. Mais de 40 módulos de ontologia independentes e versionados estão disponíveis em `./ontologies/v1/`, e cada módulo está alinhado ao restante do grafo usando SKOS, OWL e padrões semânticos compartilhados.

Domínios representativos incluem governança de IA, privacidade de dados, resiliência de segurança, risco financeiro, supervisão de saúde, transparência governamental e controles empresariais. Essa estrutura mantém cada modelo de domínio claro enquanto preserva o raciocínio e a reutilização entre domínios.

Cada módulo é um documento RDF/Turtle independente com alinhamentos semânticos explícitos, de modo que uma única consulta possa percorrer múltiplos domínios.

---

## APIs e integração

### Endpoint SPARQL

O grafo completo pode ser consultado via SPARQL 1.1. Qualquer ferramenta que suporte SPARQL — plataformas de BI, data warehouses, frameworks de agentes — obtém respostas estruturadas.

### Acesso ao grafo pronto para agentes

Cada conceito é publicado com um IRI canônico, metadados legíveis por máquina e relações semânticas formais. Agentes e ferramentas de automação podem consumir o grafo diretamente — via SPARQL ou uma API nativa de grafo — em vez de depender de PDFs não estruturados ou engenharia de prompts ad hoc.

Isso mantém o mesmo modelo semântico disponível para fluxos de trabalho de conformidade e raciocínio aprimorado por recuperação, de modo que os agentes resolvem obrigações, riscos e controles a partir de uma única fonte de verdade.

---

## Implantação

| Modo               | Descrição                                            |
|--------------------|------------------------------------------------------|
| **GitHub**         | Baixe e carregue em seu próprio repositório RDF      |
| **Cloud hosted**   | Grafo gerenciado em uma instância privada, criptografado |
| **Private cloud**  | Implantado em sua VPC (AWS, Azure, GCP)              |
| **Air-gapped**     | Disponível on-premises para cada cliente             |

---

## Padrões abertos, sem bloqueio

As ontologias são publicadas sob licença aberta. Exporte como RDF padrão a qualquer momento. Se você sair, leva consigo um grafo de conhecimento completo e portátil.

---

[Explore no GitHub](https://github.com/iqns-org/ontologies) · [Ver recursos](/features) · [Começar](/getting-started)
