// ============================================================================
// Sentix AI — Mock Data (single source of truth)
// All numbers mirror the project spec; identities rebranded to Sentix clients.
// No backend: every chart/table/list in the app reads from this module.
// ============================================================================

// ---------------------------------------------------------------------------
// Category palette + helpers
// ---------------------------------------------------------------------------
export const categoryColors = {
  Usabilidad: '#8B5CF6',
  Operaciones: '#10B981',
  Fricción: '#F97316',
  'Oportunidad de Mejora': '#3B82F6',
  Problemas: '#EF4444',
  'Comentarios Positivos': '#22C55E',
}

// Sentiment scale: key -> emoji + color + label
export const sentimentMap = {
  muyNegativo: { emoji: '😩', color: '#EF4444', label: 'Muy negativo' },
  negativo: { emoji: '😟', color: '#F97316', label: 'Negativo' },
  neutral: { emoji: '😐', color: '#F59E0B', label: 'Neutral' },
  positivo: { emoji: '🙂', color: '#22C55E', label: 'Positivo' },
  muyPositivo: { emoji: '😄', color: '#10B981', label: 'Muy positivo' },
}

// ---------------------------------------------------------------------------
// KPIs
// ---------------------------------------------------------------------------
export const kpisHome = {
  hallazgos: 403,
  temas: 232,
  entrevistas: 0,
  sentimiento: 'neutral',
}

export const kpisAllTime = {
  hallazgos: 3187,
  temas: 1882,
  urgentes: 227,
  resolucionGlobal: 6.7, // %
  sentimiento: 'neutral',
}

// ---------------------------------------------------------------------------
// Findings categories breakdown
// ---------------------------------------------------------------------------
export const categories = [
  { name: 'Usabilidad', pct: 39, count: 170, color: '#8B5CF6' },
  { name: 'Operaciones', pct: 22, count: 97, color: '#10B981' },
  { name: 'Fricción', pct: 21, count: 92, color: '#F97316' },
  { name: 'Oportunidad de Mejora', pct: 8, count: 36, color: '#3B82F6' },
  { name: 'Problemas', pct: 8, count: 35, color: '#EF4444' },
  { name: 'Comentarios Positivos', pct: 1, count: 3, color: '#22C55E' },
]

// ---------------------------------------------------------------------------
// Top 10 Hallazgos (insights) — for donut charts
// ---------------------------------------------------------------------------
export const topHallazgos = [
  { title: 'Confusión sobre cómo conectarse a la VPN', incidents: 39, category: 'Usabilidad', priority: 'Alta' },
  { title: 'Falta de respuesta efectiva del soporte', incidents: 17, category: 'Operaciones', priority: 'Alta' },
  { title: 'Falta de claridad sobre el propósito de la notificación', incidents: 16, category: 'Usabilidad', priority: 'Normal' },
  { title: 'Notificación no confirmada como recibida', incidents: 15, category: 'Operaciones', priority: 'Normal' },
  { title: 'Confusión sobre la configuración de notificaciones', incidents: 14, category: 'Usabilidad', priority: 'Normal' },
  { title: 'Falta de respuesta clara a la consulta del cliente', incidents: 14, category: 'Fricción', priority: 'Alta' },
  { title: 'Dificultades para encontrar empleo en la zona', incidents: 13, category: 'Oportunidad de Mejora', priority: 'Baja' },
  { title: 'Incertidumbre sobre stock', incidents: 3, category: 'Operaciones', priority: 'Normal' },
  { title: 'Falta de oportunidad', incidents: 3, category: 'Oportunidad de Mejora', priority: 'Baja' },
  { title: 'Preocupaciones sobre privacidad de datos', incidents: 3, category: 'Problemas', priority: 'Alta' },
]

