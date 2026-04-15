---
title: 'Cómo funciona IQ:NS'
description: >-
  Cómo IQ:NS convierte los estándares y el conocimiento institucional en
  ontologías estructuradas y consultables que los agentes de IA y los equipos
  pueden usar.
lang: es
navigation:
  section: platform
  label: howItWorks
  order: 15
---
# Cómo funciona IQ:NS

## De documentos a conocimiento estructurado

Los estándares, regulaciones y normas institucionales existen como lenguaje natural en PDFs. Son útiles para que las personas los lean de principio a fin, pero son menos útiles cuando necesitas que una máquina razone sobre cómo el Artículo 13 de la Ley de IA de la UE se relaciona con un control de NIST o una cláusula de ISO.

IQ:NS modela estos conceptos como ontologías formales: vocabularios estructurados donde cada término tiene un identificador estable, una definición basada en su fuente y relaciones explícitas con conceptos relacionados en diferentes marcos.

## Las cuatro capas

### 1. Modelado de conceptos

Cada estándar se descompone en sus conceptos constituyentes — obligaciones, controles, categorías de riesgo, roles — y se representa como clases OWL con etiquetas y definiciones SKOS. Cada concepto rastrea su origen autoritativo.

### 2. Alineación entre marcos

Los marcos se superponen constantemente. El Artículo 22 del GDPR y el Artículo 13 de la Ley de IA de la UE abordan la transparencia. ISO 42001 y NIST AI RMF definen procesos de gestión de riesgos. IQ:NS captura estas alineaciones explícitamente usando `skos:exactMatch`, `skos:broadMatch` y `skos:relatedMatch`.

Una consulta muestra dónde convergen los marcos, dónde divergen y dónde existen brechas.

### 3. Perfilado contextual

No todos los conceptos se aplican a cada situación. IQ:NS admite el perfilado por jurisdicción, sector y tipo de capacidad, de modo que puedas consultar “¿qué se aplica a un sistema de puntuación crediticia en la UE?” y obtener una respuesta precisa y deduplicada.

### 4. Mantenimiento continuo

Los marcos cambian. Llegan nuevos estándares. La comunidad mantiene y amplía las ontologías para que el conocimiento permanezca actualizado. Cada versión se rastrea; siempre puedes ver qué cambió y cuándo.

---

## Cómo lo usas

- **Explorar en GitHub** — descarga los archivos Turtle, cárgalos en tu triplestore  
- **Consultar vía SPARQL** — formula preguntas entre marcos de forma programática  
- **Conectar vía MCP** — permite que tus agentes de IA razonen directamente sobre el conocimiento institucional  
- **Integrar con herramientas** — conéctalo a plataformas GRC, catálogos de datos, pipelines CI/CD  

---

## Qué no es IQ:NS

- No es un motor de políticas — no ejecuta reglas  
- No es una plataforma GRC — no gestiona flujos de trabajo ni aprobaciones  
- No es una consultoría — tú tomas las decisiones; las ontologías proporcionan la estructura  

IQ:NS es la **fundación semántica** sobre la que esos sistemas pueden construirse.

---

[Explorar las ontologías](https://github.com/iqns-org/ontologies) · [Ver la tecnología](/tech) · [Comenzar](/getting-started)
