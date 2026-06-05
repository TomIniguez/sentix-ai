import { useState } from 'react'
import { FileBarChart, Download, Clock, CheckCircle2, Heart, TrendingDown, AlertTriangle, Layers, PieChart } from 'lucide-react'
import TopBar from '../components/TopBar'
import Panel from '../components/Panel'
import { informes, informeHighlights } from '../data/mockData'

const typeIcon = {
  Sentimiento: Heart,
  Predicción: TrendingDown,
  Fricción: AlertTriangle,
  Operaciones: Layers,
  Hallazgos: PieChart,
}

export default function InformesView() {
  const [dateRange, setDateRange] = useState('Este trimestre')
  const [toast, setToast] = useState(null)

  const exportPdf = (title) => {
    setToast(`Generando PDF: ${title}…`)
    setTimeout(() => setToast(null), 2200)
  }

  return (
    <div className="space-y-6">
      <TopBar title="Informes" dateRange={dateRange} onDateChange={setDateRange} />

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
                    <h3 className="font-semibold text-content">{rep.title}</h3>
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
