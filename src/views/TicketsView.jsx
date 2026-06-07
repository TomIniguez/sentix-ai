import { useState, useMemo } from 'react'
import { Ticket, AlertTriangle, Frown, Thermometer } from 'lucide-react'
import TopBar from '../components/TopBar'
import KpiCard from '../components/KpiCard'
import Panel from '../components/Panel'
import Dropdown from '../components/Dropdown'
import SentimentEmoji from '../components/SentimentEmoji'
import TemperatureBar from '../components/TemperatureBar'
import { ticketsTable, sourceColors, TICKET_SOURCES } from '../data/mockData'

// CRM origin pill (Zendesk / HubSpot), colored by source.
function SourcePill({ source }) {
  const color = sourceColors[source] || '#64748B'
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap"
      style={{ color, backgroundColor: `${color}1A`, boxShadow: `inset 0 0 0 1px ${color}33` }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
      {source}
    </span>
  )
}

export default function TicketsView() {
  const [dateRange, setDateRange] = useState('Últimos 7 días')
  const [source, setSource] = useState('Todos')
  const [highRiskOnly, setHighRiskOnly] = useState(false)

  const total = ticketsTable.length
  const highRisk = ticketsTable.filter((t) => t.highRisk)
  const negativos = ticketsTable.filter((t) => t.sentiment === 'negativo' || t.sentiment === 'muyNegativo')
  const avgTemp = Math.round(ticketsTable.reduce((s, t) => s + t.temperatura, 0) / total)

  const rows = useMemo(
    () =>
      ticketsTable.filter(
        (t) => (source === 'Todos' || t.source === source) && (!highRiskOnly || t.highRisk),
      ),
    [source, highRiskOnly],
  )

  return (
    <div className="space-y-6">
      <TopBar title="Tickets" dateRange={dateRange} onDateChange={setDateRange} />

      {/* KPIs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard icon={Ticket} label="Tickets analizados" value={total} accent="#3B82F6" sub="Vía webhook (Zendesk · HubSpot)" />
        <KpiCard icon={AlertTriangle} label="Tickets de alto riesgo" value={highRisk.length} accent="#EF4444" sub="Requieren atención inmediata" />
        <KpiCard icon={Frown} label="Sentimiento negativo" value={`${Math.round((negativos.length / total) * 100)}%`} accent="#F97316" sub={`${negativos.length} de ${total} tickets`} />
        <KpiCard icon={Thermometer} label="Temperatura promedio" value={`${avgTemp}/100`} accent="#F59E0B" sub="Calor de la conversación" />
      </div>

      {/* High-risk alerts */}
      <Panel
        title="Alertas de tickets de alto riesgo"
        subtitle={`${highRisk.length} tickets con sentimiento negativo y alta temperatura`}
      >
        <ul className="space-y-2.5">
          {highRisk.map((t) => (
            <li
              key={t.id}
              className="flex items-center gap-3 rounded-xl border border-hairline bg-base/30 p-3"
              style={{ boxShadow: 'inset 3px 0 0 #EF4444' }}
            >
              <SentimentEmoji value={t.sentiment} size="sm" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-content">{t.subject}</p>
                <p className="text-xs text-faint">
                  {t.customer} · {t.company} · {t.id}
                </p>
              </div>
              <div className="hidden sm:block">
                <TemperatureBar value={t.temperatura} />
              </div>
              <SourcePill source={t.source} />
            </li>
          ))}
        </ul>
      </Panel>

      {/* Tickets table */}
      <Panel
        title="Bandeja de Tickets"
        subtitle={`${rows.length} tickets`}
        bodyClassName="p-0"
        action={
          <div className="flex items-center gap-2">
            <button
              onClick={() => setHighRiskOnly((v) => !v)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                highRiskOnly
                  ? 'bg-problemas/15 text-problemas shadow-[inset_0_0_0_1px_rgba(239,68,68,0.3)]'
                  : 'border border-hairline bg-card text-muted hover:text-content-soft'
              }`}
            >
              Solo alto riesgo
            </button>
            <div className="rounded-lg border border-hairline bg-card px-1.5 py-1">
              <Dropdown
                value={source}
                options={TICKET_SOURCES}
                onSelect={setSource}
                align="right"
                renderTrigger={(v) => (
                  <span className="inline-flex items-center gap-2 text-xs text-content-soft">Origen: {v}</span>
                )}
              />
            </div>
          </div>
        }
      >
        <div className="overflow-x-auto scroll-thin">
          <table className="w-full min-w-[1080px] text-left text-sm">
            <thead>
              <tr className="border-b border-hairline text-xs uppercase tracking-wide text-faint">
                <th className="px-5 py-3 font-medium">Ticket</th>
                <th className="px-5 py-3 font-medium">Cliente</th>
                <th className="px-5 py-3 font-medium">Origen</th>
                <th className="px-5 py-3 font-medium text-center">Sentimiento</th>
                <th className="px-5 py-3 font-medium">Temperatura</th>
                <th className="px-5 py-3 font-medium">Frases clave</th>
                <th className="px-5 py-3 font-medium">Hallazgo vinculado</th>
                <th className="px-5 py-3 font-medium whitespace-nowrap">Última actividad</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline">
              {rows.map((t) => (
                <tr key={t.id} className="transition-colors hover:bg-overlay/[0.025]">
                  <td className="max-w-[260px] px-5 py-3">
                    <div className="flex items-center gap-2">
                      {t.highRisk && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-problemas" title="Alto riesgo" />}
                      <p className="truncate font-medium text-content">{t.subject}</p>
                    </div>
                    <p className="text-xs text-faint">{t.id}</p>
                  </td>
                  <td className="px-5 py-3">
                    <p className="font-medium text-content-soft">{t.customer}</p>
                    <p className="text-xs text-faint">{t.company}</p>
                  </td>
                  <td className="px-5 py-3">
                    <SourcePill source={t.source} />
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex justify-center">
                      <SentimentEmoji value={t.sentiment} size="sm" />
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <TemperatureBar value={t.temperatura} />
                  </td>
                  <td className="max-w-[220px] px-5 py-3">
                    <div className="flex flex-wrap gap-1">
                      {t.keyPhrases.map((p) => (
                        <span key={p} className="rounded-md bg-overlay/5 px-2 py-0.5 text-xs text-muted">
                          {p}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="max-w-[200px] px-5 py-3">
                    <p className="truncate text-xs text-muted">{t.linkedHallazgo}</p>
                  </td>
                  <td className="whitespace-nowrap px-5 py-3 text-muted">{t.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  )
}
