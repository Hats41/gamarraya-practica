# GamarraYa - práctica cronometrada

Catálogo de prendas inspirado en Gamarra. Demostración académica con búsqueda,
filtros, publicación de productos y pedidos simulados con historial.

**No hay autenticación, pagos, compras reales ni base de datos remota.**
Los datos se guardan en `localStorage`, clave `gamarraya-demo-v1`, en el mismo
navegador y origen. No se comparten entre dispositivos. Usa datos ficticios.

## Ejecutar

Node.js 22.17 o superior compatible con Next.js 16 y npm:

```sh
npm ci
npm run dev
```

Abre la URL indicada en la terminal. Para producción local:

```sh
npm test
npm run build
npm start
```

## Arquitectura

- `app/page.tsx`: interfaz y coordinación del estado de demostración.
- `app/domain.ts`: tipos, validación, búsqueda y reglas de pedidos puras.
- `app/style.css`: diseño adaptable a móvil y escritorio.
- `tests/domain.test.mjs`: nueve pruebas de reglas y persistencia serializada.
- `.github/workflows/ci.yml`: instalación reproducible, pruebas y compilación.

Next.js sirve la interfaz; las reglas se ejecutan en el navegador. No se
implementaron API, SQL, autorización ni infraestructura Supabase.

## Reglas

- Producto: nombre 3-80 caracteres; precio S/0.01-10000 con hasta dos decimales;
  stock entero 1-999 y categoría del catálogo.
- Pedido: comprador ficticio 2-60 caracteres; cantidad entera mayor a cero y
  menor o igual al stock. Reduce el stock local y calcula el total a céntimos.
- Datos locales corruptos: aviso y catálogo inicial. Escritura bloqueada:
  aviso de error, sin confirmar un guardado inexistente.

## Verificación manual

1. Buscar `algodon`: encuentra productos aunque su nombre tenga tilde.
2. Filtrar por categoría y buscar una palabra inexistente: estado vacío.
3. Publicar producto ficticio con precio 42.50 y stock 4; aparece en catálogo.
4. Solicitar 2 unidades: total S/85.00; quedan 2 disponibles.
5. Abrir Mis pedidos y recargar: se conserva el historial en ese navegador.
6. Intentar precio negativo o cantidad superior al stock: no se guarda.
7. Revisar el formulario y navegación con ancho de 390 px.

## Trazabilidad

[Jira GYP](https://damatmfr-1790533434032.atlassian.net/jira/software/projects/GYP/boards/68/backlog)

- GYP-1: épica del MVP demo.
- GYP-2: catálogo y búsqueda.
- GYP-3: publicación.
- GYP-4: pedidos e historial.
- GYP-5: pruebas, despliegue y documentación.

[PR de implementación #1](https://github.com/Hats41/gamarraya-practica/pull/1).
Los identificadores GYP están incluidos en los commits correspondientes.

## Despliegue

Importar `Hats41/gamarraya-practica` desde Vercel, rama `main`, directorio raíz
`./`, preset Next.js. No necesita variables de entorno. GitHub Actions valida
el código; la integración de Vercel construye y publica cada push a main.

## Siguiente iteración

Autenticación real, persistencia compartida, políticas de acceso y tests de
integración solo se añadirán si los exige el ejercicio. Esta entrega demuestra
el flujo y sus reglas, sin simular que esas capacidades ya existen.
