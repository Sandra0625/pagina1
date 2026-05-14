# Pagina1 — Proyecto Big Ban University

Proyecto React + Vite (frontend) y Express + MongoDB (backend) con integración de Stripe y generación de facturas en PDF.

## Requisitos

- Node.js 18+ recomendado
- MongoDB local o remoto
- (Opcional) Stripe account + Stripe CLI para webhooks
- (Opcional) Cuenta SMTP para envío de emails

## Variables de entorno

Copia `backend/.env.example` a `backend/.env` y completa los valores.

Variables clave:

- `MONGO_URI` — cadena de conexión a MongoDB
- `JWT_SECRET` — secreto JWT
- `STRIPE_SECRET_KEY` — clave secreta de Stripe (test)
- `STRIPE_WEBHOOK_SECRET` — secret del webhook (obtenido con `stripe listen`)
- `SMTP_*` — configuración SMTP opcional para enviar emails y facturas
- `FRONTEND_URL` — URL del frontend (ej. `http://localhost:5173`)

## Instalación

Instala dependencias en root y backend:

```bash
# desde la raíz del proyecto
npm run install:all
```

## Ejecutar en desarrollo

Primero crea `backend/.env` con tus credenciales y configura MongoDB.

Arrancar backend:

```bash
# desde la raíz
npm run start:backend
# o desde backend/
cd backend
npm run dev
```

Arrancar frontend:

```bash
npm run dev
# abre http://localhost:5173
```

## Probar pagos y webhooks (Stripe CLI)

1. Instala e inicia sesión en Stripe CLI: `stripe login`.
1. Desde la raíz del proyecto, corre:

```bash
# escucha eventos y reenvía al webhook local
stripe listen --forward-to localhost:5000/webhook/stripe
```

1. Crea una sesión de checkout desde el frontend o con curl hacia `POST /api/payments/create-checkout-session`.
1. Cuando el evento `checkout.session.completed` llegue al servidor, se creará un `Order` y se generará una factura PDF en `backend/invoices/`.

También puedes probar eventos con:

```bash
stripe trigger checkout.session.completed
```

## Facturas

- Las facturas se generan con `pdfkit` y se guardan en `backend/invoices/invoice-<orderId>.pdf`.
- Si `SMTP_*` está configurado, el servidor intentará enviar la factura como adjunto al correo del cliente.

## Notas

- Si no configuras SMTP, los códigos de verificación y las rutas se imprimirán en la consola.
- Asegúrate de configurar `STRIPE_WEBHOOK_SECRET` cuando uses `stripe listen`.

## Scripts útiles

- `npm run start:backend` — arranca backend (nodemon)
- `npm run start:frontend` — arranca frontend (vite)
- `npm run install:all` — instala dependencias en root y backend

¿Quieres que automatice `dev:all` con `concurrently` para levantar frontend+backend con un solo comando? Puedo añadirlo si quieres.
