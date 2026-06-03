import { useState } from 'react'
import {
  Home,
  Lightbulb,
  Layers,
  Users,
  ChevronDown,
  FlaskConical,
  FileBarChart,
  Sparkles,
  UserRound,
  Building2,
  ListChecks,
} from 'lucide-react'

const NAV = [
  { key: 'inicio', label: 'Inicio', icon: Home },
  { key: 'hallazgos', label: 'Hallazgos', icon: Lightbulb },
  { key: 'temas', label: 'Temas', icon: Layers },
]

const CLIENTES = [
  { key: 'personas', label: 'Personas', icon: UserRound },
  { key: 'empresas', label: 'Empresas', icon: Building2 },
  { key: 'listas', label: 'Listas', icon: ListChecks },
]

const FOOTER_NAV = [
  { key: 'investigacion', label: 'Investigación', icon: FlaskConical },
  { key: 'informes', label: 'Informes', icon: FileBarChart },
]

function NavItem({ item, active, onSelect, indent = false }) {
  const Icon = item.icon
  const isActive = active === item.key
  return (
    <button
      onClick={() => onSelect(item.key)}
      className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
        indent ? 'pl-11' : ''
      } ${
        isActive
          ? 'bg-gradient-to-r from-brandFrom/20 to-brandTo/20 text-white shadow-[inset_0_0_0_1px_rgba(139,92,246,0.3)]'
          : 'text-muted hover:bg-white/5 hover:text-slate-200'
      }`}
    >
      {Icon && (
        <Icon
          size={18}
          className={isActive ? 'text-brandTo' : 'text-faint group-hover:text-muted'}
        />
      )}
      {item.label}
    </button>
  )
}

export default function Sidebar({ active, onSelect }) {
  const [clientesOpen, setClientesOpen] = useState(true)
  const clientesActive = CLIENTES.some((c) => c.key === active)

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-hairline bg-panel">
      {/* Brand */}
      <div className="flex items-center gap-2.5 px-5 py-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brandFrom to-brandTo shadow-glow">
          <Sparkles size={18} className="text-white" />
        </span>
        <div className="leading-tight">
          <p className="text-lg font-extrabold tracking-tight">
            <span className="text-white">Sentix</span> <span className="text-gradient-brand">AI</span>
          </p>
          <p className="text-[10px] uppercase tracking-wider text-faint">Inteligencia conversacional</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 scroll-thin">
        {NAV.map((item) => (
          <NavItem key={item.key} item={item} active={active} onSelect={onSelect} />
        ))}

        {/* Clientes (collapsible) */}
        <button
          onClick={() => setClientesOpen((o) => !o)}
          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
            clientesActive ? 'text-white' : 'text-muted hover:bg-white/5 hover:text-slate-200'
          }`}
        >
          <Users size={18} className={clientesActive ? 'text-brandTo' : 'text-faint'} />
          <span className="flex-1 text-left">Clientes</span>
          <ChevronDown size={15} className={`text-faint transition-transform ${clientesOpen ? 'rotate-180' : ''}`} />
        </button>
        {clientesOpen && (
          <div className="space-y-1 animate-fade-in">
            {CLIENTES.map((item) => (
              <NavItem key={item.key} item={item} active={active} onSelect={onSelect} indent />
            ))}
          </div>
        )}

        {FOOTER_NAV.map((item) => (
          <NavItem key={item.key} item={item} active={active} onSelect={onSelect} />
        ))}
      </nav>

      {/* Profile footer */}
      <div className="border-t border-hairline p-3">
        <div className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-white/5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brandFrom to-brandTo text-sm font-semibold text-white">
            TI
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-slate-100">Tomás Iñiguez</p>
            <p className="truncate text-xs text-faint">tomas.iniguez@sentix.ai</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
