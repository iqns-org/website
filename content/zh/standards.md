---
title: 标准与框架
description: 'AI 和组织标准 IQ:NS 模型——它们涵盖的内容、适用对象以及它们之间的关联。'
lang: zh
navigation:
  section: ontologies
  label: 标准
  order: 20
---
# 标准与框架

## 全景

没有单一框架能覆盖所有内容。大多数组织面临来自多个标准的重叠要求——而它们之间的空白正是问题隐藏的地方。

IQ:NS 将来自 `./ontologies/v1/` 的 50 多个框架和领域模型建模为结构化本体。以下是它们覆盖的内容。

IQ:NS 并不优先采用单一法规集合；它会从仓库中为每个情境挑选相关的本体模型。

---

## 横向框架

### 欧盟 AI 法案
- **适用对象：** 在欧盟提供或部署 AI 的任何组织
- **覆盖范围：** 风险分类、合规评估、透明度、技术文档、人类监督
- **执行力度：** 最高可达全球收入的 7% 的罚款

### NIST AI 风险管理框架
- **适用对象：** 自愿，但越来越多被美国监管机构和采购部门引用
- **覆盖范围：** 四个核心功能——治理（Govern）、映射（Map）、衡量（Measure）、管理（Manage）
- **重要性：** 当前最具可操作性的框架

### ISO 42001
- **适用对象：** 寻求正式 AI 管理认证的组织
- **覆盖范围：** 计划-执行-检查-行动（PDCA）管理体系、附录 A 控制项、内部审计

### 欧盟 GDPR（AI 条款）
- **适用对象：** 使用 AI 处理欧盟居民个人数据的任何组织
- **覆盖范围：** 第 22 条（自动决策）、画像透明度、数据最小化

---

## 行业特定标准

### 金融服务
| 框架 | 司法辖区 | 重点 |
|---|---|---|
| SR 11-7 | US | 模型风险管理 |
| EBA AI Guidelines | EU | 信用机构 AI 监督 |
| MAS AI Governance | Singapore | 金融机构 AI 治理 |

### 医疗保健
| 框架 | 司法辖区 | 重点 |
|---|---|---|
| FDA AI/ML SaMD | US | 临床 AI 与作为医疗器械的软件 |
| ONC Trustworthy AI | US | 健康信息技术 AI 标准 |

### 安全
| 框架 | 重点 |
|---|---|
| OWASP LLM Top 10 | LLM 安全漏洞 |
| MITRE ATLAS | 对抗性 AI 威胁态势 |
| Google SAIF | 安全 AI 框架 |

### 伦理与原则
| 框架 | 来源 |
|---|---|
| OECD AI Principles | OECD |
| UNESCO AI Ethics | UNESCO |
| IEEE 7000 | IEEE |

---

## 框架如何重叠

不同的术语，相同的概念：

| 概念 | EU AI Act | NIST AI RMF | ISO 42001 |
|---|---|---|---|
| 风险管理 | Article 9 | Map function | Clause 6.1 |
| 人类监督 | Article 14 | Govern 1.4 | A.8.4 |
| 技术文档 | Article 11 | Map 3.4 | A.6.2 |
| 偏见与公平 | Article 10(2)(f) | Measure 2.6 | A.10.3 |
| 透明度 | Chapter IV | Govern 4.1 | A.8.3 |

IQ:NS 以结构化方式映射这些对应关系——因此您可以看到某一概念跨越多个标准的情况以及真正的空白所在。

---

[了解本体如何工作](/how-it-works) · [在 GitHub 上浏览](https://github.com/iqns-org/ontologies)
