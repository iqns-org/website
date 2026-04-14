---
title: Características y Capacidades
description: >-
  Lo que IQ:NS ofrece — ontologías abiertas, mapeos entre marcos, acceso SPARQL
  y integración lista para agentes.
lang: es
navigation:
  section: platform
  label: Funciones
  order: 10
---
# Características y Capacidades

## Ontologías abiertas

Más de 50 ontologías que cubren IA, legal, finanzas, salud, gobierno, empresa y más. Cada una modelada en RDF/OWL con alineaciones SKOS, publicadas como archivos Turtle versionados.

Cada concepto tiene:
- Un IRI estable (identificador permanente, no una fila de base de datos)
- Una definición formal basada en el texto original
- Relaciones con conceptos relacionados a través de marcos
- Mapeos entre marcos (`skos:exactMatch`, `skos:broadMatch`, `skos:relatedMatch`)

---

## Inteligencia entre marcos

Los marcos usan palabras diferentes para las mismas ideas. IQ:NS los mapea estructuralmente:

- Artículo 9 del AI Act de la UE ↔ Función del mapa NIST AI RMF ↔ Cláusula 6.1 de ISO 42001 (gestión de riesgos)
- Artículo 22 del GDPR ↔ Capítulo IV del AI Act de la UE (transparencia)
- ISO 24027 ↔ Medida 2.6 de NIST (sesgo y equidad)

Una consulta abarca todos los estándares. Un control puede cumplir múltiples marcos — y el mapeo lo demuestra.

---

## Perfilado contextual

No todo se aplica a todos. Perfila por:
- **Jurisdicción** — UE, EE. UU., Reino Unido, APAC
- **Sector** — finanzas, salud, gobierno, RR.HH.
- **Capacidad de IA** — LLM, biométrica, puntuación crediticia, decisiones autónomas

Obtén un conjunto preciso y deduplicado de lo que es relevante — no 40 marcos, solo lo que importa a tu contexto.

---

## Punto final SPARQL

El grafo completo es consultable:

```sparql
SELECT ?obligation ?isoControl ?nistControl
WHERE {
  ?obligation skos:exactMatch ?isoControl ;
              skos:exactMatch ?nistControl .
  ?isoControl ai:partOf <iso-42001> .
  ?nistControl ai:partOf <nist-ai-rmf> .
}
```

Cualquier herramienta que hable SPARQL — plataformas de BI, almacenes de datos, marcos de agentes — puede consultar las ontologías directamente.

---

## MCP para flujos de trabajo agentes

Cada concepto tiene un IRI estable, una definición legible por máquina y relaciones formales. Los agentes de IA consultan el grafo y obtienen respuestas estructuradas y tipadas — sin necesidad de rellenar prompts en PDF.

---

## Integración

IQ:NS se integra con herramientas existentes:

- **Plataformas GRC** — OneTrust, Vanta, ServiceNow
- **Catálogos de datos** — Collibra, Alation
- **Registros de modelos** — MLflow, Weights & Biases
- **Plataformas en la nube** — AWS, Azure, GCP
- **Herramientas de desarrollo** — Jira, pipelines CI/CD
- **ITSM** — Conectores SKMS de ITIL v3/v4

Sin migraciones forzadas. Las ontologías se adaptan a donde están tus herramientas.

---

## Versionado y portable

Cada ontología está versionada. Exportada como Turtle RDF estándar. Si te vas, llevas contigo un grafo de conocimiento completo y conforme a estándares. Sin bloqueo.

---

[Explorar en GitHub](https://github.com/iqns-org/ontologies) · [Ver la tecnología](/tech) · [Ver precios](/pricing)
