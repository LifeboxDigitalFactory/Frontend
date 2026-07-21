# Frontend — Lifebox Academy

Nuxt 3 + TypeScript + Vuetify + Pinia. Consume el API del Backend.

## Requisitos (entorno vacío)

Instala estas herramientas de sistema **antes** de clonar o correr el proyecto.

### 1. Git

Necesario para clonar el repositorio.

| OS | Instalación |
|----|-------------|
| macOS | `xcode-select --install` |
| Linux (Debian/Ubuntu) | `sudo apt update && sudo apt install git` |
| Windows | [Git for Windows](https://git-scm.com/download/win) o `winget install Git.Git` |

### 2. Node.js 20+ (incluye npm)

Verifica con `node --version` (≥ 20) y `npm --version`.

| OS | Instalación |
|----|-------------|
| macOS | `brew install node@20` o instalador LTS desde [nodejs.org](https://nodejs.org/) |
| Linux (Debian/Ubuntu) | Usa [nvm](https://github.com/nvm-sh/nvm) (recomendado) o `sudo apt install nodejs npm` (confirma que la versión sea ≥ 20) |
| Windows | Instalador LTS desde [nodejs.org](https://nodejs.org/) o `winget install OpenJS.NodeJS.LTS` |

Con **nvm** (macOS / Linux):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
# reinicia la terminal, luego:
nvm install 20
nvm use 20
```

### 3. Backend corriendo

Este frontend necesita el API del repo Backend en `http://127.0.0.1:8000`.

1. Clona y levanta el Backend siguiendo su README (Python, make, migrate, seed, `make runserver`).
2. Confirma que responde en `http://127.0.0.1:8000`.

### Resumen rápido (copiar/pegar)

**macOS**

```bash
xcode-select --install
brew install node@20   # o descarga LTS desde nodejs.org
```

**Linux (Debian/Ubuntu)**

```bash
sudo apt update && sudo apt install git
# luego Node 20+ vía nvm (recomendado) o el gestor de paquetes de tu distro
```

**Windows**

1. Instala [Git](https://git-scm.com/download/win).
2. Instala [Node.js LTS 20+](https://nodejs.org/).

## Setup

Con el Backend ya corriendo:

```bash
git clone <url-del-repo>
cd Frontend

cp .env.example .env
npm install
npm run dev
```

App en `http://localhost:3000`.

`npm install` descarga las dependencias del proyecto (Nuxt, Vue, Vuetify, Pinia, TypeScript, etc.) definidas en `package.json`. No hace falta instalarlas a mano.

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
