---
title: Preguntas Frecuentes
description: 'Preguntas comunes sobre IQ:NS, las ontologías y cómo usarlas.'
lang: es
navigation:
  section: platform
  label: FAQ
  order: 30
---
# Preguntas frecuentes

## Acerca de IQ:NS

### ¿Qué es IQ:NS?

Un proyecto de código abierto que modela normas, regulaciones y conocimientos institucionales de IA como ontologías formales. Construido sobre RDF, SKOS, OWL y SHACL — consultable por personas y máquinas.

### ¿Es gratuito?

Las ontologías centrales son gratuitas y de código abierto. Existe un nivel comercial para servicios alojados, bases de conocimiento privadas y soporte de integración.

### ¿Para quién es esto?

Cualquier persona que trabaje con normas de IA — equipos de cumplimiento, ingenieros, arquitectos de integración, investigadores, o cualquiera que construya agentes que necesiten razonar sobre reglas institucionales.

### ¿En qué se diferencia de una plataforma GRC?

Las plataformas GRC ejecutan flujos de trabajo y aprobaciones. IQ:NS proporciona la capa semántica subyacente — conocimiento estructurado sobre lo que dicen las normas y cómo se relacionan. Son complementarias.

---

## Acerca de las ontologías

### ¿Qué normas cubren?

Más de 50 marcos están actualmente disponibles — regulación de IA, privacidad, seguridad, reglas sectoriales y controles empresariales. Consulte [Ontologías abiertas](/ontologies/index).

### ¿Cómo se construyen?

Cada norma se modela como clases OWL con etiquetas SKOS, definiciones y mapeos de alineación entre marcos. Cada concepto se remonta a su texto fuente autoritativo.

### ¿Cómo los uso?

Puede conectarse a nuestro servidor MCP alojado, lo que permite que sus agentes de IA se comuniquen entre sí y con su cadena de suministro digital sin ambigüedades.

Como desarrollador, puede descargar los archivos fuente RDF de GitHub, cargarlos en cualquier triplestore y consultarlos con SPARQL. 

### ¿Puedo contribuir?

Sí. Las ontologías abiertas están en [GitHub](https://github.com/iqns-org/ontologies). Se agradece la experiencia del dominio, correcciones y la cobertura de nuevos marcos.

### ¿Qué ocurre cuando una norma cambia?

La comunidad actualiza las ontologías. Cada versión se rastrea — puede ver qué cambió y cuándo.

---

## Acerca del nivel comercial

### ¿Qué incluye el nivel de pago?

Iniciamos una instancia de nuestro servidor de conocimiento empresarial que contiene todas las ontologías abiertas y los marcos de gobernanza de IA.

Puede crear bases de conocimiento privadas que enlacen cualquier información de múltiples fuentes — SQL, APIs, GraphQL y más.

La instancia incluye puntos finales SPARQL seguros, servidores MCP virtuales, conectores para sistemas SaaS empresariales y soporte práctico.

### ¿Lo necesito?

Para muchos casos de uso, las ontologías gratuitas son suficientes. 

El nivel comercial es para equipos que desean más — conocimiento privado, integración agente, alojamiento gestionado, extensiones personalizadas o soporte profesional.

### ¿Hay bloqueo?

No. Todo se exporta como RDF Turtle estándar. Puede salir con su grafo de conocimiento completo en cualquier momento.

---

## Técnico

### ¿IQ:NS ve mis datos?

No. Las ontologías describen conceptos y relaciones. Nunca tocamos los datos del modelo, conjuntos de entrenamiento, resultados de inferencia o información de identificación personal (PII).

Todas las instancias alojadas comercialmente están aseguradas en nubes privadas — la suya o la nuestra.

### ¿Puedo ejecutarlo en local?

Sí. Las ontologías son archivos que puede alojar en cualquier lugar. 

El nivel comercial también admite implementaciones en nubes privadas y aisladas (air‑gapped) para una verdadera soberanía de datos.

---

[ontologías abiertas](https://github.com/iqns-org/ontologies) · [Contáctanos](/support)
