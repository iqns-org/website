---
title: Tecnología y Arquitectura
description: >-
  Cómo se construyen las ontologías IQ:NS: fundamentos de la web semántica,
  marcos legibles por máquinas y API listas para agentes.
lang: es
navigation:
  section: platform
  label: Tecnología
  order: 20
---
# Tecnología y Arquitectura

## Construido sobre estándares de la web semántica

IQ:NS usa los mismos estándares que impulsan la publicación científica, la investigación farmacéutica y la integración de datos empresariales en todo el mundo:

- **RDF** — el modelo de datos universal. Cada triple es consultable, exportable, enlazable.
- **SKOS** — captura jerarquías, mapeos y alineaciones entre marcos.
- **OWL** — define clases, propiedades y relaciones lógicas entre conceptos.
- **SHACL** — valida formas de datos y restricciones.

Cada concepto lleva una IRI canónica (estable, permanente), una definición formal referenciada al texto original y relaciones explícitas con conceptos relacionados entre marcos.

---

## Cómo funciona

Cuando una norma cambia, la actualización de la ontología se propaga a través de cada concepto mapeado — cada obligación vinculada, cada control relacionado. Sin remapeo manual.

### Desduplicación entre marcos

Cuando el Artículo 22 del GDPR y el Artículo 13 de la Ley de IA de la UE ambos requieren transparencia, IQ:NS los reconoce como `skos:exactMatch` y muestra un solo concepto, no dos. Una consulta resuelve ambos.

### Perfilado contextual

Dada la jurisdicción, el sector y el tipo de capacidad de IA, una consulta SPARQL devuelve el conjunto preciso y desduplicado de conceptos relevantes — no una lista de marcos, sino exactamente lo que aplica.

---

## Modelos modulares por dominio

IQ:NS se publica como un grafo de conocimiento modular y alineado por dominio, no como una simple lista de estándares. Más de 40 módulos ontológicos independientes y versionados están disponibles en `./ontologies/v1/`, y cada módulo se alinea con el resto del grafo mediante SKOS, OWL y patrones semánticos compartidos.

Los dominios representados incluyen gobernanza de IA, privacidad de datos, resiliencia de seguridad, riesgo financiero, supervisión de salud, transparencia gubernamental y control empresarial. Esta estructura mantiene claros los modelos de cada dominio al mismo tiempo que conserva el razonamiento y la reutilización entre dominios.

Cada módulo es un documento RDF/Turtle independiente con alineamientos semánticos explícitos para que una sola consulta pueda atravesar varios dominios.

---

## APIs e integración

### Punto final SPARQL

El grafo completo es consultable vía SPARQL 1.1. Cualquier herramienta que hable SPARQL — plataformas de BI, almacenes de datos, marcos de agentes — obtiene respuestas estructuradas.

### Acceso de grafo listo para agentes

Cada concepto se publica con una IRI canónica, metadatos legibles por máquina y relaciones semánticas formales. Los agentes y flujos de trabajo de automatización pueden consumir el grafo directamente — mediante SPARQL o una API nativa de grafo — en lugar de depender de PDFs no estructurados.

Esto permite que el mismo modelo semántico sirva tanto a los flujos de trabajo de cumplimiento como al razonamiento enriquecido por recuperación, de modo que los agentes resuelvan obligaciones, riesgos y controles desde una única fuente de verdad.

---

## Despliegue

| Modo | Descripción |
|------|-------------|
| **GitHub** | Descargar archivos Turtle, cargarlos en su propio triplestore |
| **Alojado en la nube** | Grafo gestionado en una instancia privada, encriptado |
| **Nube privada** | Desplegado en su VPC (AWS, Azure, GCP) |
| **Aislado** | Completamente on-premises para entornos regulados |

---

## Estándares abiertos, sin bloqueo

Las ontologías se publican bajo licencia abierta. Exporte como RDF Turtle estándar en cualquier momento. Si se va, lleva consigo un grafo de conocimiento completo y portátil.

---

[Explorar en GitHub](https://github.com/iqns-org/ontologies) · [Ver características](/features) · [Comenzar](/getting-started)
