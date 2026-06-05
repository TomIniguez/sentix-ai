import { useState } from 'react'
import { Lightbulb, Flame, Layers } from 'lucide-react'
import TopBar from '../components/TopBar'
import KpiCard from '../components/KpiCard'
import Panel from '../components/Panel'
import CategoryBadge from '../components/CategoryBadge'
import SentimentEmoji from '../components/SentimentEmoji'
import PriorityFlag from '../components/PriorityFlag'
import StatusDropdown from '../components/StatusDropdown'
import DonutChart from '../components/charts/DonutChart'
import { kpisAllTime, topHallazgos, hallazgosTable } from '../data/mockData'

export default function HallazgosView() {
  const [dateRange, setDateRange] = useState('Últimos 30 días')
  const [rows, setRows] = useState(hallazgosTable)

  function updateRow(id, patch) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)))
  }

  const pie = topHallazgos.map((h) => ({ name: h.title, value: h.incidents }))

  return (
    <div className="space-y-6">
      <TopBar title="Hallazgos" dateRange={dateRange} onDateChange={setDateRange} />

      {/* KPIs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <KpiCard icon={Lightbulb} label="Hallazgos (histórico)" value={kpisAllTime.hallazgos.toLocaleString('es')} accent="#8B5CF6" sub="Insights extraídos" />
        <KpiCard icon={Flame} label="Prioridad urgente" value={kpisAllTime.urgentes} accent="#EF4444" sub="Requieren atención" />
        <KpiCard icon={Layers} label="Temas vinculados" value={kpisAllTime.temas.toLocaleString('es')} accent="#3B82F6" sub="Clusters generados" />
      </div>

      {/* Big donut */}
      <Panel title="Top 10 Hallazgos" subtitle="Insights con mayor número de incidentes">
        <DonutChart data={pie} valueLabel="incidentes" height={280} maxLegend={10} />
      </Panel>

      {/* Data table */}
      <Panel title="Directorio de Hallazgos" subtitle={`${rows.length} insights`} bodyClassName="p-0">
        <div className="overflow-x-auto scroll-thin">
          <table className="w-full min-w-[920px] text-left text-sm">
            <thead>
              <tr className="border-b border-hairline text-xs uppercase tracking-wide text-faint">
                <th className="px-5 py-3 font-medium">Hallazgo</th>
                <th className="px-5 py-3 font-medium">Categoría</th>
                <th className="px-5 py-3 font-medium text-center">Incidentes</th>
                <th className="px-5 py-3 font-medium text-center">Sentimiento</th>
                <th className="px-5 py-3 font-medium">Prioridad</th>
                <th className="px-5 py-3 font-medium">Estado</th>
                <th className="px-5 py-3 font-medium whitespace-nowrap">Última actividad</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline">
              {rows.map((r) => (
                <tr key={r.id} className="transition-colors hover:bg-overlay/[0.025]">
                  <td className="max-w-[280px] px-5 py-3">
                    <p className="truncate font-medium text-content">{r.title}</p>
                    <p className="text-xs text-faint">{r.id}</p>
                  </td>
                  <td className="px-5 py-3">
                    <CategoryBadge category={r.category} />
                  </td>
                  <td className="px-5 py-3 text-center">
                    <span className="font-semibold text-content-soft">{r.incidents}</span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex justify-center">
                      <SentimentEmoji value={r.sentiment} size="sm" />
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <PriorityFlag value={r.priority} onChange={(p) => updateRow(r.id, { priority: p })} />
                  </td>
                  <td className="px-5 py-3">
                    <StatusDropdown value={r.status} onChange={(s) => updateRow(r.id, { status: s })} />
                  </td>
                  <td className="whitespace-nowrap px-5 py-3 text-muted">{r.lastActivity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  )
}
