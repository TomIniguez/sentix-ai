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
// Key phrases (frases clave) — recurring expressions extracted from tickets
// ---------------------------------------------------------------------------
export const keyPhrases = [
  { phrase: 'no puedo conectarme', count: 47, sentiment: 'muyNegativo' },
  { phrase: 'sin respuesta del soporte', count: 39, sentiment: 'negativo' },
  { phrase: 'error al iniciar sesión', count: 31, sentiment: 'muyNegativo' },
  { phrase: 'la VPN se desconecta', count: 28, sentiment: 'negativo' },
  { phrase: 'verificación de identidad', count: 24, sentiment: 'negativo' },
  { phrase: 'cobro duplicado', count: 19, sentiment: 'muyNegativo' },
  { phrase: 'cómo configuro', count: 17, sentiment: 'neutral' },
  { phrase: 'dashboard lento', count: 14, sentiment: 'negativo' },
  { phrase: 'privacidad de datos', count: 11, sentiment: 'neutral' },
  { phrase: 'fácil de usar', count: 9, sentiment: 'positivo' },
  { phrase: 'rápida resolución', count: 6, sentiment: 'positivo' },
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
// Tickets (raw CRM input) — MVP: per-ticket sentiment + conversation temperature
// Ingested via webhook from Zendesk / HubSpot; each ladders up to a Hallazgo.
// `temperatura` is a 0–100 "heat" of the conversation; highRisk → alto-riesgo alert.
// ---------------------------------------------------------------------------
export const sourceColors = {
  Zendesk: '#03363D',
  HubSpot: '#FF7A59',
}

export const ticketsTable = [
  { id: 'TK-3187', subject: 'No puedo conectarme a la VPN desde Windows', customer: 'Sofía Medina', company: 'Finvex', source: 'Zendesk', sentiment: 'muyNegativo', temperatura: 92, highRisk: true, keyPhrases: ['no puedo conectarme', 'VPN caída', 'urgente'], linkedHallazgo: 'Confusión sobre cómo conectarse a la VPN', time: 'hace 8 min' },
  { id: 'TK-3186', subject: 'La VPN se desconecta cada 5 minutos', customer: 'Daniel Velásquez', company: 'Naranja Pay', source: 'HubSpot', sentiment: 'negativo', temperatura: 74, highRisk: true, keyPhrases: ['se desconecta', 'VPN inestable'], linkedHallazgo: 'Confusión sobre cómo conectarse a la VPN', time: 'hace 21 min' },
  { id: 'TK-3185', subject: '¿Cómo configuro la VPN en una Mac?', customer: 'Lucas Romero', company: 'Helix Health', source: 'Zendesk', sentiment: 'neutral', temperatura: 38, highRisk: false, keyPhrases: ['cómo configuro', 'instrucciones VPN'], linkedHallazgo: 'Confusión sobre cómo conectarse a la VPN', time: 'hace 35 min' },
  { id: 'TK-3184', subject: 'Llevo 3 días sin respuesta del soporte', customer: 'Fabricio Gutiérrez', company: 'Cloudbit', source: 'HubSpot', sentiment: 'muyNegativo', temperatura: 96, highRisk: true, keyPhrases: ['sin respuesta', '3 días', 'cancelar'], linkedHallazgo: 'Falta de respuesta efectiva del soporte', time: 'hace 42 min' },
  { id: 'TK-3183', subject: 'El soporte no resolvió mi problema', customer: 'Carolina Suárez', company: 'Aurora Retail', source: 'Zendesk', sentiment: 'negativo', temperatura: 68, highRisk: false, keyPhrases: ['no resolvió', 'reabrir ticket'], linkedHallazgo: 'Falta de respuesta efectiva del soporte', time: 'hace 1 h' },
  { id: 'TK-3182', subject: 'La verificación de identidad falla una y otra vez', customer: 'Sofía Medina', company: 'Finvex', source: 'HubSpot', sentiment: 'muyNegativo', temperatura: 88, highRisk: true, keyPhrases: ['verificación falla', 'KYC', 'bloqueado'], linkedHallazgo: 'Demoras en la verificación de identidad (KYC)', time: 'hace 1 h' },
  { id: 'TK-3181', subject: 'KYC tardó más de 48 horas', customer: 'Malena Figueroa', company: 'Finvex', source: 'Zendesk', sentiment: 'negativo', temperatura: 61, highRisk: false, keyPhrases: ['KYC lento', '48 horas'], linkedHallazgo: 'Demoras en la verificación de identidad (KYC)', time: 'hace 2 h' },
  { id: 'TK-3180', subject: 'Error 500 al iniciar sesión', customer: 'Fabricio Gutiérrez', company: 'Cloudbit', source: 'Zendesk', sentiment: 'muyNegativo', temperatura: 90, highRisk: true, keyPhrases: ['error al iniciar sesión', 'error 500'], linkedHallazgo: 'Errores intermitentes al iniciar sesión', time: 'hace 2 h' },
  { id: 'TK-3179', subject: 'Me cobraron dos veces la suscripción', customer: 'Carolina Suárez', company: 'Aurora Retail', source: 'HubSpot', sentiment: 'muyNegativo', temperatura: 85, highRisk: true, keyPhrases: ['cobro duplicado', 'facturación', 'reembolso'], linkedHallazgo: 'Errores en la facturación recurrente', time: 'hace 3 h' },
  { id: 'TK-3178', subject: 'No entiendo cómo cambiar las notificaciones', customer: 'Daniel Velásquez', company: 'Naranja Pay', source: 'Zendesk', sentiment: 'neutral', temperatura: 33, highRisk: false, keyPhrases: ['configurar notificaciones', 'no entiendo'], linkedHallazgo: 'Confusión sobre la configuración de notificaciones', time: 'hace 4 h' },
  { id: 'TK-3177', subject: 'El dashboard tarda muchísimo en cargar', customer: 'Malena Figueroa', company: 'Finvex', source: 'HubSpot', sentiment: 'negativo', temperatura: 57, highRisk: false, keyPhrases: ['dashboard lento', 'tarda en cargar'], linkedHallazgo: 'Dashboard tarda en cargar con muchos tickets', time: 'hace 5 h' },
  { id: 'TK-3176', subject: '¿Guardan mis datos de forma segura?', customer: 'Lucas Romero', company: 'Helix Health', source: 'Zendesk', sentiment: 'neutral', temperatura: 45, highRisk: false, keyPhrases: ['privacidad de datos', 'seguridad'], linkedHallazgo: 'Preocupaciones sobre privacidad de datos', time: 'hace 7 h' },
  { id: 'TK-3175', subject: '¡El nuevo flujo de pago es excelente!', customer: 'Lucas Romero', company: 'Helix Health', source: 'HubSpot', sentiment: 'muyPositivo', temperatura: 12, highRisk: false, keyPhrases: ['excelente', 'flujo de pago', 'fácil de usar'], linkedHallazgo: 'Buena experiencia con el nuevo flujo de pago', time: 'hace 9 h' },
  { id: 'TK-3174', subject: 'Gracias por resolver mi caso tan rápido', customer: 'Daniel Velásquez', company: 'Naranja Pay', source: 'Zendesk', sentiment: 'positivo', temperatura: 18, highRisk: false, keyPhrases: ['gracias', 'rápida resolución'], linkedHallazgo: 'Agradecimiento por la rápida resolución del caso', time: 'hace 12 h' },
]

export const TICKET_SOURCES = ['Todos', 'Zendesk', 'HubSpot']

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
  { name: 'Finvex', domain: 'finvex.io', sector: 'Fintech', personas: 128, events: 1240, churn: 'Alto', sentiment: 'negativo', resolution: 9, plan: 'Enterprise' },
  { name: 'Cloudbit', domain: 'cloudbit.app', sector: 'B2B SaaS', personas: 96, events: 980, churn: 'Medio', sentiment: 'neutral', resolution: 14, plan: 'Growth' },
  { name: 'Naranja Pay', domain: 'naranja-pay.com', sector: 'Fintech', personas: 74, events: 712, churn: 'Medio', sentiment: 'neutral', resolution: 12, plan: 'Enterprise' },
  { name: 'Aurora Retail', domain: 'aurora-retail.com', sector: 'Enterprise', personas: 61, events: 540, churn: 'Bajo', sentiment: 'positivo', resolution: 22, plan: 'Enterprise' },
  { name: 'Helix Health', domain: 'helixhealth.io', sector: 'Enterprise', personas: 43, events: 388, churn: 'Bajo', sentiment: 'positivo', resolution: 26, plan: 'Growth' },
  { name: 'Tienda Norte', domain: 'tienda-norte.com', sector: 'B2B SaaS', personas: 31, events: 274, churn: 'Alto', sentiment: 'muyNegativo', resolution: 4, plan: 'Starter' },
]

