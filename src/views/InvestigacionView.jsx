import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { FlaskConical, Sparkles, Play, Star, Gauge, MailCheck, AlertTriangle, RotateCcw } from 'lucide-react'
import TopBar from '../components/TopBar'
import KpiCard from '../components/KpiCard'
import Panel from '../components/Panel'
import SentimentEmoji from '../components/SentimentEmoji'
import useChartColors from '../components/charts/useChartColors'
import { simulationScenario, simulationResults, syntheticUsers, simulationHistory } from '../data/mockData'

const fatigueColor = { Bajo: '#22C55E', Medio: '#F59E0B', Alto: '#EF4444' }
const statusColor = { Simulado: '#3B82F6', Enviado: '#22C55E', Descartado: '#64748B' }

export default function InvestigacionView() {
  const [dateRange, setDateRange] = useState('Este trimestre')
  const [simulated, setSimulated] = useState(false)
  const [running, setRunning] = useState(false)

  const run = () => {
    setRunning(true)
    setSimulated(false)
    // Simulated async "compute" — purely cosmetic for the prototype.
    setTimeout(() => {
      setRunning(false)
      setSimulated(true)
    }, 900)
  }

  const r = simulationResults
  const cc = useChartColors()

  return (
    <div className="space-y-6">
      <TopBar title="Investigación" dateRange={dateRange} onDateChange={setDateRange} />

      {/* Hero / concept banner */}
      <div className="overflow-hidden rounded-2xl border border-hairline bg-gradient-to-br from-brandFrom/15 via-card to-brandTo/15 p-6 shadow-card">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brandFrom to-brandTo shadow-glow">
            <FlaskConical size={24} className="text-white" />
          </span>
          <div>
            <h2 className="flex items-center gap-2 text-lg font-bold text-content">
              Laboratorio de Clientes IA
              <span className="inline-flex items-center gap-1 rounded-full bg-overlay/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-brandTo">
                <Sparkles size={11} /> Beta
              </span>
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">
              Simulá la reacción de tus clientes con <span className="text-content-soft">usuarios sintéticos</span> antes
              de enviar una encuesta CSAT o NPS. Sentix AI estima la tasa de respuesta, el puntaje esperado y el riesgo
              de <span className="text-content-soft">survey fatigue</span> para optimizar la redacción y el momento de envío.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Scenario / draft survey */}
        <Panel title="Escenario de Encuesta" subtitle="Borrador a evaluar">
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-faint">Tipo</dt>
              <dd className="font-medium text-content-soft">{simulationScenario.surveyType}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-faint">Canal</dt>
              <dd className="font-medium text-content-soft">{simulationScenario.channel}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-faint">Audiencia</dt>
              <dd className="font-medium text-content-soft">{simulationScenario.audience}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-faint">Muestra sintética</dt>
              <dd className="font-medium text-content-soft">{simulationScenario.sampleSize.toLocaleString('es')} usuarios</dd>
            </div>
          </dl>

          <div className="mt-4 rounded-xl border border-stroke bg-base/40 p-4">
            <p className="text-xs uppercase tracking-wide text-faint">Pregunta</p>
            <p className="mt-1.5 text-sm italic text-content-soft">“{simulationScenario.question}”</p>
          </div>

          <button
            onClick={run}
            disabled={running}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brandFrom to-brandTo px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {running ? (
              <>
                <RotateCcw size={16} className="animate-spin" /> Simulando…
              </>
            ) : simulated ? (
              <>
                <Play size={16} /> Volver a simular
              </>
            ) : (
              <>
                <Play size={16} /> Ejecutar simulación
              </>
            )}
          </button>
        </Panel>

        {/* Predicted distribution */}
        <Panel title="Distribución Esperada" subtitle="Respuestas previstas (1★–5★)">
          {simulated ? (
            <div className="h-[260px] animate-fade-in">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={r.distribution} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                  <XAxis dataKey="score" stroke={cc.axis} fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke={cc.axis} fontSize={12} tickLine={false} axisLine={false} unit="%" />
                  <Tooltip
                    cursor={{ fill: cc.cursor }}
                    contentStyle={{ background: cc.tooltipBg, border: `1px solid ${cc.tooltipBorder}`, borderRadius: 12, fontSize: 12, color: 'inherit' }}
                    formatter={(v) => [`${v}%`, 'Respuestas']}
                  />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {r.distribution.map((d, i) => (
                      <Cell key={i} fill={['#EF4444', '#F97316', '#F59E0B', '#3B82F6', '#22C55E'][i]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="flex h-[260px] flex-col items-center justify-center text-center text-muted">
              <Gauge size={32} className="mb-3 text-faint" />
              <p className="text-sm">Ejecutá la simulación para ver la distribución esperada de respuestas.</p>
            </div>
          )}
        </Panel>
      </div>

      {/* Predicted KPIs */}
      {simulated && (
        <div className="grid grid-cols-1 gap-4 animate-fade-in sm:grid-cols-4">
          <KpiCard icon={Star} label="CSAT esperado" value={`${r.predictedCsat}/5`} accent="#F59E0B" sub="Puntaje promedio" />
          <KpiCard icon={MailCheck} label="Tasa de respuesta" value={`${r.predictedResponseRate}%`} accent="#3B82F6" sub="Previsión de participación" />
          <KpiCard icon={AlertTriangle} label="Survey fatigue" value={r.fatigueRisk} accent={fatigueColor[r.fatigueRisk]} sub="Riesgo de saturación" />
          <KpiCard icon={Sparkles} label="Impacto emocional" accent="#10B981" value={<SentimentEmoji value={r.sentimentImpact} size="md" />} sub="Sentimiento estimado" />
        </div>
      )}

      {/* Synthetic users + history */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Panel title="Usuarios Sintéticos" subtitle="Perfiles de reacción modelados">
          <ul className="space-y-3">
            {syntheticUsers.map((u) => (
              <li key={u.name} className="flex items-start gap-3 rounded-xl border border-hairline bg-base/30 p-3">
                <SentimentEmoji value={u.reaction} size="md" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-medium text-content">{u.name}</p>
                    <span className="shrink-0 text-xs font-semibold text-amber-400">{u.score}★</span>
                  </div>
                  <p className="text-xs text-faint">{u.segment}</p>
                  <p className="mt-1 text-xs text-muted">{u.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Historial de Simulaciones" subtitle="Encuestas evaluadas recientemente" bodyClassName="p-0">
          <ul className="divide-y divide-hairline">
            {simulationHistory.map((h) => (
              <li key={h.name} className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-overlay/[0.025]">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-content">{h.name}</p>
                  <p className="text-xs text-faint">{h.date} · {h.responseRate}% respuesta</p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="text-sm font-semibold text-amber-400">{h.csat}★</span>
                  <span
                    className="rounded-full px-2.5 py-1 text-xs font-medium"
                    style={{ color: statusColor[h.status], backgroundColor: `${statusColor[h.status]}1A` }}
                  >
                    {h.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  )
}
