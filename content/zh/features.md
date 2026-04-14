---
title: 功能与能力
description: 'IQ:NS 提供的内容 — 开放本体、跨框架映射、SPARQL 访问以及面向代理的集成。'
lang: zh
navigation:
  section: platform
  label: 功能
  order: 10
---
# 功能与能力

## 开放本体

50+ 个本体，涵盖 AI、法律、金融、健康、政府、企业等。每个本体均使用 RDF/OWL 建模，配有 SKOS 对齐，以版本化的 Turtle 文件形式发布。

每个概念都有：
- 稳定的 IRI（永久标识符，而非数据库行）
- 基于原始文本的正式定义
- 与跨框架相关概念的关系
- 跨框架映射（`skos:exactMatch`、`skos:broadMatch`、`skos:relatedMatch`）

---

## 跨框架智能

不同框架对相同概念使用不同的词汇。IQ:NS 对它们进行结构化映射：

- EU AI 法案第 9 条 ↔ NIST AI RMF 映射功能 ↔ ISO 42001 第 6.1 条（风险管理）
- GDPR 第 22 条 ↔ EU AI 法案第 IV 章（透明度）
- ISO 24027 ↔ NIST 测量 2.6（偏见与公平）

一次查询即可覆盖所有标准。一个控制项可以满足多个框架——映射关系证明了这一点。

---

## 情境画像

并非所有内容都适用于每个人。可按以下维度进行画像：
- **司法管辖区** — 欧盟、美国、英国、亚太地区
- **行业** — 金融、医疗保健、政府、人力资源
- **AI 能力** — 大语言模型、生物识别、信用评分、自治决策

获取精准、去重的相关集合——不是 40 个框架，而是与你情境相关的内容。

---

## SPARQL 端点

完整图谱可查询：

```sparql
SELECT ?obligation ?isoControl ?nistControl
WHERE {
  ?obligation skos:exactMatch ?isoControl ;
              skos:exactMatch ?nistControl .
  ?isoControl ai:partOf <iso-42001> .
  ?nistControl ai:partOf <nist-ai-rmf> .
}
```

任何支持 SPARQL 的工具——BI 平台、数据仓库、代理框架——都可以直接查询本体。

---

## 面向代理工作流的 MCP

每个概念都有稳定的 IRI、机器可读的定义以及正式的关系。AI 代理查询图谱并获得结构化、类型化的答案——无需 PDF 提示填充。

---

## 集成

IQ:NS 可接入现有工具：

- **GRC 平台** — OneTrust、Vanta、ServiceNow
- **数据目录** — Collibra、Alation
- **模型注册表** — MLflow、Weights & Biases
- **云平台** — AWS、Azure、GCP
- **开发工具** — Jira、CI/CD 流水线
- **ITSM** — ITIL v3/v4 SKMS 连接器

无需强制迁移。本体可在你的工具所在的环境中使用。

---

## 版本化与可移植性

每个本体都有版本。以标准 RDF Turtle 导出。如果你离开，你可以带走完整、符合标准的知识图谱。没有锁定。

---

[在 GitHub 上探索](https://github.com/iqns-org/ontologies) · [查看技术](/tech) · [查看定价](/pricing)