export const sectorColors = {
  Fintech: '#3B82F6',
  'B2B SaaS': '#8B5CF6',
  Enterprise: '#10B981',
}

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

// ---------------------------------------------------------------------------
// Listas — saved segments of personas / hallazgos
// ---------------------------------------------------------------------------
export const listas = [
  { name: 'Clientes en riesgo de churn', type: 'Personas', count: 24, color: '#EF4444', description: 'Personas con riesgo de abandono Alto en los últimos 30 días.', owner: 'Tomás Iñiguez', updated: 'hace 2 h', pinned: true },
  { name: 'Fricción en onboarding', type: 'Hallazgos', count: 12, color: '#F97316', description: 'Hallazgos de categoría Fricción detectados durante el alta de usuarios.', owner: 'Tomás Iñiguez', updated: 'hace 5 h', pinned: true },
  { name: 'Feedback positivo Q1', type: 'Hallazgos', count: 8, color: '#22C55E', description: 'Comentarios positivos para destacar en el reporte trimestral.', owner: 'Malena Rivas', updated: 'hace 1 día', pinned: false },
  { name: 'Cuentas Enterprise clave', type: 'Empresas', count: 5, color: '#3B82F6', description: 'Empresas Enterprise con mayor volumen de eventos a monitorear.', owner: 'Tomás Iñiguez', updated: 'hace 2 días', pinned: false },
  { name: 'Problemas de facturación', type: 'Hallazgos', count: 9, color: '#8B5CF6', description: 'Hallazgos relacionados con errores y demoras en la facturación recurrente.', owner: 'Daniel Soto', updated: 'hace 3 días', pinned: false },
  { name: 'Promotores NPS', type: 'Personas', count: 17, color: '#10B981', description: 'Personas con sentimiento positivo y alta tasa de resolución.', owner: 'Malena Rivas', updated: 'hace 4 días', pinned: false },
]

