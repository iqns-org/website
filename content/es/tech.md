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

## Cobertura de marcos

Más de 40 marcos en siete dominios:

| Dominio | Marcos |
|--------|-----------|
| **IA** | EU AI Act, NIST AI RMF, ISO 42001, ISO 23894, ISO 24027–29 |
| **Datos y Privacidad** | GDPR, UK GDPR, CCPA, eIDAS |
| **Seguridad** | OWASP LLM Top 10, NIST CSF 2.0, ISO 27001, SOC 2 |
| **Finanzas** | EBA guidelines, DORA, Basel model risk |
| **Salud** | FDA AI/ML guidance, MDR, HIPAA |
| **Gobierno** | NIST EO 13960, UK algorithmic transparency |
| **Empresarial** | ISO 31000, COSO ERM, ITIL 4, IEEE 7000 series |

Cada marco es un documento Turtle independiente y versionado.

---

## APIs e integración

### Punto final SPARQL

El grafo completo es consultable vía SPARQL 1.1. Cualquier herramienta que hable SPARQL — plataformas de BI, almacenes de datos, marcos de agentes — obtiene respuestas estructuradas.

### MCP para agentes

Cada concepto tiene una IRI estable, una definición legible por máquina y relaciones formales. Los agentes de IA consultan el grafo directamente — sin incrustar contexto de PDF.

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
