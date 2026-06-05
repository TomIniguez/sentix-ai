import { useState } from 'react'
import { Users, AlertTriangle, Activity } from 'lucide-react'
import TopBar from '../components/TopBar'
import KpiCard from '../components/KpiCard'
import Panel from '../components/Panel'
import SentimentEmoji from '../components/SentimentEmoji'
import ChurnBadge from '../components/ChurnBadge'
import DonutChart from '../components/charts/DonutChart'
import { personas } from '../data/mockData'

export default function PersonasView() {
  const [dateRange, setDateRange] = useState('Últimos 30 días')

  const totalEvents = personas.reduce((s, p) => s + p.events, 0)
  const atRisk = personas.filter((p) => p.churn === 'Alto').length
  const avgResolution = Math.round(personas.reduce((s, p) => s + p.resolution, 0) / personas.length)
  const eventShare = personas.map((p) => ({ name: p.name, value: p.events }))

  return (
    <div className="space-y-6">
      <TopBar title="Personas" dateRange={dateRange} onDateChange={setDateRange} />

      {/* KPIs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <KpiCard icon={Users} label="Personas" value={personas.length} accent="#8B5CF6" sub="Clientes monitoreados" />
        <KpiCard icon={AlertTriangle} label="Riesgo alto de abandono" value={atRisk} accent="#EF4444" sub="Requieren retención" />
        <KpiCard icon={Activity} label="Resolución promedio" value={`${avgResolution}%`} accent="#10B981" sub="Casos cerrados" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Event share donut */}
        <Panel title="Distribución de Eventos" subtitle="Participación por persona" className="lg:col-span-1">
          <DonutChart data={eventShare} valueLabel="eventos" height={220} legend={false} />
          <ul className="mt-4 space-y-2">
            {personas.map((p, i) => (
              <li key={i} className="flex items-center justify-between text-sm">
                <span className="truncate text-content-soft">{p.name}</span>
                <span className="text-faint">{Math.round((p.events / totalEvents) * 100)}%</span>
              </li>
            ))}
          </ul>
        </Panel>

        {/* Risk table */}
        <Panel title="Riesgo de Abandono" subtitle="Perfil de clientes y churn" className="lg:col-span-2" bodyClassName="p-0">
          <div className="overflow-x-auto scroll-thin">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead>
                <tr className="border-b border-hairline text-xs uppercase tracking-wide text-faint">
                  <th className="px-5 py-3 font-medium">Persona</th>
                  <th className="px-5 py-3 font-medium text-center">Eventos</th>
                  <th className="px-5 py-3 font-medium text-center">Sentimiento</th>
                  <th className="px-5 py-3 font-medium text-center">Resolución</th>
                  <th className="px-5 py-3 font-medium">Riesgo</th>
                  <th className="px-5 py-3 font-medium whitespace-nowrap">Última actividad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {personas.map((p, i) => (
                  <tr key={i} className="transition-colors hover:bg-overlay/[0.025]">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brandFrom/30 to-brandTo/30 text-xs font-semibold text-content">
                          {p.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                        </span>
                        <div className="min-w-0">
                          <p className="truncate font-medium text-content">{p.name}</p>
                          <p className="truncate text-xs text-faint">{p.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-center font-semibold text-content-soft">{p.events}</td>
                    <td className="px-5 py-3">
                      <div className="flex justify-center">
                        <SentimentEmoji value={p.sentiment} size="sm" />
                      </div>
                    </td>
                    <td className="px-5 py-3 text-center text-content-soft">{p.resolution}%</td>
                    <td className="px-5 py-3">
                      <ChurnBadge level={p.churn} />
                    </td>
                    <td className="whitespace-nowrap px-5 py-3 text-muted">{p.lastActive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    </div>
  )
}
