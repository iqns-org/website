---
title: Recursos e Capacidades
description: >-
  O que o IQ:NS oferece — ontologias abertas, mapeamentos entre frameworks,
  acesso SPARQL e integração pronta para agentes.
lang: pt
navigation:
  section: platform
  label: Recursos
  order: 10
---
# Recursos e Capacidades

## Ontologias abertas

Mais de 50 ontologias cobrindo IA, jurídico, finanças, saúde, governo, empresas e mais. Cada uma modelada em RDF/OWL com alinhamentos SKOS, publicada como arquivos Turtle versionados.

Cada conceito tem:
- Um IRI estável (identificador permanente, não uma linha de banco de dados)
- Uma definição formal referenciada ao texto original
- Relacionamentos com conceitos relacionados em diferentes frameworks
- Mapeamentos entre frameworks (`skos:exactMatch`, `skos:broadMatch`, `skos:relatedMatch`)

---

## Inteligência entre frameworks

Frameworks usam palavras diferentes para as mesmas ideias. IQ:NS as mapeia estruturalmente:

- Artigo 9 do EU AI Act ↔ Função do Mapa NIST AI RMF ↔ Cláusula 6.1 da ISO 42001 (gestão de risco)
- Artigo 22 do GDPR ↔ Capítulo IV do EU AI Act (transparência)
- ISO 24027 ↔ Medida 2.6 do NIST (viés e justiça)

Uma consulta abrange todos os padrões. Um controle pode atender a múltiplos frameworks — e o mapeamento prova isso.

---

## Perfilamento contextual

Nem tudo se aplica a todos. Perfil por:
- **Jurisdicação** — UE, EUA, Reino Unido, APAC
- **Setor** — finanças, saúde, governo, RH
- **Capacidade de IA** — LLM, biométrica, pontuação de crédito, decisões autônomas

Obtenha um conjunto preciso e deduplicado do que é relevante — não 40 frameworks, apenas o que importa para o seu contexto.

---

## Endpoint SPARQL

O grafo completo pode ser consultado:

```sparql
SELECT ?obligation ?isoControl ?nistControl
WHERE {
  ?obligation skos:exactMatch ?isoControl ;
              skos:exactMatch ?nistControl .
  ?isoControl ai:partOf <iso-42001> .
  ?nistControl ai:partOf <nist-ai-rmf> .
}
```

Qualquer ferramenta que suporte SPARQL — plataformas de BI, data warehouses, frameworks de agentes — pode consultar as ontologias diretamente.

---

## MCP para fluxos de trabalho agentes

Cada conceito tem um IRI estável, definição legível por máquina e relacionamentos formais. Agentes de IA consultam o grafo e obtêm respostas estruturadas e tipadas — sem necessidade de preenchimento de prompts em PDF.

---

## Integração

IQ:NS se integra às ferramentas existentes:

- **Plataformas GRC** — OneTrust, Vanta, ServiceNow
- **Catálogos de dados** — Collibra, Alation
- **Registries de modelos** — MLflow, Weights & Biases
- **Plataformas de nuvem** — AWS, Azure, GCP
- **Ferramentas de desenvolvimento** — Jira, pipelines CI/CD
- **ITSM** — conectores SKMS ITIL v3/v4

Sem migrações forçadas. As ontologias se adaptam onde suas ferramentas estão.

---

## Versionado e portátil

Cada ontologia é versionada. Exportada como RDF Turtle padrão. Se você sair, leva consigo um grafo de conhecimento completo e compatível com padrões. Sem bloqueio.

---

[Explore no GitHub](https://github.com/iqns-org/ontologies) · [Veja a tecnologia](/tech) · [Veja os preços](/pricing)
