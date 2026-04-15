---
title: 定价与方案
description: 开放本体，永久免费。为需要托管、私有知识库或集成支持的团队提供商业层级。
lang: zh
navigation:
  section: platform
  label: 服务
  order: 20
tagline: 开放本体。永久免费。
subtagline: 仅在需要托管、私有知识库或现场支持时升级。
annual_note: 年度计费可节省2个月费用。
trust_signal: 基于被超过60%《财富500强》公司采用的W3C语义网标准构建。
how_it_works:
  heading: 基于语义网标准构建
  intro: 'IQ:NS 将标准、法规和机构知识建模为正式本体——结构化词汇，供人类和机器查询、推理和集成。'
  iqns:
    - step: 结构化
      description: 将标准和机构知识建模为带有 SKOS 对齐的 RDF/OWL 本体。每个概念都有稳定的 IRI 并可追溯到其权威来源。
    - step: 连接
      description: 跨框架映射展示标准的重叠、分歧和空白。一次查询即可覆盖所有相关框架。
    - step: 集成
      description: SPARQL 端点、MCP 服务器和标准 Turtle 导出可接入您现有的工具——GRC 平台、数据目录、代理框架、CI/CD 流水线。
    - step: 演进
      description: 社区在标准变化时维护并扩展本体。每个版本都有记录，知识保持最新。
  breakdown: 本体是语义基础——结构化知识，供 GRC 工具、AI 代理和人工团队使用。默认开放。为需要托管或私有扩展的团队提供商业服务。
plans:
  - id: community
    name: 社区版
    tagline: 对所有人免费
    price: $0
    period: /month
    monthly:
      price: $0
      period: /month
    annual:
      price: $0
      period: /year
    features:
      - 100+ 开放本体
      - 社区支持
      - 行业标准
      - 'RDFS, OWL, SKOS, SHACL'
      - 无限集成
    cta: 在 GitHub 上探索
    highlight: true
    cta_href: 'https://github.com/iqns-org/ontologies'
  - id: business
    name: 商务版
    tagline: 面向集成 AI 的团队
    price: $250
    period: /month
    monthly:
      price: $250
      period: /month
    annual:
      price: '$2,500'
      period: /year
    features:
      - 入职研讨会（架构师主导）
      - 无限本体
      - 私有知识服务器
      - 安全 MCP 服务器
      - SPARQL 查询支持
      - 自定义集成
      - 优先支持（48 小时 SLA）
      - ITIL SKMS 连接器（v4）
    cta: 立即开始
    highlight: false
    cta_href: /support
  - id: ecosystem
    name: 生态系统 / 企业版
    tagline: 构建智能生态系统
    price: '$1,000'
    period: /month
    monthly:
      price: '$1,000'
      period: /month
    annual:
      price: '$10,000'
      period: /year
    features:
      - 项目成功经理（高级架构师）
      - 无限本体
      - 企业知识服务器
      - 企业 MCP 服务器
      - SPARQL 查询支持
      - 企业集成
      - 私有云 / 本地部署
      - ITIL SKMS 连接器（v4）
    cta: 与架构师沟通
    highlight: false
    cta_href: /support
guarantee:
  heading: 始终遵循 Apache 2.0 开源协议。
  items:
    - 100+ 本体，永久免费
    - 'RDFS, OWL, SKOS, SHACL'
    - 无供应商锁定
addons:
  heading: 附加组件
  subheading: 仅在需要高级服务时
  items:
    - icon: ShieldCheck
      title: 本体研讨会
      price: '$2,000'
      description: 为期2天的合作——我们将您的领域建模为私有本体，并提供文档和集成指南。
    - icon: Network
      title: 框架映射
      price: '$3,000'
      description: 将内部标准和政策映射到公共本体。交付经验证的 SKOS 对齐及覆盖报告。
    - icon: Zap
      title: 代理集成
      price: '$1,500'
      description: '通过 MCP 将您的代理工作流连接到 IQ:NS。包括设置、测试以及团队使用手册。'
    - icon: Users
      title: 团队培训
      price: '$2,500'
      description: 半天研讨会，涵盖 SPARQL、RDF 和本体基础——针对您的技术栈定制，包含实操练习。
faq:
  heading: 常见问题
  items:
    - q: 我可以免费获得什么？
      a: 公共仓库中的所有本体——跨 20 多个领域的 100 多个文件。克隆仓库，查询 Turtle 文件，集成到您的工具中。无需账户。
    - q: 本体到底是什么？
      a: 一种机器可读的词汇表，将标准、法规和机构知识映射为 AI 代理和工具可查询的格式。可以把它视为系统真正能理解的共享字典。
    - q: 何时应升级到商务版？
      a: 当您需要私有知识服务器、托管的 MCP 端点或 SPARQL 托管时——也就是说，您希望我们来运行基础设施，让您的团队专注于集成。
    - q: 我可以将内部政策与公共标准一起建模吗？
      a: 可以。商务版和生态系统版包括私有知识库，您可以在其中使用自己的内部标准、政策和分类法扩展公共本体。
    - q: ITIL SKMS 连接器是什么？
      a: '它们将 IQ:NS 本体桥接到 ITIL 4 服务知识管理系统——您的服务台、CMDB 和变更管理工具即可使用 AI 代理使用的相同结构化知识。'
    - q: 是否有合同或承诺？
      a: 没有。按月计划，可随时取消。年度付费可免费两个月。附加组件为一次性合作，在您承诺前已明确范围。
    - q: 我的数据托管在哪里？
      a: 付费计划部署在您选择的 AWS、GCP 或 Azure 上——您自行选择地区。私有知识库保留在您的租户中。我们绝不混合客户数据。
---

