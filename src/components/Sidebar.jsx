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
  Building,
  ListChecks,
  MoreVertical,
  Bell,
  Sun,
  Moon,
  Settings,
  LogOut,
  UsersRound,
  SlidersHorizontal,
  PlugZap,
  CreditCard,
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

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

const EMPRESA = [
  { key: 'equipo', label: 'Equipo', icon: UsersRound },
  { key: 'ajuste-modelo', label: 'Ajuste del Modelo', icon: SlidersHorizontal },
  { key: 'conexiones', label: 'Conexiones', icon: PlugZap },
  { key: 'facturacion', label: 'Facturación', icon: CreditCard },
  { key: 'empresa-config', label: 'Configuración', icon: Settings },
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
          ? 'bg-gradient-to-r from-brandFrom/20 to-brandTo/20 text-content shadow-[inset_0_0_0_1px_rgba(139,92,246,0.3)]'
          : 'text-muted hover:bg-overlay/5 hover:text-content-soft'
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

// Collapsible group header (used by Clientes & Mi Empresa).
function GroupHeader({ icon: Icon, label, open, active, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
        active ? 'text-content' : 'text-muted hover:bg-overlay/5 hover:text-content-soft'
      }`}
    >
      <Icon size={18} className={active ? 'text-brandTo' : 'text-faint'} />
      <span className="flex-1 text-left">{label}</span>
      <ChevronDown size={15} className={`text-faint transition-transform ${open ? 'rotate-180' : ''}`} />
    </button>
  )
}

function ProfileMenu({ onSelect }) {
  const [open, setOpen] = useState(false)
  const { resolved, toggleTheme } = useTheme()
  const isDark = resolved === 'dark'

  const items = [
    { label: 'Notificaciones', icon: Bell, onClick: () => {} },
    {
      label: isDark ? 'Modo claro' : 'Modo oscuro',
      icon: isDark ? Sun : Moon,
      onClick: () => toggleTheme(),
    },
    { label: 'Configuración', icon: Settings, onClick: () => onSelect('configuracion') },
  ]

  return (
    <div className="relative">
      <div className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-overlay/5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brandFrom to-brandTo text-sm font-semibold text-white">
          TI
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-content">Tomás Iñiguez</p>
          <p className="truncate text-xs text-faint">tomas.iniguez@sentix.ai</p>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-lg p-1 text-faint transition-colors hover:bg-overlay/5 hover:text-muted"
          aria-label="Menú de perfil"
        >
          <MoreVertical size={18} />
        </button>
      </div>

      {open && (
        <>
          <div className="fixed inset-0 z-20" onClick={() => setOpen(false)} />
          <div className="absolute bottom-full left-0 z-30 mb-2 w-56 overflow-hidden rounded-xl border border-stroke bg-elevated py-1 shadow-card animate-fade-in">
            {items.map((it) => (
              <button
                key={it.label}
                onClick={() => {
                  it.onClick()
                  setOpen(false)
                }}
                className="flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm text-content-soft transition-colors hover:bg-overlay/5"
              >
                <it.icon size={16} className="text-faint" />
                {it.label}
              </button>
            ))}
            <div className="my-1 border-t border-hairline" />
            <button
              onClick={() => setOpen(false)}
              className="flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm text-problemas transition-colors hover:bg-problemas/10"
            >
              <LogOut size={16} />
              Cerrar sesión
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default function Sidebar({ active, onSelect }) {
  const [clientesOpen, setClientesOpen] = useState(true)
  const [empresaOpen, setEmpresaOpen] = useState(false)
  const clientesActive = CLIENTES.some((c) => c.key === active)
  const empresaActive = EMPRESA.some((c) => c.key === active)

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-hairline bg-panel">
      {/* Brand */}
      <div className="flex items-center gap-2.5 px-5 py-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brandFrom to-brandTo shadow-glow">
          <Sparkles size={18} className="text-white" />
        </span>
        <div className="leading-tight">
          <p className="text-lg font-extrabold tracking-tight">
            <span className="text-content">Sentix</span> <span className="text-gradient-brand">AI</span>
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
        <GroupHeader
          icon={Users}
          label="Clientes"
          open={clientesOpen}
          active={clientesActive}
          onToggle={() => setClientesOpen((o) => !o)}
        />
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

        {/* Mi Empresa (collapsible) */}
        <GroupHeader
          icon={Building}
          label="Mi Empresa"
          open={empresaOpen}
          active={empresaActive}
          onToggle={() => setEmpresaOpen((o) => !o)}
        />
        {empresaOpen && (
          <div className="space-y-1 animate-fade-in">
            {EMPRESA.map((item) => (
              <NavItem key={item.key} item={item} active={active} onSelect={onSelect} indent />
            ))}
          </div>
        )}
      </nav>

      {/* Profile footer */}
      <div className="border-t border-hairline p-3">
        <ProfileMenu onSelect={onSelect} />
      </div>
    </aside>
  )
}