// ---------------------------------------------------------------------------
// Investigación — Laboratorio de Clientes IA (synthetic users / survey sim)
// ---------------------------------------------------------------------------
export const simulationScenario = {
  surveyType: 'CSAT',
  channel: 'Email',
  audience: 'Clientes activos · Fintech',
  question: '¿Qué tan satisfecho estás con la rapidez de nuestro soporte tras tu último ticket?',
  sampleSize: 1200,
}

// Predicted outcome of running the survey against synthetic users
export const simulationResults = {
  predictedCsat: 3.4, // out of 5
  predictedResponseRate: 41, // %
  fatigueRisk: 'Medio',
  sentimentImpact: 'neutral',
  // predicted distribution of 1-5 star responses
  distribution: [
    { score: '1★', value: 12 },
    { score: '2★', value: 18 },
    { score: '3★', value: 27 },
    { score: '4★', value: 28 },
    { score: '5★', value: 15 },
  ],
}

export const syntheticUsers = [
  { name: 'Perfil — Detractor sensible', segment: 'Fintech · Churn alto', reaction: 'muyNegativo', score: 2, note: 'Percibe la pregunta como genérica tras una mala experiencia reciente.' },
  { name: 'Perfil — Usuario neutral', segment: 'B2B SaaS · Activo', reaction: 'neutral', score: 3, note: 'Responde si el correo llega fuera del horario laboral.' },
  { name: 'Perfil — Promotor leal', segment: 'Enterprise · Bajo riesgo', reaction: 'positivo', score: 5, note: 'Alta probabilidad de responder y recomendar el servicio.' },
  { name: 'Perfil — Ocupado/saturado', segment: 'Fintech · Alta actividad', reaction: 'negativo', score: 2, note: 'Riesgo de survey fatigue: recibió 3 encuestas este mes.' },
]

export const simulationHistory = [
  { name: 'CSAT post-resolución · v3', date: '2026-06-04', csat: 3.4, responseRate: 41, status: 'Simulado' },
  { name: 'NPS trimestral · Enterprise', date: '2026-05-28', csat: 4.1, responseRate: 53, status: 'Enviado' },
  { name: 'CSAT onboarding · Fintech', date: '2026-05-19', csat: 2.9, responseRate: 34, status: 'Descartado' },
]

// ---------------------------------------------------------------------------
// Informes — executive reports
// ---------------------------------------------------------------------------
// MVP: automated weekly report emailed to the CX lead.
export const weeklyReport = {
  active: true,
  cadence: 'Cada lunes · 09:00',
  channel: 'Email',
  recipient: 'tomas.iniguez@sentix.ai',
  recipientRole: 'Responsable de CX',
  nextSend: 'Lun 09/06/2026',
  lastSent: 'Lun 02/06/2026',
  subject: 'Tu resumen semanal de Sentix AI',
  period: '26 may – 1 jun 2026',
}

