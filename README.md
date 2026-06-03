# Sentix AI — Dashboard de Inteligencia Conversacional

Prototipo frontend (sin backend) para **Sentix AI**, una plataforma SaaS CRM-agnostic que
convierte conversaciones de clientes en **Hallazgos** (insights), los agrupa en **Temas**
(topics), mide sentimiento y predice riesgo de abandono (churn).

> UADE · Tecnología e Innovación · Trabajo Práctico Integrador — Grupo 7

## Stack
- React 18 + Vite
- Tailwind CSS v3
- Recharts (gráficos)
- lucide-react (íconos)
- Datos mock hardcodeados (`src/data/mockData.js`) — toda la interactividad es estado local.

## Cómo ejecutar
```bash
npm install
npm run dev
```
Abrí la URL que imprime Vite (por defecto http://localhost:5173).

Para una build de producción:
```bash
npm run build
npm run preview
```

## Vistas
- **Inicio** — tendencia de incidentes, KPIs, categorías de hallazgos, Top 10 Hallazgos/Temas, actividad reciente.
- **Hallazgos** — donut Top 10 + tabla con prioridad y estado editables (estado local).
- **Temas** — KPIs (Tasa de Resolución 6.7%) + feed de temas activos.
- **Clientes → Personas** — perfil de riesgo de churn (Bajo / Medio / Alto).
- **Empresas, Listas, Investigación, Informes** — placeholders "Próximamente".

## Estructura
```
src/
├── App.jsx               # shell + navegación por estado (activeView)
├── data/mockData.js      # fuente única de datos
├── components/           # Sidebar, TopBar, badges, dropdowns, charts/
└── views/                # Inicio, Hallazgos, Temas, Personas, Placeholder
```
