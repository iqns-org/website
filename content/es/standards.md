---
title: Estándares y marcos
description: >-
  Los estándares de IA y organizacionales de los modelos IQ:NS — lo que cubren,
  a quiénes se aplican y cómo se conectan.
lang: es
navigation:
  section: ontologies
  label: Estándares
  order: 20
---
# Estándares y Marcos

## El panorama

Ningún marco único cubre todo. La mayoría de las organizaciones enfrentan requisitos superpuestos de múltiples estándares — y los vacíos entre ellos son donde se esconden los problemas.

IQ:NS modela más de 50 marcos y modelos de dominio desde `./ontologies/v1/` como ontologías estructuradas. Esto es lo que cubren.

IQ:NS no prioriza un único conjunto de regulaciones; selecciona a mano los modelos de ontología relevantes para cada contexto del repositorio.

---

## Marcos Horizontales

### Ley de IA de la UE
- **Aplica a:** Cualquier organización que ofrezca o despliegue IA en la UE
- **Cubre:** Clasificación de riesgos, evaluación de conformidad, transparencia, documentación técnica, supervisión humana
- **Aplicación:** Multas de hasta el 7 % de los ingresos globales

### Marco de Gestión de Riesgos de IA de NIST
- **Aplica a:** Voluntario, pero cada vez más citado por reguladores y adquisiciones de EE. UU.
- **Cubre:** Cuatro funciones principales — Gobernar, Mapear, Medir, Gestionar
- **Por qué es importante:** El marco más operativamente accionable disponible

### ISO 42001
- **Aplica a:** Organizaciones que buscan certificación formal de gestión de IA
- **Cubre:** Sistema de gestión Plan-hacer-verificar-actuar, controles del Anexo A, auditoría interna

### RGPD de la UE (disposiciones de IA)
- **Aplica a:** Cualquier organización que procese datos personales de residentes de la UE con IA
- **Cubre:** Artículo 22 (decisiones automatizadas), transparencia del perfilado, minimización de datos

---

## Estándares Específicos por Sector

### Servicios Financieros
| Marco | Jurisdicción | Enfoque |
|---|---|---|
| SR 11-7 | EE. UU. | Gestión de riesgos de modelo |
| Directrices de IA del EBA | UE | Supervisión de IA en instituciones de crédito |
| Gobernanza de IA de MAS | Singapur | Gobernanza de IA en instituciones financieras |

### Salud
| Marco | Jurisdicción | Enfoque |
|---|---|---|
| FDA AI/ML SaMD | EE. UU. | IA clínica y software como dispositivo médico |
| IA Confiable de ONC | EE. UU. | Estándares de IA para TI de salud |

### Seguridad
| Marco | Enfoque |
|---|---|
| OWASP LLM Top 10 | Vulnerabilidades de seguridad de LLM |
| MITRE ATLAS | Paisaje de amenazas de IA adversarial |
| Google SAIF | Marco de IA segura |

### Ética y Principios
| Marco | Origen |
|---|---|
| Principios de IA de la OCDE | OCDE |
| Ética de IA de la UNESCO | UNESCO |
| IEEE 7000 | IEEE |

---

## Cómo se superponen los marcos

Terminología diferente, conceptos iguales:

| Concepto | Ley de IA de la UE | NIST AI RMF | ISO 42001 |
|---|---|---|---|
| Gestión de riesgos | Artículo 9 | Función Map | Cláusula 6.1 |
| Supervisión humana | Artículo 14 | Govern 1.4 | A.8.4 |
| Documentación técnica | Artículo 11 | Map 3.4 | A.6.2 |
| Sesgo y equidad | Artículo 10(2)(f) | Measure 2.6 | A.10.3 |
| Transparencia | Capítulo IV | Govern 4.1 | A.8.3 |

IQ:NS mapea estas correspondencias estructuralmente — para que puedas ver dónde un concepto abarca múltiples estándares y dónde existen brechas reales.

---

[Ver cómo funcionan las ontologías](/how-it-works) · [Explorar en GitHub](https://github.com/iqns-org/ontologies)