export const informes = [
  { title: 'Resumen Ejecutivo de Sentimiento', type: 'Sentimiento', period: 'Mayo 2026', generated: 'hace 2 días', status: 'Listo', metricLabel: 'Sentimiento promedio', metric: '😐 Neutral', accent: '#F59E0B' },
  { title: 'Predicción de Abandono (Churn)', type: 'Predicción', period: 'Q2 2026', generated: 'hace 3 días', status: 'Listo', metricLabel: 'Cuentas en riesgo alto', metric: '2 empresas', accent: '#EF4444' },
  { title: 'Análisis de Fricción en Soporte', type: 'Fricción', period: 'Últimos 30 días', generated: 'hace 5 días', status: 'Listo', metricLabel: 'Hallazgos de fricción', metric: '92 incidentes', accent: '#F97316' },
  { title: 'Tasa de Resolución por Tema', type: 'Operaciones', period: 'Q2 2026', generated: 'hace 1 semana', status: 'Listo', metricLabel: 'Resolución global', metric: '6.7%', accent: '#10B981' },
  { title: 'Reporte de Categorías de Hallazgos', type: 'Hallazgos', period: 'Mayo 2026', generated: 'Programado', status: 'Programado', metricLabel: 'Próxima generación', metric: '01/07/2026', accent: '#8B5CF6' },
]

export const informeHighlights = [
  { label: 'Hallazgos analizados', value: '3.187' },
  { label: 'Temas detectados', value: '1.882' },
  { label: 'Personas monitoreadas', value: '433' },
  { label: 'Resolución global', value: '6.7%' },
]

// ---------------------------------------------------------------------------
// Conexiones — CRM / support integrations (Mi Empresa › Conexiones)
// ---------------------------------------------------------------------------
// Zendesk + HubSpot are the two CRMs included in the MVP (webhook integration).
export const integrations = [
  { name: 'Zendesk', category: 'Plataforma de soporte al cliente', description: 'Integración vía webhook: sincroniza tickets de soporte y comentarios de clientes en tiempo real para analizar sentimiento y generar hallazgos.', status: 'connected', connectedTo: 'sentix-demo.zendesk.com', color: '#03363D', icon: 'Zendesk', mvp: true },
  { name: 'HubSpot', category: 'CRM y Service Hub', description: 'Integración vía webhook: sincroniza tickets y conversaciones de HubSpot Service Hub para analizar sentimiento y detectar tickets de alto riesgo.', status: 'connected', connectedTo: 'sentix-demo.hubspot.com', color: '#FF7A59', icon: 'HubSpot', mvp: true },
  { name: 'Intercom', category: 'Plataforma de mensajería al cliente', description: 'Sincroniza las conversaciones de clientes desde Intercom para analizar e identificar oportunidades de mejora de tu producto y servicio.', status: 'available', color: '#1F8DED', icon: 'Intercom' },
  { name: 'Gorgias', category: 'Soporte al cliente para e-commerce', description: 'Conecta tu soporte al cliente de e-commerce para analizar interacciones con clientes y mejorar la calidad del servicio.', status: 'available', color: '#1B1B3A', icon: 'Gorgias' },
  { name: 'Freshdesk', category: 'Soporte al cliente y tickets', description: 'Conecte su cuenta de Freshdesk para sincronizar tickets y generar insights de los datos de soporte al cliente.', status: 'available', color: '#25C16F', icon: 'Freshdesk' },
  { name: 'Freshchat', category: 'Mensajería al cliente y chat en vivo', description: 'Conecte su cuenta de Freshchat para sincronizar conversaciones y datos de clientes para mejores insights de soporte.', status: 'available', color: '#3A9E4A', icon: 'Freshchat' },
]

// ---------------------------------------------------------------------------
// System / settings (Configuración)
// ---------------------------------------------------------------------------
export const appVersion = '1.9.2'

export const whatsNew = [
  'Una de nuestras actualizaciones más grandes hasta la fecha ya está aquí.',
  'Las Pruebas de Hipótesis salen de beta y son ilimitadas en los planes Starter, Pro y Scale.',
  'Nuevo Laboratorio de Clientes IA con usuarios sintéticos para simular encuestas CSAT/NPS.',
  'Mejoras de rendimiento en los paneles de Hallazgos y Temas.',
]

export const currentUser = {
  firstName: 'Tomás',
  lastName: 'Iñiguez',
  email: 'tomas.iniguez@sentix.ai',
  initials: 'TI',
}