// ---------------------------------------------------------------------------
// Top 10 Temas (topics) — for donut charts
// ---------------------------------------------------------------------------
export const topTemas = [
  { title: 'Conexión a VPN en Windows', count: 28 },
  { title: 'Opiniones sobre personajes en la serie', count: 24 },
  { title: 'Notificación de servicio enviada a número de tel...', count: 21 },
  { title: 'Moderación de contenido político en foros', count: 16 },
  { title: 'Confusión sobre disponibilidad de productos', count: 14 },
  { title: 'Incidentes de seguridad en escuelas', count: 12 },
  { title: 'Sentix · Configuración de Notificaciones', count: 11 },
  { title: 'Demoras en la verificación de identidad', count: 9 },
  { title: 'Errores en la facturación recurrente', count: 7 },
  { title: 'Solicitudes de nuevas integraciones CRM', count: 5 },
]

// ---------------------------------------------------------------------------
// Full Hallazgos data table (10 from spec + realistic extensions)
// ---------------------------------------------------------------------------
export const hallazgosTable = [
  { id: 'H-1042', title: 'Confusión sobre cómo conectarse a la VPN', category: 'Usabilidad', incidents: 39, sentiment: 'negativo', priority: 'Alta', status: 'Abierto', lastActivity: 'hace 12 min' },
  { id: 'H-1041', title: 'Falta de respuesta efectiva del soporte', category: 'Operaciones', incidents: 17, sentiment: 'muyNegativo', priority: 'Alta', status: 'En progreso', lastActivity: 'hace 34 min' },
  { id: 'H-1039', title: 'Falta de claridad sobre el propósito de la notificación', category: 'Usabilidad', incidents: 16, sentiment: 'neutral', priority: 'Normal', status: 'Abierto', lastActivity: 'hace 1 h' },
  { id: 'H-1036', title: 'Notificación no confirmada como recibida', category: 'Operaciones', incidents: 15, sentiment: 'neutral', priority: 'Normal', status: 'Abierto', lastActivity: 'hace 2 h' },
  { id: 'H-1034', title: 'Confusión sobre la configuración de notificaciones', category: 'Usabilidad', incidents: 14, sentiment: 'negativo', priority: 'Normal', status: 'En progreso', lastActivity: 'hace 3 h' },
  { id: 'H-1031', title: 'Falta de respuesta clara a la consulta del cliente', category: 'Fricción', incidents: 14, sentiment: 'negativo', priority: 'Alta', status: 'Abierto', lastActivity: 'hace 4 h' },
  { id: 'H-1029', title: 'Dificultades para encontrar empleo en la zona', category: 'Oportunidad de Mejora', incidents: 13, sentiment: 'neutral', priority: 'Baja', status: 'Abierto', lastActivity: 'hace 5 h' },
  { id: 'H-1024', title: 'Demoras en la verificación de identidad (KYC)', category: 'Fricción', incidents: 11, sentiment: 'negativo', priority: 'Alta', status: 'En progreso', lastActivity: 'hace 6 h' },
  { id: 'H-1021', title: 'Errores intermitentes al iniciar sesión', category: 'Problemas', incidents: 9, sentiment: 'muyNegativo', priority: 'Alta', status: 'Abierto', lastActivity: 'hace 8 h' },
  { id: 'H-1018', title: 'Dashboard tarda en cargar con muchos tickets', category: 'Operaciones', incidents: 8, sentiment: 'negativo', priority: 'Normal', status: 'En progreso', lastActivity: 'hace 10 h' },
  { id: 'H-1015', title: 'Falta de documentación sobre la API de webhooks', category: 'Usabilidad', incidents: 7, sentiment: 'neutral', priority: 'Normal', status: 'Abierto', lastActivity: 'hace 12 h' },
  { id: 'H-1012', title: 'Errores en la facturación recurrente', category: 'Problemas', incidents: 6, sentiment: 'muyNegativo', priority: 'Alta', status: 'Abierto', lastActivity: 'hace 14 h' },
  { id: 'H-1009', title: 'Solicitud de exportar reportes a PDF', category: 'Oportunidad de Mejora', incidents: 5, sentiment: 'neutral', priority: 'Baja', status: 'Abierto', lastActivity: 'hace 16 h' },
  { id: 'H-1007', title: 'Onboarding poco claro para nuevos agentes', category: 'Usabilidad', incidents: 5, sentiment: 'negativo', priority: 'Normal', status: 'En progreso', lastActivity: 'hace 18 h' },
  { id: 'H-1004', title: 'Incertidumbre sobre stock de productos', category: 'Operaciones', incidents: 3, sentiment: 'neutral', priority: 'Normal', status: 'Resuelto', lastActivity: 'hace 1 día' },
  { id: 'H-1002', title: 'Preocupaciones sobre privacidad de datos', category: 'Problemas', incidents: 3, sentiment: 'negativo', priority: 'Alta', status: 'En progreso', lastActivity: 'hace 1 día' },
  { id: 'H-0998', title: 'Buena experiencia con el nuevo flujo de pago', category: 'Comentarios Positivos', incidents: 2, sentiment: 'muyPositivo', priority: 'Baja', status: 'Resuelto', lastActivity: 'hace 2 días' },
  { id: 'H-0995', title: 'Agradecimiento por la rápida resolución del caso', category: 'Comentarios Positivos', incidents: 1, sentiment: 'positivo', priority: 'Baja', status: 'Resuelto', lastActivity: 'hace 2 días' },
]

