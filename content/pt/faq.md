---
title: Perguntas Frequentes
description: 'Perguntas comuns sobre IQ:NS, as ontologias e como usá-las.'
lang: pt
navigation:
  section: platform
  label: FAQ
  order: 30
---
# Perguntas Frequentes

## Sobre o IQ:NS

### O que é o IQ:NS?

Um projeto de código aberto que modela padrões de IA, regulamentações e conhecimento institucional como ontologias formais. Construído sobre RDF, SKOS, OWL e SHACL — consultável por pessoas e máquinas.

### É gratuito?

As ontologias principais são gratuitas e de código aberto. Existe um nível comercial para serviços hospedados, bases de conhecimento privadas e suporte à integração.

### Para quem é isso?

Qualquer pessoa que trabalhe com padrões de IA — equipes de conformidade, engenheiros, arquitetos de integração, pesquisadores ou qualquer pessoa que construa agentes que precisem raciocinar sobre regras institucionais.

### Como isso difere de uma plataforma GRC?

Plataformas GRC executam fluxos de trabalho e aprovações. O IQ:NS fornece a camada semântica subjacente — conhecimento estruturado sobre o que os padrões dizem e como se relacionam. Elas são complementares.

---

## Sobre as ontologias

### Quais padrões vocês cobrem?

Mais de 50 estruturas estão atualmente disponíveis — regulamentação de IA, privacidade, segurança, regras específicas de setores e controles empresariais. Veja [Ontologias Abertas](/ontologies/index).

### Como elas são construídas?

Cada padrão é modelado como classes OWL com rótulos SKOS, definições e mapeamentos de alinhamento entre estruturas. Cada conceito remonta ao texto fonte autoritativo.

### Como eu as utilizo?

Você pode conectar ao nosso servidor MCP hospedado permitindo que seus agentes de IA se comuniquem entre si e com sua cadeia de suprimentos digital sem ambiguidade.

Como desenvolvedor, você pode baixar os arquivos fonte RDF do GitHub, carregá‑los em qualquer triplestore e consultar com SPARQL. 

### Posso contribuir?

Sim. As ontologias abertas estão no [GitHub](https://github.com/iqns-org/ontologies). Expertise de domínio, correções e cobertura de novos frameworks são bem‑vindas.

### O que acontece quando um padrão muda?

A comunidade atualiza as ontologias. Cada versão é rastreada — você pode ver o que mudou e quando.

---

## Sobre o nível comercial

### O que o nível pago inclui?

Nós iniciamos uma instância do nosso servidor de conhecimento empresarial contendo todas as ontologias abertas e frameworks de governança de IA.

Você pode criar bases de conhecimento privadas que vinculam qualquer informação de múltiplas fontes — SQL, APIs, GraphQL e mais.

A instância inclui endpoints SPARQL seguros, servidores MCP virtuais, conectores para sistemas SaaS empresariais e suporte prático.

### Eu preciso disso?

Para muitos casos de uso, as ontologias gratuitas são suficientes. 

O nível comercial é para equipes que desejam mais — conhecimento privado, integração agente, hospedagem gerenciada, extensões personalizadas ou suporte profissional.

### Existe bloqueio?

Não. Tudo é exportado como RDF Turtle padrão. Você pode sair com seu grafo de conhecimento completo a qualquer momento.

---

## Técnico

### O IQ:NS vê meus dados?

Não. As ontologias descrevem conceitos e relacionamentos. Nunca tocamos nos dados do modelo, conjuntos de treinamento, saídas de inferência ou PII.

Todas as instâncias hospedadas comercialmente são seguras em nuvens privadas — seja a sua ou a nossa.

### Posso executá‑lo on‑premise?

Sim. As ontologias são arquivos que você pode hospedar em qualquer lugar. 

O nível comercial também suporta nuvem privada e implantações isoladas (air‑gapped) para verdadeira soberania dos dados.

---

[ontologias abertas](https://github.com/iqns-org/ontologies) · [Contate‑nos](/support)
