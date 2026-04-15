---
title: Confianza y Seguridad
description: 'Cómo IQ:NS maneja los datos, qué almacenamos y cómo los protegemos.'
lang: es
navigation:
  section: platform
  label: Seguridad
  order: 30
---
# Confianza y Seguridad

## Qué almacenamos

IQ:NS funciona solo con **metadatos**:

- Conceptos y relaciones del marco (texto regulatorio público)
- Los perfiles de su sistema (si usa el nivel comercial): nombres, capacidades, clasificaciones de riesgo
- Sus extensiones de ontología (si son privadas): conceptos y mapeos personalizados
- Referencias de evidencia (enlaces o hashes — no los documentos mismos)

Nosotros **nunca** almacenamos datos de entrenamiento del modelo, pesos, salidas de inferencia, datos del cliente, o información de identificación personal (PII).

## Dónde lo almacenamos

- **Cifrado:** AES-256 en reposo, TLS 1.3 en tránsito
- **Acceso:** controles basados en roles, registro de auditoría
- **Copias de seguridad:** automatizadas diariamente, distribuidas geográficamente

## Opciones de despliegue

- **Autoalojado** — descargue archivos Turtle, ejecute su propio triplestore
- **Alojado en la nube** — instancia gestionada en AWS, cifrada
- **Nube privada** — desplegado en su VPC
- **Aislado** — Disponible on-premise para cada cliente

## Cumplimiento

- Auditoría SOC 2 Tipo II
- Cumple con GDPR — sin retención de datos personales
- Certificado ISO 27001
- HIPAA BAA y FedRAMP disponibles bajo solicitud

## Abierto por defecto

Las ontologías centrales son de código abierto. Puede verificar cada concepto, cada mapeo, cada relación. La transparencia es estructural, no una promesa.

## Reportar un problema de seguridad

[security@iqns.org](mailto:security@iqns.org)

---

[Privacy policy](/privacy) · [Terms of service](/terms)