export const PRIORITIES = ['Alta', 'Normal', 'Baja']
export const STATUSES = ['Abierto', 'En progreso', 'Resuelto']

// ---------------------------------------------------------------------------
// Temas feed (topics with resolution metrics)
// ---------------------------------------------------------------------------
export const temasFeed = [
  { title: 'Conexión a VPN en Windows', incidents: 28, hallazgos: 6, resolutionRate: 7, sentiment: 'negativo', lastActivity: 'hace 12 min' },
  { title: 'Opiniones sobre personajes en la serie', incidents: 24, hallazgos: 5, resolutionRate: 12, sentiment: 'neutral', lastActivity: 'hace 40 min' },
  { title: 'Notificación de servicio enviada a número de tel...', incidents: 21, hallazgos: 4, resolutionRate: 5, sentiment: 'negativo', lastActivity: 'hace 1 h' },
  { title: 'Moderación de contenido político en foros', incidents: 16, hallazgos: 3, resolutionRate: 0, sentiment: 'muyNegativo', lastActivity: 'hace 2 h' },
  { title: 'Confusión sobre disponibilidad de productos', incidents: 14, hallazgos: 4, resolutionRate: 9, sentiment: 'neutral', lastActivity: 'hace 3 h' },
  { title: 'Incidentes de seguridad en escuelas', incidents: 12, hallazgos: 2, resolutionRate: 4, sentiment: 'negativo', lastActivity: 'hace 5 h' },
  { title: 'Sentix · Configuración de Notificaciones', incidents: 11, hallazgos: 3, resolutionRate: 18, sentiment: 'neutral', lastActivity: 'hace 7 h' },
  { title: 'Demoras en la verificación de identidad', incidents: 9, hallazgos: 2, resolutionRate: 11, sentiment: 'negativo', lastActivity: 'hace 9 h' },
  { title: 'Errores en la facturación recurrente', incidents: 7, hallazgos: 2, resolutionRate: 0, sentiment: 'muyNegativo', lastActivity: 'hace 11 h' },
  { title: 'Solicitudes de nuevas integraciones CRM', incidents: 5, hallazgos: 1, resolutionRate: 20, sentiment: 'positivo', lastActivity: 'hace 1 día' },
]

// ---------------------------------------------------------------------------
// Client companies (Sentix customers) — Empresas widget / persona companies
// ---------------------------------------------------------------------------
export const clientCompanies = [
  { name: 'Finvex', domain: 'finvex.io', sector: 'Fintech', personas: 128, events: 1240 },
  { name: 'Cloudbit', domain: 'cloudbit.app', sector: 'B2B SaaS', personas: 96, events: 980 },
  { name: 'Naranja Pay', domain: 'naranja-pay.com', sector: 'Fintech', personas: 74, events: 712 },
  { name: 'Aurora Retail', domain: 'aurora-retail.com', sector: 'Enterprise', personas: 61, events: 540 },
  { name: 'Helix Health', domain: 'helixhealth.io', sector: 'Enterprise', personas: 43, events: 388 },
]

