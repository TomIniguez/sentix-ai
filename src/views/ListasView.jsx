import { useState } from 'react'
import { ListChecks, Plus, Star, UserRound, Lightbulb, Building2 } from 'lucide-react'
import TopBar from '../components/TopBar'
import { listas } from '../data/mockData'

const typeIcon = { Personas: UserRound, Hallazgos: Lightbulb, Empresas: Building2 }
const FILTERS = ['Todas', 'Personas', 'Hallazgos', 'Empresas']

export default function ListasView() {
  const [dateRange, setDateRange] = useState('Últimos 30 días')
  const [filter, setFilter] = useState('Todas')
  const [pinned, setPinned] = useState(() => listas.filter((l) => l.pinned).map((l) => l.name))

  const togglePin = (name) =>
    setPinned((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]))

  const visible = listas.filter((l) => filter === 'Todas' || l.type === filter)

  return (
    <div className="space-y-6">
      <TopBar title="Listas" dateRange={dateRange} onDateChange={setDateRange} />

      {/* Filter tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                filter === f ? 'bg-overlay/10 text-content' : 'text-muted hover:bg-overlay/5 hover:text-content-soft'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <button className="inline-flex items-center gap-1.5 rounded-xl border border-stroke bg-card px-3 py-2 text-sm font-medium text-content-soft transition-colors hover:bg-overlay/5">
          <Plus size={16} className="text-brandTo" />
          Nueva lista
        </button>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visible.map((l) => {
          const Icon = typeIcon[l.type] || ListChecks
          const isPinned = pinned.includes(l.name)
          return (
            <div key={l.name} className="flex flex-col rounded-2xl border border-hairline bg-card p-5 shadow-card transition-colors hover:border-stroke">
              <div className="mb-3 flex items-start justify-between">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${l.color}1A`, color: l.color, boxShadow: `inset 0 0 0 1px ${l.color}33` }}
                >
                  <Icon size={19} />
                </span>
                <button
                  onClick={() => togglePin(l.name)}
                  className="text-faint transition-colors hover:text-amber-400"
                  title={isPinned ? 'Quitar de fijadas' : 'Fijar lista'}
                >
                  <Star size={17} fill={isPinned ? '#FBBF24' : 'none'} stroke={isPinned ? '#FBBF24' : 'currentColor'} />
                </button>
              </div>

              <h3 className="font-semibold text-content">{l.name}</h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-muted">{l.description}</p>

              <div className="mt-4 flex items-center justify-between border-t border-hairline pt-3">
                <span className="inline-flex items-center gap-1.5 text-sm">
                  <span className="text-lg font-bold text-content">{l.count}</span>
                  <span className="text-xs text-faint">{l.type.toLowerCase()}</span>
                </span>
                <span className="text-xs text-faint">{l.owner} · {l.updated}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
