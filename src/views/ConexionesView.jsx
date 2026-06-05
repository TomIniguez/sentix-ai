import { useState } from 'react'
import { PlugZap, Plug, CheckCircle2, Plus, MessagesSquare, Ticket, ShoppingBag, Headphones, MessageCircle } from 'lucide-react'
import { integrations } from '../data/mockData'

// Approximate brand marks with colored tiles + a representative lucide icon
// (real logos aren't bundled in this prototype).
const ICONS = {
  Intercom: MessagesSquare,
  Zendesk: Ticket,
  Gorgias: ShoppingBag,
  Freshdesk: Headphones,
  Freshchat: MessageCircle,
}

function IntegrationCard({ item, connected, onConnect }) {
  const Icon = ICONS[item.icon] || Plug
  return (
    <div className="flex flex-col rounded-2xl border border-hairline bg-card p-5 shadow-card transition-colors hover:border-stroke">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
            style={{ backgroundColor: item.color }}
          >
            <Icon size={22} />
          </span>
          <div>
            <h3 className="font-semibold text-content">{item.name}</h3>
            <p className="text-xs text-faint">{item.category}</p>
          </div>
        </div>

        {connected ? (
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-positivos/10 px-2.5 py-1.5 text-xs font-semibold text-positivos">
            <CheckCircle2 size={14} /> Connected
          </span>
        ) : (
          <button
            onClick={onConnect}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-gradient-to-r from-brandFrom to-brandTo px-3 py-1.5 text-xs font-semibold text-white shadow-glow transition-opacity hover:opacity-90"
          >
            <Plug size={13} /> Connect
          </button>
        )}
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>

      {connected && item.connectedTo && (
        <p className="mt-3 text-xs text-faint">Conectado a: {item.connectedTo}</p>
      )}
    </div>
  )
}

export default function ConexionesView() {
  // Track which integrations are connected (Zendesk starts connected).
  const [connected, setConnected] = useState(() =>
    integrations.reduce((acc, it) => ({ ...acc, [it.name]: it.status === 'connected' }), {}),
  )

  const connect = (name) => setConnected((prev) => ({ ...prev, [name]: true }))

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brandFrom/20 to-brandTo/20 text-brandTo">
          <PlugZap size={22} />
        </span>
        <div>
          <h1 className="text-2xl font-bold text-content">Conexiones</h1>
          <p className="mt-0.5 text-sm text-muted">Conecta Sentix AI a tus herramientas y plataformas existentes</p>
        </div>
      </div>

      {/* Integration grid */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {integrations.map((it) => (
          <IntegrationCard
            key={it.name}
            item={it}
            connected={connected[it.name]}
            onConnect={() => connect(it.name)}
          />
        ))}

        {/* Coming soon placeholder */}
        <div className="flex flex-col items-start justify-center rounded-2xl border border-dashed border-stroke bg-card/40 p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-overlay/5 text-faint">
              <Plus size={22} />
            </span>
            <div>
              <h3 className="font-semibold text-muted">Más próximamente</h3>
              <p className="text-xs text-faint">Plataforma de soporte al cliente</p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-faint">
            Estamos trabajando en agregar más integraciones para ayudarte a conectar todas tus herramientas y fuentes de datos.
          </p>
        </div>
      </div>
    </div>
  )
}
