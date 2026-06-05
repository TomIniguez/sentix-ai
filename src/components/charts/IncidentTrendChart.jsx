import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { trendSeries } from '../../data/mockData'
import useChartColors from './useChartColors'

function TrendTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-stroke bg-elevated px-3 py-2 text-xs shadow-card">
      <p className="font-medium text-content">{label}</p>
      <p className="text-accent">{payload[0].value} incidentes</p>
    </div>
  )
}

// Smooth green "wave" area chart of Zendesk-style ticket incidents over 7 days.
export default function IncidentTrendChart() {
  const c = useChartColors()
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={trendSeries} margin={{ top: 10, right: 8, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={c.grid} vertical={false} />
          <XAxis dataKey="day" stroke={c.axis} fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke={c.axis} fontSize={12} tickLine={false} axisLine={false} width={36} />
          <Tooltip content={<TrendTooltip />} cursor={{ stroke: c.tooltipBorder, strokeWidth: 1 }} />
          <Area
            type="monotone"
            dataKey="incidentes"
            stroke="#10B981"
            strokeWidth={2.5}
            fill="url(#trendFill)"
            dot={{ r: 3, fill: '#10B981', strokeWidth: 0 }}
            activeDot={{ r: 5, fill: '#10B981', stroke: c.tooltipBg, strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
