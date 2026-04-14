---
title: 技术与架构
description: 'IQ:NS 本体是如何构建的：语义网基础、机器可读框架以及面向代理的 API。'
lang: zh
navigation:
  section: platform
  label: 技术
  order: 20
---
# 技术与架构

## 基于语义网标准构建

IQ:NS 使用与全球科学出版、制药研究以及企业数据集成相同的标准：

- **RDF** — 通用数据模型。每个三元组都可查询、导出、链接。
- **SKOS** — 捕获层次结构、映射以及跨框架的对齐关系。
- **OWL** — 定义类、属性以及概念之间的逻辑关系。
- **SHACL** — 验证数据形状和约束。

每个概念都拥有一个规范的 IRI（稳定、永久）、来源于原始文本的正式定义，以及与跨框架相关概念的显式关系。

---

## 工作原理

当标准发生变化时，本体更新会传播到每个映射概念——每个关联的义务、每个相关的控制。无需手动重新映射。

### 跨框架去重

当 GDPR 第 22 条和 EU AI 法案第 13 条都要求透明度时，IQ:NS 将它们识别为 `skos:exactMatch`，只呈现一个概念，而不是两个。一次查询即可解决两者。

### 情境画像

给定司法管辖区、行业和 AI 能力类型，SPARQL 查询返回精确、去重的相关概念集合——不是框架列表，而是恰好适用的内容。

---

## 框架覆盖

40+ 框架覆盖七个领域：

| 领域 | 框架 |
|--------|-----------|
| **人工智能** | EU AI Act, NIST AI RMF, ISO 42001, ISO 23894, ISO 24027–29 |
| **数据与隐私** | GDPR, UK GDPR, CCPA, eIDAS |
| **安全** | OWASP LLM Top 10, NIST CSF 2.0, ISO 27001, SOC 2 |
| **金融** | EBA guidelines, DORA, Basel model risk |
| **健康** | FDA AI/ML guidance, MDR, HIPAA |
| **政府** | NIST EO 13960, UK algorithmic transparency |
| **企业** | ISO 31000, COSO ERM, ITIL 4, IEEE 7000 series |

每个框架都是一个独立的、带版本的 Turtle 文档。

---

## API 与集成

### SPARQL 端点

完整图谱可通过 SPARQL 1.1 查询。任何支持 SPARQL 的工具——BI 平台、数据仓库、代理框架——都能获得结构化答案。

### 面向代理的 MCP

每个概念都有稳定的 IRI、机器可读的定义和正式的关系。AI 代理直接查询图谱——无需 PDF 内容填充。

---

## 部署

| 模式 | 描述 |
|------|-------------|
| **GitHub** | 下载 Turtle 文件，加载到您自己的三元组存储中 |
| **云托管** | 在私有实例上托管的图谱，已加密 |
| **私有云** | 部署在您的 VPC（AWS、Azure、GCP）中 |
| **隔离网络** | 完全本地部署，适用于受监管环境 |

---

## 开放标准，无锁定

本体在开放许可证下发布。随时导出为标准 RDF Turtle。如果您离开，您可以携带完整、可移植的知识图谱。

---

[在 GitHub 上探索](https://github.com/iqns-org/ontologies) · [查看功能](/features) · [快速开始](/getting-started)
