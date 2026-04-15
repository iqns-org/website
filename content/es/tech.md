---
title: Tecnología y Arquitectura
description: >-
  Cómo se construyen las ontologías IQ:NS: fundamentos de la web semántica,
  marcos legibles por máquina y APIs listas para agentes.
lang: es
navigation:
  section: platform
  label: Tecnología
  order: 20
---
# Tecnología y Arquitectura

## Construido sobre estándares de la web semántica

IQ:NS usa los mismos estándares que impulsan la publicación científica, la investigación farmacéutica y la integración de datos empresariales en todo el mundo:

- **JSON-LD** — el modelo de datos universal. Cada triple RDF es consultable, exportable, enlazable.
- **SKOS** — captura jerarquías, mapeos y alineaciones entre marcos.
- **OWL** — define clases, propiedades y relaciones lógicas entre conceptos.
- **SHACL** — valida formas de datos y restricciones.

Cada concepto lleva un IRI canónico (estable, permanente), una definición formal referenciada al texto original y relaciones explícitas con conceptos relacionados entre marcos.

---

## Cómo funciona

Cuando una norma cambia, la actualización de la ontología se propaga a través de cada concepto mapeado — cada obligación vinculada, cada control relacionado. Sin remapeo manual.

### Desduplicación entre marcos

Cuando diferentes reglas, políticas o normas operativas todas requieren transparencia, IQ:NS las reconoce como `skos:exactMatch` y muestra un solo concepto, no dos. Una consulta resuelve ambos.

### Perfilado contextual

Dada la jurisdicción, el sector y el tipo de capacidad de IA, una consulta SPARQL devuelve el conjunto preciso y desduplicado de conceptos relevantes — no una lista de marcos, sino exactamente lo que aplica.

---

## Modelos de dominio modulares

IQ:NS se publica como un grafo de conocimiento modular y alineado por dominio en lugar de una lista plana de normas. Más de 40 módulos de ontología independientes y versionados están disponibles en `./ontologies/v1/`, y cada módulo está alineado con el resto del grafo usando SKOS, OWL y patrones semánticos compartidos.

Los dominios representativos incluyen gobernanza de IA, privacidad de datos, resiliencia de seguridad, riesgo financiero, supervisión de salud, transparencia gubernamental y controles empresariales. Esta estructura mantiene cada modelo de dominio claro mientras preserva el razonamiento y la reutilización entre dominios.

Cada módulo es un documento RDF/Turtle independiente con alineaciones semánticas explícitas, de modo que una sola consulta pueda atravesar múltiples dominios.

---

## APIs e integración

### Punto final SPARQL

El grafo completo es consultable vía SPARQL 1.1. Cualquier herramienta que hable SPARQL — plataformas de BI, almacenes de datos, marcos de agentes — obtiene respuestas estructuradas.

### Acceso al grafo listo para agentes

Cada concepto se publica con un IRI canónico, metadatos legibles por máquina y relaciones semánticas formales. Los agentes y herramientas de automatización pueden consumir el grafo directamente — vía SPARQL o una API nativa de grafos — en lugar de depender de PDFs no estructurados o de ingeniería de prompts ad hoc.

Esto mantiene el mismo modelo semántico disponible para flujos de trabajo de cumplimiento y razonamiento aumentado por recuperación, de modo que los agentes resuelvan obligaciones, riesgos y controles a partir de una única fuente de verdad.

---

## Despliegue

| Modo | Descripción |
|------|-------------|
| **GitHub** | Descargar y cargar en su propio almacén RDF |
| **Cloud hosted** | Grafo gestionado en una instancia privada, encriptado |
| **Private cloud** | Desplegado en su VPC (AWS, Azure, GCP) |
| **Air-gapped** | Disponible on-premise para cada cliente |

---

## Estándares abiertos, sin bloqueo

Las ontologías se publican bajo licencia abierta. Exporta como RDF estándar en cualquier momento. Si te vas, llevas contigo un grafo de conocimiento completo y portátil.

---

[Explorar en GitHub](https://github.com/iqns-org/ontologies) · [Ver características](/features) · [Comenzar](/getting-started)
