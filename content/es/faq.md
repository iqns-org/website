---
title: Preguntas frecuentes
description: 'Preguntas comunes sobre IQ:NS, las ontologías y cómo usarlas.'
lang: es
navigation:
  section: ontologies
  label: Preguntas frecuentes
  order: 30
---
# Preguntas Frecuentes

## Sobre IQ:NS

### ¿Qué es IQ:NS?

Un proyecto de código abierto que modela normas de IA, regulaciones y conocimiento institucional como ontologías formales. Construido sobre RDF, SKOS, OWL y SHACL — consultable por personas y máquinas.

### ¿Es gratuito?

Las ontologías centrales son gratuitas y de código abierto. Existe un nivel comercial para servicios alojados, bases de conocimiento privadas y soporte de integración.

### ¿Para quién es esto?

Cualquier persona que trabaje con normas de IA — equipos de cumplimiento, ingenieros, arquitectos de integración, investigadores, o cualquiera que construya agentes que necesiten razonar sobre reglas institucionales.

### ¿En qué se diferencia de una plataforma GRC?

Las plataformas GRC ejecutan flujos de trabajo y aprobaciones. IQ:NS proporciona la capa semántica subyacente — conocimiento estructurado sobre lo que dicen las normas y cómo se relacionan. Son complementarias.

---

## Sobre las ontologías

### ¿Qué normas cubren?

Más de 50 marcos, incluyendo EU AI Act, NIST AI RMF, ISO 42001, GDPR, OWASP LLM Top 10, MITRE ATLAS, regulaciones específicas de sector (FDA, EBA, SR 11-7), y más. Ver [cobertura completa](/standards).

### ¿Cómo se construyen?

Cada norma se modela como clases OWL con etiquetas SKOS, definiciones y mapeos de alineación entre marcos. Cada concepto se remonta a su texto fuente autoritativo.

### ¿Cómo los utilizo?

Descargue los archivos Turtle de GitHub, cárguelos en cualquier triplestore y consulte con SPARQL. O use el servidor MCP alojado para conectar agentes de IA directamente.

### ¿Puedo contribuir?

Sí. Las ontologías están en [GitHub](https://github.com/iqns-org/ontologies). Se agradece experiencia de dominio, correcciones y cobertura de nuevos marcos.

### ¿Qué ocurre cuando una norma cambia?

La comunidad actualiza las ontologías. Cada versión se rastrea — puedes ver qué cambió y cuándo.

---

## Sobre el nivel comercial

### ¿Qué incluye el nivel de pago?

Bases de conocimiento privadas, puntos finales SPARQL alojados, acceso al servidor MCP, conectores ITIL SKMS y soporte práctico.

### ¿Lo necesito?

Para la mayoría de los casos de uso, las ontologías gratuitas son suficientes. El nivel comercial es para equipos que desean alojamiento gestionado, extensiones privadas o soporte de integración.

### ¿Hay bloqueo?

No. Todo se exporta como RDF Turtle estándar. Puedes salir con tu grafo de conocimiento completo en cualquier momento.

---

## Técnico

### ¿IQ:NS ve mis datos?

No. Las ontologías describen conceptos y relaciones. Nunca tocamos datos de modelo, conjuntos de entrenamiento, resultados de inferencia o datos personales (PII).

### ¿Puedo ejecutarlo on‑premise?

Sí. Las ontologías son archivos que puedes alojar en cualquier lugar. El nivel comercial también soporta nubes privadas y despliegues aislados.

---

[Explorar las ontologías](https://github.com/iqns-org/ontologies) · [Contáctanos](/support)
