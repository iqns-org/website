---
title: Confiança & Segurança
description: 'Como o IQ:NS lida com os dados, o que armazenamos e como os protegemos.'
lang: pt
navigation:
  section: platform
  label: Segurança
  order: 30
---
# Confiança & Segurança

## O que armazenamos

IQ:NS opera apenas com **metadados**:

- Conceitos e relacionamentos do framework (texto regulatório público)
- Perfis do seu sistema (se usar o nível comercial): nomes, capacidades, classificações de risco
- Extensões da sua ontologia (se privada): conceitos personalizados e mapeamentos
- Referências de evidência (links ou hashes — não os documentos em si)

Nós **nunca** armazenamos dados de treinamento de modelo, pesos, saídas de inferência, dados de cliente ou PII.

## Onde armazenamos

- **Criptografia:** AES-256 em repouso, TLS 1.3 em trânsito
- **Acesso:** Controle baseado em funções, registro de auditoria
- **Backups:** Automáticos diários, distribuídos geograficamente

## Opções de implantação

- **Auto-hospedado** — baixe arquivos Turtle, execute seu próprio triplestore
- **Hospedado na nuvem** — instância gerenciada na AWS, criptografada
- **Nuvem privada** — implantado no seu VPC
- **Isolado** — Disponível on‑premises para cada cliente

## Conformidade

- Auditoria SOC 2 Tipo II
- Conformidade GDPR — sem retenção de dados pessoais
- Certificado ISO 27001
- HIPAA BAA e FedRAMP disponíveis mediante solicitação

## Aberto por padrão

As ontologias centrais são código aberto. Você pode verificar cada conceito, cada mapeamento, cada relacionamento. A transparência é estrutural, não apenas prometida.

## Reportar um problema de segurança

[security@iqns.org](mailto:security@iqns.org)

---

[Política de privacidade](/privacy) · [Termos de serviço](/terms)
