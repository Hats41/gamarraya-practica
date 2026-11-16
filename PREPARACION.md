# Preparación del simulacro GamarraYa

Inicio de preparación: 16/11/2026, 17:38:24 (Lima). La ejecución cronometrada empieza cuando estén disponibles los accesos mínimos.

## Estado comprobado

- Node 22.17.0, npm 11.5.2 y Git 2.50.1 disponibles.
- GitHub conectado a Hats41 y Jira accesible.
- HTTP a npm, GitHub, Vercel y Supabase responde.
- Base Next.js/TypeScript instalada. Todavía no implementa funciones de negocio.
- Faltan proyecto Jira exclusivo, repositorio nuevo y acceso de publicación Vercel; Supabase depende de elegir modo real.

## Preparación que requiere al usuario

1. Jira: crear proyecto Scrum «GamarraYa Práctica», clave propia; pasar URL. No usar AYNI. Habilitar backlog y sprints si corresponde.
2. GitHub: crear repositorio vacío Hats41/gamarraya-practica, sin README automático. Pasar URL y comprobar sesión Git.
3. Vercel: entrar con GitHub y autorizar el repositorio. Importar proyecto y comprobar detección Next.js. Cargar variables necesarias antes de desplegar.
4. Supabase, si el modo es real: crear proyecto de práctica; cargar URL y publishable key en .env.local/Vercel, no secretos en chat. Aplicar políticas de acceso por usuario y rol.
5. Resolver tú los inicios de sesión, MFA y CAPTCHA. No hay credenciales de AYNI reutilizadas en esta carpeta.

## Alcance del ensayo

Vendedor publica un producto, comprador consulta catálogo y solicita pedido. Añadir autenticación y permisos si se exige base real. El modo demostración debe indicarse expresamente y no presentarse como persistencia de servidor.

## Cronograma de 120 minutos

| Minutos | Resultado |
|---|---|
| 0-10 | Caso, actores, alcance y criterios |
| 10-25 | Jira: historias, responsables, fechas y estimaciones; iniciar sprint después |
| 25-35 | Casos de uso, arquitectura lógica/física y modelo relacional |
| 35-45 | Primer despliegue funcional básico |
| 45-90 | Implementación del recorrido principal y commits vinculados |
| 90-105 | Pruebas publicadas y correcciones |
| 105-120 | Capturas, Jira actualizado e informe final |

## Historias preparadas (no son tarjetas creadas todavía)

| ID temporal | Historia | Criterios | Puntos propuestos |
|---|---|---|---|
| H1 | Consultar catálogo | Lista productos; estado vacío; filtro por texto | 3 |
| H2 | Publicar producto | Título, precio positivo y stock válido; error visible; guardado verificable | 5 |
| H3 | Solicitar pedido | Producto y cantidad válidos; confirmación; rechazo de inválidos | 5 |
| H4 | Consultar pedidos propios | Listado, detalle y vacío; aislamiento si hay autenticación | 3 |

Los puntos son estimaciones iniciales y deben adaptarse al enunciado. No equivalen a velocidad histórica.

## Trazabilidad

- Cada tarjeta: responsable, prioridad, inicio, vencimiento, sprint y criterios.
- Cada commit: clave real Jira, por ejemplo `feat: PRA-3 add product catalog`.
- En curso al iniciar, revisión tras implementación, finalizada después de verificar criterios.
- Adjuntar commit/PR, URL desplegada, fecha y resultado de prueba.
- No inventar días distintos: si la práctica dura dos horas, es normal que todos los eventos sean del mismo día.
- Si la consigna pide dos sprints semanales, registrarlos como planificación y distinguir lo realmente ejecutado durante la práctica.

## Definition of Done

Criterios satisfechos, comprobación registrada, commit/PR disponible, URL verificada y sin fallo bloqueante. Registrar impedimentos y simulaciones; no cerrar por tener solo una pantalla.

## Documento final

Propuesta, DevOps, casos de uso, arquitectura lógica/física, modelo relacional, Scrum/estimación, historias/criterios, matriz de pruebas, capturas y enlaces Jira/GitHub/Vercel, límites y tiempo real. No afirmar pruebas, persistencia o despliegues no ejecutados.

## Comandos de arranque

Desde esta carpeta: `npm.cmd run dev`. Verificar: `npm.cmd run build` y `npm.cmd run typecheck`.

## Referencias

- https://vercel.com/docs/projects/managing-projects
- https://supabase.com/docs/guides/getting-started/quickstarts/nextjs
- https://support.atlassian.com/jira-software-cloud/docs/enable-sprints/
