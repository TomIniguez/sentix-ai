import { useState } from 'react'
import { Building2, Users, Activity, ExternalLink } from 'lucide-react'
import TopBar from '../components/TopBar'
import KpiCard from '../components/KpiCard'
import Panel from '../components/Panel'
import SentimentEmoji from '../components/SentimentEmoji'
import ChurnBadge from '../components/ChurnBadge'
import DonutChart from '../components/charts/DonutChart'
import { clientCompanies, sectorColors } from '../data/mockData'

export default function EmpresasView() {
  const [dateRange, setDateRange] = useState('Últimos 30 días')

  const totalPersonas = clientCompanies.reduce((s, c) => s + c.personas, 0)
  const totalEvents = clientCompanies.reduce((s, c) => s + c.events, 0)
  const atRisk = clientCompanies.filter((c) => c.churn === 'Alto').length

  // Sector distribution donut
  const bySector = Object.entries(
    clientCompanies.reduce((acc, c) => {
      acc[c.sector] = (acc[c.sector] || 0) + 1
      return acc
    }, {}),
  ).map(([name, value]) => ({ name, value }))

  const maxEvents = Math.max(...clientCompanies.map((c) => c.events))

  return (
    <div className="space-y-6">
      <TopBar title="Empresas" dateRange={dateRange} onDateChange={setDateRange} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        <KpiCard icon={Building2} label="Empresas" value={clientCompanies.length} accent="#3B82F6" sub="Cuentas activas" />
        <KpiCard icon={Users} label="Personas" value={totalPersonas} accent="#8B5CF6" sub="Contactos monitoreados" />
        <KpiCard icon={Activity} label="Eventos" value={totalEvents.toLocaleString('es')} accent="#10B981" sub="Interacciones totales" />
        <KpiCard icon={Building2} label="Riesgo alto" value={atRisk} accent="#EF4444" sub="Cuentas a retener" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Sector donut */}
        <Panel title="Distribución por Sector" subtitle="Cuentas por industria" className="lg:col-span-1">
          <DonutChart data={bySector} valueLabel="empresas" height={220} legend={false} />
          <ul className="mt-4 space-y-2">
            {bySector.map((s) => (
              <li key={s.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-content-soft">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: sectorColors[s.name] || '#64748B' }} />
                  {s.name}
                </span>
                <span className="text-faint">{s.value}</span>
              </li>
            ))}
          </ul>
        </Panel>

        {/* Companies table */}
        <Panel title="Cuentas" subtitle="Empresas cliente de Sentix AI" className="lg:col-span-2" bodyClassName="p-0">
          <div className="overflow-x-auto scroll-thin">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b border-hairline text-xs uppercase tracking-wide text-faint">
                  <th className="px-5 py-3 font-medium">Empresa</th>
                  <th className="px-5 py-3 font-medium">Sector</th>
                  <th className="px-5 py-3 font-medium">Personas</th>
                  <th className="px-5 py-3 font-medium">Eventos</th>
                  <th className="px-5 py-3 font-medium text-center">Sent.</th>
                  <th className="px-5 py-3 font-medium">Riesgo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {clientCompanies.map((c) => (
                  <tr key={c.domain} className="transition-colors hover:bg-overlay/[0.025]">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold text-content"
                          style={{ backgroundColor: `${sectorColors[c.sector] || '#64748B'}33`, color: sectorColors[c.sector] || '#94A3B8' }}
                        >
                          {c.name.slice(0, 2).toUpperCase()}
                        </span>
                        <div>
                          <p className="font-medium text-content">{c.name}</p>
                          <p className="inline-flex items-center gap-1 text-xs text-faint">
                            {c.domain} <ExternalLink size={11} />
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <span className="text-content-soft">{c.sector}</span>
                      <span className="ml-1.5 rounded-md bg-overlay/5 px-1.5 py-0.5 text-[10px] text-faint">{c.plan}</span>
                    </td>
                    <td className="px-5 py-3 text-content-soft">{c.personas}</td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 overflow-hidden rounded-full bg-overlay/5">
                          <div className="h-full rounded-full bg-accent" style={{ width: `${(c.events / maxEvents) * 100}%` }} />
                        </div>
                        <span className="text-content-soft">{c.events}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex justify-center">
                        <SentimentEmoji value={c.sentiment} size="sm" />
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <ChurnBadge level={c.churn} />
                    </td>
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
