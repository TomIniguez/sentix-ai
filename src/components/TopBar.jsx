import { useState } from 'react'
import { Plus, Calendar, Search, ChevronDown, ChevronRight, List, FlaskConical, MessagesSquare, Target, FileText } from 'lucide-react'
import Dropdown from './Dropdown'
import { dateFilters } from '../data/mockData'

const NEW_ITEMS = [
  { label: 'Lista', icon: List },
  { label: 'Prueba', icon: FlaskConical },
  { label: 'Entrevista', icon: MessagesSquare },
  { label: 'Simulación', icon: Target },
  { label: 'Informe', icon: FileText, submenu: true },
]

// "+ Nuevo" split button with a popover menu (visual for the prototype).
function NewButton() {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-brandFrom to-brandTo px-3.5 py-2.5 text-sm font-semibold text-white shadow-glow transition-opacity hover:opacity-90"
      >
        <Plus size={16} />
        Nuevo
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-20" onClick={() => setOpen(false)} />
          <div className="absolute right-0 z-30 mt-2 w-52 overflow-hidden rounded-xl border border-stroke bg-elevated py-1 shadow-card animate-fade-in">
            {NEW_ITEMS.map((it) => (
              <button
                key={it.label}
                onClick={() => setOpen(false)}
                className="flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm text-content-soft transition-colors hover:bg-overlay/5"
              >
                <it.icon size={16} className="text-brandTo" />
                <span className="flex-1">{it.label}</span>
                {it.submenu && <ChevronRight size={14} className="text-faint" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// Page header: greeting / title on the left, date filter + actions on the right.
export default function TopBar({ title, greeting, dateRange, onDateChange, showSearch = true }) {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        {greeting ? (
          <h1 className="text-2xl font-bold text-content">{greeting}</h1>
        ) : (
          <h1 className="text-2xl font-bold text-content">{title}</h1>
        )}
        {greeting && (
          <p className="mt-1 text-sm text-muted">Esto es lo que sucede con tus clientes hoy.</p>
        )}
      </div>

      <div className="flex items-center gap-2.5">
        {showSearch && (
          <div className="hidden items-center gap-2 rounded-xl border border-hairline bg-card px-3 py-2 md:flex">
            <Search size={15} className="text-faint" />
            <input
              placeholder="Buscar…"
              className="w-40 bg-transparent text-sm text-content-soft placeholder:text-faint focus:outline-none"
            />
          </div>
        )}

        <div className="rounded-xl border border-hairline bg-card px-1.5 py-1">
          <Dropdown
            value={dateRange}
            options={dateFilters}
            onSelect={onDateChange}
            align="right"
            renderTrigger={(v) => (
              <span className="inline-flex items-center gap-2 text-sm text-content-soft">
                <Calendar size={15} className="text-faint" />
                {v}
              </span>
            )}
          />
        </div>

        <NewButton />
      </div>
    </header>
  )
}
