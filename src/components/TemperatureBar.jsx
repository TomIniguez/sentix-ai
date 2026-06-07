import { Flame } from 'lucide-react'

// Conversation "temperature" (0–100) — MVP: detección de temperatura de la conversación.
// Cold (blue) → warm (amber) → hot (red), with a Fría / Tibia / Caliente label.
const heatColor = (v) => (v >= 67 ? '#EF4444' : v >= 34 ? '#F59E0B' : '#3B82F6')
const heatLabel = (v) => (v >= 67 ? 'Caliente' : v >= 34 ? 'Tibia' : 'Fría')

export default function TemperatureBar({ value = 0, showLabel = true }) {
  const v = Math.max(0, Math.min(100, value))
  const color = heatColor(v)
  return (
    <div className="flex items-center gap-2" title={`Temperatura: ${v}/100`}>
      <Flame size={14} className="shrink-0" style={{ color }} />
      <div className="h-1.5 w-20 overflow-hidden rounded-full bg-overlay/10">
        <div className="h-full rounded-full" style={{ width: `${v}%`, backgroundColor: color }} />
      </div>
      {showLabel && (
        <span className="w-14 text-xs font-medium" style={{ color }}>
          {heatLabel(v)}
        </span>
      )}
    </div>
  )
}