// ---------------------------------------------------------------------------
// Personas (customer risk profiles) — spec rows + extensions, rebranded
// ---------------------------------------------------------------------------
export const personas = [
  { name: 'Malena Figueroa', email: 'malena.figueroa@finvex.io', company: 'Finvex', churn: 'Medio', events: 33, sentiment: 'neutral', resolution: 15, lastActive: '23/2/2026' },
  { name: 'Fabricio Gutiérrez', email: 'fabricio.gutierrez@cloudbit.app', company: 'Cloudbit', churn: 'Alto', events: 27, sentiment: 'muyNegativo', resolution: 0, lastActive: 'hace 7 días' },
  { name: 'Daniel Velásquez', email: 'daniel.velasquez@naranja-pay.com', company: 'Naranja Pay', churn: 'Bajo', events: 25, sentiment: 'neutral', resolution: 16, lastActive: '2/3/2026' },
  { name: 'Carolina Suárez', email: 'carolina.suarez@aurora-retail.com', company: 'Aurora Retail', churn: 'Medio', events: 19, sentiment: 'negativo', resolution: 11, lastActive: 'hace 2 días' },
  { name: 'Lucas Romero', email: 'lucas.romero@helixhealth.io', company: 'Helix Health', churn: 'Bajo', events: 16, sentiment: 'positivo', resolution: 28, lastActive: 'hace 5 h' },
  { name: 'Sofía Medina', email: 'sofia.medina@finvex.io', company: 'Finvex', churn: 'Alto', events: 14, sentiment: 'negativo', resolution: 3, lastActive: 'hace 1 día' },
]

// ---------------------------------------------------------------------------
// Recent activity logs
// ---------------------------------------------------------------------------
export const recentHallazgos = [
  { title: 'Posible falta de documentación sobre productos no oficiales', tickets: 1, time: 'hace 36 min' },
  { title: 'Confusión sobre la disponibilidad de cartas en el mercado', tickets: 1, time: 'hace 36 min' },
  { title: 'Dificultad para encontrar información sobre cartas de MK', tickets: 1, time: 'hace 36 min' },
  { title: 'Dolor intenso por gripe', tickets: 1, time: 'hace 1 h' },
  { title: 'Deseo de un modo fácil en juegos Souls-Like', tickets: 1, time: 'hace 1 h' },
]

export const recentTemas = [
  { title: 'Consulta sobre productos coleccionables de videojuegos', time: 'hace 36 min' },
  { title: 'Salud y Bienestar', time: 'hace 1 h' },
  { title: 'Sugerencias de características para juegos de lucha', time: 'hace 1 h' },
  { title: 'Problemas de insolvencia y cancelaciones de vuelos', time: 'hace 1 h' },
]

export const recentListas = [
  { title: 'Clientes en riesgo de churn', meta: '24 personas' },
  { title: 'Fricción en onboarding', meta: '12 hallazgos' },
  { title: 'Feedback positivo Q1', meta: '8 hallazgos' },
]

export const recentPersonas = [
  { title: 'Malena Figueroa', meta: 'Finvex · 😐' },
  { title: 'Fabricio Gutiérrez', meta: 'Cloudbit · 😩' },
  { title: 'Daniel Velásquez', meta: 'Naranja Pay · 😐' },
]

export const recentEmpresas = [
  { title: 'Finvex', meta: 'Fintech · 128 personas' },
  { title: 'Cloudbit', meta: 'B2B SaaS · 96 personas' },
  { title: 'Naranja Pay', meta: 'Fintech · 74 personas' },
]

// ---------------------------------------------------------------------------
// Incident trend series (7-day smooth wave for the area chart)
// ---------------------------------------------------------------------------
export const trendSeries = [
  { day: 'Lun', incidentes: 38 },
  { day: 'Mar', incidentes: 52 },
  { day: 'Mié', incidentes: 44 },
  { day: 'Jue', incidentes: 67 },
  { day: 'Vie', incidentes: 58 },
  { day: 'Sáb', incidentes: 71 },
  { day: 'Dom', incidentes: 63 },
]

export const dateFilters = ['Hoy', 'Últimos 7 días', 'Últimos 30 días', 'Este trimestre']
