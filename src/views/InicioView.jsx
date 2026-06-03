import { useState } from 'react'
import { Lightbulb, Layers, Mic, Smile, ListChecks, UserRound, Building2, TrendingUp } from 'lucide-react'
import TopBar from '../components/TopBar'
import KpiCard from '../components/KpiCard'
import Panel from '../components/Panel'
import ActivityList from '../components/ActivityList'
import MiniWidget from '../components/MiniWidget'
import IncidentTrendChart from '../components/charts/IncidentTrendChart'
import CategoryBarChart from '../components/charts/CategoryBarChart'
import DonutChart from '../components/charts/DonutChart'
import {
  kpisHome,
  topHallazgos,
  topTemas,
  recentHallazgos,
  recentTemas,
  recentListas,
  recentPersonas,
  recentEmpresas,
  sentimentMap,
} from '../data/mockData'

export default function InicioView({ onNavigate }) {
  const [dateRange, setDateRange] = useState('Últimos 7 días')
  const sentiment = sentimentMap[kpisHome.sentimiento]

  const hallazgosPie = topHallazgos.map((h) => ({ name: h.title, value: h.incidents }))
  const temasPie = topTemas.map((t) => ({ name: t.title, value: t.count }))

  return (
    <div className="space-y-6">
      <TopBar greeting="Hola Tomás! 👋" dateRange={dateRange} onDateChange={setDateRange} />

      {/* Trend + KPIs */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Panel
          title="Tendencia de Incidentes"
          subtitle="Tickets analizados · últimos 7 días"
          className="xl:col-span-2"
          action={
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
              <TrendingUp size={13} /> +12.4%
            </span>
          }
        >
          <IncidentTrendChart />
        </Panel>

        <div className="grid grid-cols-2 gap-4">
          <KpiCard icon={Lightbulb} label="Hallazgos" value={kpisHome.hallazgos} accent="#8B5CF6" sub="Insights detectados" />
          <KpiCard icon={Layers} label="Temas" value={kpisHome.temas} accent="#3B82F6" sub="Clusters activos" />
          <KpiCard icon={Mic} label="Entrevistas" value={kpisHome.entrevistas} accent="#10B981" sub="Programadas" />
          <KpiCard icon={Smile} label="Sentimiento" value={sentiment.emoji} accent={sentiment.color} sub="Promedio: Neutral" />
        </div>
      </div>

      {/* Categories */}
      <Panel title="Categorías de Hallazgos" subtitle="Distribución por tipo de insight">
        <CategoryBarChart />
      </Panel>

      {/* Two donuts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Panel title="Top 10 Hallazgos" subtitle="Por número de incidentes">
          <DonutChart data={hallazgosPie} valueLabel="incidentes" />
        </Panel>
        <Panel title="Top 10 Temas" subtitle="Por volumen de conversaciones">
          <DonutChart data={temasPie} valueLabel="conversaciones" />
        </Panel>
      </div>

      {/* Recent activity */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Panel
          title="Hallazgos Recientes"
          action={
            <button onClick={() => onNavigate('hallazgos')} className="text-xs font-medium text-brandTo hover:underline">
              Ver todos
            </button>
          }
        >
          <ActivityList items={recentHallazgos} icon="doc" />
        </Panel>
        <Panel
          title="Temas Recientes"
          action={
            <button onClick={() => onNavigate('temas')} className="text-xs font-medium text-brandTo hover:underline">
              Ver todos
            </button>
          }
        >
          <ActivityList items={recentTemas} icon="hash" />
        </Panel>
      </div>

      {/* Mini widgets */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <MiniWidget title="Listas Recientes" icon={ListChecks} accent="#10B981" items={recentListas} onOpen={() => onNavigate('listas')} />
        <MiniWidget title="Personas Recientes" icon={UserRound} accent="#8B5CF6" items={recentPersonas} onOpen={() => onNavigate('personas')} />
        <MiniWidget title="Empresas Recientes" icon={Building2} accent="#3B82F6" items={recentEmpresas} onOpen={() => onNavigate('empresas')} />
      </div>
    </div>
  )
}
