# Frontend — Lifebox Academy

Nuxt 3 + TypeScript + Vuetify + Pinia. Consume el API del Backend.

## Requisitos

- Node.js 20+
- Backend corriendo en `http://127.0.0.1:8000`

## Setup

```bash
cp .env.example .env
npm install
npm run dev
```

App en `http://localhost:3000`.

## Variables

| Variable | Default | Descripción |
|----------|---------|-------------|
| `NUXT_PUBLIC_API_BASE` | `http://127.0.0.1:8000` | URL del Backend |

## Usuarios de prueba

Ver README del Backend (`admin@lifebox.test` / `password123`, etc.).

## Estructura

```
pages/
  login.vue
  admin/
    courses/
    enrollments/
  colaborador/
    my-courses/
layouts/
  admin.vue
  colaborador.vue
  auth.vue
stores/userStore.ts
endpoints/
middleware/auth.global.ts
```

## Auth

El plugin `plugins/api.ts` inyecta `Authorization: Token …` en las llamadas.
El middleware global verifica el token y redirige según rol (`admin` → `/admin/*`, `collaborator` → `/colaborador/*`).
