---
title: Perguntas Frequentes
description: 'Perguntas comuns sobre IQ:NS, as ontologias e como usá-las.'
lang: pt
navigation:
  section: governance
  label: FAQ
  order: 30
---
# Perguntas Frequentes

## Sobre IQ:NS

### O que é IQ:NS?

Um projeto de código aberto que modela padrões de IA, regulamentações e conhecimento institucional como ontologias formais. Construído sobre RDF, SKOS, OWL e SHACL — consultável por pessoas e máquinas.

### É gratuito?

As ontologias principais são gratuitas e de código aberto. Existe um nível comercial para serviços hospedados, bases de conhecimento privadas e suporte à integração.

### Para quem é isso?

Qualquer pessoa que trabalhe com padrões de IA — equipes de conformidade, engenheiros, arquitetos de integração, pesquisadores ou quem estiver construindo agentes que precisam raciocinar sobre regras institucionais.

### Como isso difere de uma plataforma GRC?

Plataformas GRC executam fluxos de trabalho e aprovações. IQ:NS fornece a camada semântica subjacente — conhecimento estruturado sobre o que os padrões dizem e como se relacionam. Elas são complementares.

---

## Sobre as ontologias

### Quais padrões vocês cobrem?

Mais de 50 estruturas, incluindo o EU AI Act, NIST AI RMF, ISO 42001, GDPR, OWASP LLM Top 10, MITRE ATLAS, regulamentações setoriais (FDA, EBA, SR 11‑7) e muito mais. Veja a [cobertura completa](/regulations).

### Como elas são construídas?

Cada padrão é modelado como classes OWL com rótulos SKOS, definições e mapeamentos de alinhamento entre estruturas. Cada conceito remonta ao texto fonte autoritativo.

### Como eu as utilizo?

Baixe os arquivos Turtle no GitHub, carregue-os em qualquer triplestore e faça consultas com SPARQL. Ou use o servidor MCP hospedado para conectar agentes de IA diretamente.

### Posso contribuir?

Sim. As ontologias estão no [GitHub](https://github.com/iqns-org/ontologies). Expertise de domínio, correções e cobertura de novos frameworks são bem‑vindas.

### O que acontece quando um padrão muda?

A comunidade atualiza as ontologias. Cada versão é rastreada — você pode ver o que mudou e quando.

---

## Sobre o nível comercial

### O que o nível pago inclui?

Bases de conhecimento privadas, endpoints SPARQL hospedados, acesso ao servidor MCP, conectores ITIL SKMS e suporte prático.

### Eu preciso disso?

Para a maioria dos casos de uso, as ontologias gratuitas são suficientes. O nível comercial destina‑se a equipes que desejam hospedagem gerenciada, extensões privadas ou suporte à integração.

### Há bloqueio (lock‑in)?

Não. Tudo pode ser exportado como RDF Turtle padrão. Você pode sair com seu grafo de conhecimento completo a qualquer momento.

---

## Técnico

### O IQ:NS vê meus dados?

Não. As ontologias descrevem conceitos e relacionamentos. Nunca tocamos nos dados do modelo, conjuntos de treinamento, saídas de inferência ou PII.

### Posso executá‑lo on‑premise?

Sim. As ontologias são arquivos que você pode hospedar em qualquer lugar. O nível comercial também suporta nuvem privada e implantações isoladas.

---

[Explore as ontologias](https://github.com/iqns-org/ontologies) · [Fale conosco](/contact)
