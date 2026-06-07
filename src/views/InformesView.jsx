import { useState } from 'react'
import {
  FileBarChart, Download, Clock, CheckCircle2, Heart, TrendingDown, AlertTriangle,
  Layers, PieChart, MailCheck, Send, X, CalendarClock,
} from 'lucide-react'
import TopBar from '../components/TopBar'
import Panel from '../components/Panel'
import ScopeBadge from '../components/ScopeBadge'
import { informes, informeHighlights, weeklyReport, topHallazgos, currentUser } from '../data/mockData'

const typeIcon = {
  Sentimiento: Heart,
  Predicción: TrendingDown,
  Fricción: AlertTriangle,
  Operaciones: Layers,
  Hallazgos: PieChart,
}

// Mock of the automated weekly email as it would arrive in the CX lead's inbox.
function EmailPreview({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fade-in" onClick={onClose}>
      <div
        className="flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-stroke bg-elevated shadow-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-hairline px-5 py-3">
          <p className="text-sm font-semibold text-content">Vista previa del email</p>
          <button onClick={onClose} className="rounded-lg p-1 text-faint transition-colors hover:bg-overlay/5 hover:text-muted" aria-label="Cerrar">
            <X size={18} />
          </button>
        </div>

        <div className="overflow-y-auto scroll-thin">
          {/* Email headers */}
          <div className="border-b border-hairline px-5 py-4">
            <p className="text-base font-bold text-content">{weeklyReport.subject}</p>
            <p className="mt-1.5 text-xs text-faint">De: Sentix AI &lt;no-reply@sentix.ai&gt;</p>
            <p className="text-xs text-faint">Para: {weeklyReport.recipient} ({weeklyReport.recipientRole})</p>
            <p className="text-xs text-faint">Período: {weeklyReport.period}</p>
          </div>

          {/* Email body */}
          <div className="space-y-4 px-5 py-5">
            <p className="text-sm text-content-soft">Hola {currentUser.firstName},</p>
            <p className="text-sm text-muted">
              Este es tu resumen automático de la semana. Estos son los indicadores clave de la
              experiencia de tus clientes:
            </p>

            <div className="grid grid-cols-2 gap-3">
              {informeHighlights.map((h) => (
                <div key={h.label} className="rounded-xl border border-hairline bg-base/30 p-3">
                  <p className="text-xl font-bold text-content">{h.value}</p>
                  <p className="mt-0.5 text-xs text-faint">{h.label}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-faint">Top hallazgos de la semana</p>
              <ul className="space-y-2">
                {topHallazgos.slice(0, 3).map((h) => (
                  <li key={h.title} className="flex items-center justify-between gap-3 rounded-lg border border-hairline bg-base/20 px-3 py-2">
                    <span className="truncate text-sm text-content-soft">{h.title}</span>
                    <span className="shrink-0 text-xs font-semibold text-muted">{h.incidents} incidentes</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-faint">
              Generado automáticamente por Sentix AI · {weeklyReport.cadence}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function InformesView() {
  const [dateRange, setDateRange] = useState('Este trimestre')
  const [toast, setToast] = useState(null)
  const [active, setActive] = useState(weeklyReport.active)
  const [preview, setPreview] = useState(false)

  const exportPdf = (title) => {
    setToast(`Generando PDF: ${title}…`)
    setTimeout(() => setToast(null), 2200)
  }

  return (
    <div className="space-y-6">
      <TopBar title="Informes" dateRange={dateRange} onDateChange={setDateRange} />

      {/* Weekly automated email report (MVP) */}
      <Panel title="Reporte semanal automatizado" subtitle="Enviado por email al responsable de CX">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: 'rgba(16,185,129,0.1)', color: '#10B981', boxShadow: 'inset 0 0 0 1px rgba(16,185,129,0.2)' }}
            >
              <MailCheck size={20} />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-content">{weeklyReport.subject}</p>
                <span
                  className="rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide"
                  style={{
                    color: active ? '#10B981' : '#F59E0B',
                    backgroundColor: active ? 'rgba(16,185,129,0.12)' : 'rgba(245,158,11,0.12)',
                  }}
                >
                  {active ? 'Activo' : 'Pausado'}
                </span>
              </div>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                <CalendarClock size={14} className="text-faint" />
                {weeklyReport.cadence} · Canal: {weeklyReport.channel}
              </p>
              <p className="mt-0.5 text-xs text-faint">
                Para: {weeklyReport.recipient} ({weeklyReport.recipientRole}) · Próximo envío: {weeklyReport.nextSend} · Último: {weeklyReport.lastSent}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActive((a) => !a)}
              className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors"
              style={{ backgroundColor: active ? '#10B981' : 'rgba(148,163,184,0.4)' }}
              aria-label="Activar/pausar reporte semanal"
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${active ? 'translate-x-[22px]' : 'translate-x-[2px]'}`}
              />
            </button>
            <button
              onClick={() => setPreview(true)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-brandFrom to-brandTo px-3.5 py-2.5 text-sm font-semibold text-white shadow-glow transition-opacity hover:opacity-90"
            >
              <Send size={15} />
              Ver vista previa del email
            </button>
          </div>
        </div>
      </Panel>

      {/* Executive highlights */}
      <Panel title="Resumen Ejecutivo" subtitle="Indicadores clave del período">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {informeHighlights.map((h) => (
            <div key={h.label} className="rounded-xl border border-hairline bg-base/30 p-4">
              <p className="text-2xl font-bold text-content">{h.value}</p>
              <p className="mt-1 text-xs text-faint">{h.label}</p>
            </div>
          ))}
        </div>
      </Panel>

      {/* Report cards */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {informes.map((rep) => {
          const Icon = typeIcon[rep.type] || FileBarChart
          const ready = rep.status === 'Listo'
          return (
            <div key={rep.title} className="flex flex-col rounded-2xl border border-hairline bg-card p-5 shadow-card transition-colors hover:border-stroke">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${rep.accent}1A`, color: rep.accent, boxShadow: `inset 0 0 0 1px ${rep.accent}33` }}
                  >
                    <Icon size={20} />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-content">{rep.title}</h3>
                      {rep.type === 'Predicción' && <ScopeBadge />}
                    </div>
                    <p className="text-xs text-faint">{rep.type} · {rep.period}</p>
                  </div>
                </div>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
                    ready ? 'text-accent' : 'text-amber-400'
                  }`}
                  style={{ backgroundColor: ready ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)' }}
                >
                  {ready ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                  {rep.status}
                </span>
              </div>

              <div className="mt-4 flex items-end justify-between border-t border-hairline pt-4">
                <div>
                  <p className="text-xs text-faint">{rep.metricLabel}</p>
                  <p className="text-lg font-bold text-content">{rep.metric}</p>
                </div>
                <button
                  onClick={() => exportPdf(rep.title)}
                  disabled={!ready}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-stroke bg-base/40 px-3 py-2 text-sm font-medium text-content-soft transition-colors hover:bg-overlay/5 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Download size={15} />
                  Exportar PDF
                </button>
              </div>
              <p className="mt-3 text-xs text-faint">Generado {rep.generated}</p>
            </div>
          )
        })}
      </div>

      {/* Email preview modal */}
      {preview && <EmailPreview onClose={() => setPreview(false)} />}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl border border-stroke bg-elevated px-4 py-3 text-sm text-content shadow-card animate-fade-in">
          <Download size={16} className="text-brandTo" />
          {toast}
        </div>
      )}
    </div>
  )
}
