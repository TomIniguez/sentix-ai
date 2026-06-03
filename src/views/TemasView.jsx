import { useState } from 'react'
import { Layers, CheckCircle2, MessageSquare } from 'lucide-react'
import TopBar from '../components/TopBar'
import KpiCard from '../components/KpiCard'
import Panel from '../components/Panel'
import SentimentEmoji from '../components/SentimentEmoji'
import { kpisAllTime, temasFeed } from '../data/mockData'

function ResolutionBar({ rate }) {
  const color = rate >= 15 ? '#22C55E' : rate >= 7 ? '#F59E0B' : '#EF4444'
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/5">
        <div className="h-full rounded-full" style={{ width: `${Math.max(rate, 3)}%`, backgroundColor: color }} />
      </div>
      <span className="text-xs font-semibold" style={{ color }}>
        {rate}%
      </span>
    </div>
  )
}

export default function TemasView() {
  const [dateRange, setDateRange] = useState('Últimos 30 días')

  return (
    <div className="space-y-6">
      <TopBar title="Temas" dateRange={dateRange} onDateChange={setDateRange} />

      {/* KPIs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <KpiCard icon={Layers} label="Temas (histórico)" value={kpisAllTime.temas.toLocaleString('es')} accent="#3B82F6" sub="Clusters de hallazgos" />
        <KpiCard icon={CheckCircle2} label="Tasa de Resolución" value={`${kpisAllTime.resolucionGlobal}%`} accent="#F97316" sub="Global · cerrados/total" />
        <KpiCard icon={MessageSquare} label="Sentimiento promedio" value="😐" accent="#F59E0B" sub="Neutral con sesgo negativo" />
      </div>

      {/* Topics feed */}
      <Panel title="Temas Activos" subtitle="Agrupaciones de hallazgos por afinidad semántica" bodyClassName="p-0">
        <ul className="divide-y divide-hairline">
          {temasFeed.map((t, i) => (
            <li key={i} className="flex flex-col gap-3 px-5 py-4 transition-colors hover:bg-white/[0.025] sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brandFrom/15 to-brandTo/15 text-xs font-bold text-brandTo">
                  #{i + 1}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-medium text-slate-100">{t.title}</p>
                  <p className="text-xs text-faint">
                    {t.hallazgos} hallazgos · actualizado {t.lastActivity}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 pl-12 sm:pl-0">
                <div className="text-center">
                  <p className="text-xs text-faint">Incidentes</p>
                  <p className="font-semibold text-slate-200">{t.incidents}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs text-faint">Resolución</p>
                  <ResolutionBar rate={t.resolutionRate} />
                </div>
                <SentimentEmoji value={t.sentiment} size="sm" />
              </div>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  )
}
