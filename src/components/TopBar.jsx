import { Plus, Calendar, Search } from 'lucide-react'
import Dropdown from './Dropdown'
import { dateFilters } from '../data/mockData'

// Page header: greeting / title on the left, date filter + actions on the right.
export default function TopBar({ title, greeting, dateRange, onDateChange, showSearch = true }) {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        {greeting ? (
          <h1 className="text-2xl font-bold text-white">{greeting}</h1>
        ) : (
          <h1 className="text-2xl font-bold text-white">{title}</h1>
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
              className="w-40 bg-transparent text-sm text-slate-200 placeholder:text-faint focus:outline-none"
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
              <span className="inline-flex items-center gap-2 text-sm text-slate-200">
                <Calendar size={15} className="text-faint" />
                {v}
              </span>
            )}
          />
        </div>

        <button className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-brandFrom to-brandTo px-3.5 py-2.5 text-sm font-semibold text-white shadow-glow transition-opacity hover:opacity-90">
          <Plus size={16} />
          Nuevo
        </button>
      </div>
    </header>
  )
}
