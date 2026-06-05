import { useState } from 'react'
import { Settings, FileText, MessageSquarePlus, Sun, Moon, Monitor, Sparkles, Download } from 'lucide-react'
import Panel from '../components/Panel'
import { useTheme } from '../context/ThemeContext'
import { currentUser, appVersion, whatsNew } from '../data/mockData'

const THEME_OPTIONS = [
  { value: 'claro', label: 'Claro', icon: Sun },
  { value: 'oscuro', label: 'Oscuro', icon: Moon },
  { value: 'sistema', label: 'Sistema', icon: Monitor },
]

function Field({ label, value, onChange, type = 'text' }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-content-soft">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-stroke bg-base/40 px-3.5 py-2.5 text-sm text-content placeholder:text-faint focus:border-brandTo focus:outline-none focus:ring-1 focus:ring-brandTo"
      />
    </label>
  )
}

export default function ConfiguracionView() {
  const { theme, setTheme } = useTheme()
  const [firstName, setFirstName] = useState(currentUser.firstName)
  const [lastName, setLastName] = useState(currentUser.lastName)
  const [email, setEmail] = useState(currentUser.email)
  const [toast, setToast] = useState(null)

  const flash = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(null), 2200)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brandFrom/20 to-brandTo/20 text-brandTo">
          <Settings size={22} />
        </span>
        <div>
          <h1 className="text-2xl font-bold text-content">Configuración</h1>
          <p className="mt-0.5 text-sm text-muted">Administra tu cuenta y preferencias</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* ── Left column ── */}
        <div className="space-y-6">
          {/* Información Personal */}
          <Panel title="Información Personal" subtitle="Actualiza la información de tu cuenta y dirección de correo electrónico.">
            <div className="flex items-center gap-4">
              <button
                onClick={() => flash('Función de avatar no disponible en el prototipo')}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brandFrom to-brandTo text-lg font-semibold text-white"
              >
                {currentUser.initials}
              </button>
              <div>
                <button
                  onClick={() => flash('Función de avatar no disponible en el prototipo')}
                  className="rounded-xl border border-stroke bg-base/40 px-3 py-2 text-sm font-medium text-content-soft transition-colors hover:bg-overlay/5"
                >
                  Cambiar Avatar
                </button>
                <p className="mt-1.5 text-xs text-faint">Haz clic en el avatar para subir una nueva imagen</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Nombre" value={firstName} onChange={setFirstName} />
              <Field label="Apellido" value={lastName} onChange={setLastName} />
            </div>
            <div className="mt-4">
              <Field label="Correo Electrónico" type="email" value={email} onChange={setEmail} />
            </div>

            <button
              onClick={() => flash('Cambios guardados correctamente')}
              className="mt-5 rounded-xl bg-gradient-to-r from-brandFrom to-brandTo px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-opacity hover:opacity-90"
            >
              Guardar Cambios
            </button>
          </Panel>

          {/* Apariencia */}
          <Panel title="Apariencia" subtitle="Personaliza cómo se ve la aplicación.">
            <p className="mb-3 text-sm font-medium text-content-soft">Tema</p>
            <div className="grid grid-cols-3 gap-3">
              {THEME_OPTIONS.map((opt) => {
                const selected = theme === opt.value
                return (
                  <button
                    key={opt.value}
                    onClick={() => setTheme(opt.value)}
                    className={`flex flex-col items-center gap-2 rounded-xl border px-3 py-4 text-sm transition-colors ${
                      selected
                        ? 'border-brandTo bg-brandTo/10 text-content shadow-[inset_0_0_0_1px_rgba(139,92,246,0.4)]'
                        : 'border-stroke text-muted hover:bg-overlay/5'
                    }`}
                  >
                    <opt.icon size={20} className={selected ? 'text-brandTo' : 'text-faint'} />
                    {opt.label}
                  </button>
                )
              })}
            </div>
          </Panel>
        </div>

        {/* ── Right column ── */}
        <div className="space-y-6">
          {/* Legal */}
          <Panel title="Legal" subtitle="Información de privacidad y legal">
            <p className="text-sm leading-relaxed text-muted">
              Revisa nuestra política de privacidad, términos de uso y política de reembolso relacionados con tu uso de Sentix AI.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {['Política de Privacidad', 'Términos de Uso', 'Política de Reembolso'].map((l) => (
                <button
                  key={l}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-stroke bg-base/40 px-3 py-2 text-sm font-medium text-content-soft transition-colors hover:bg-overlay/5"
                >
                  <FileText size={14} className="text-faint" />
                  {l}
                </button>
              ))}
            </div>
          </Panel>

          {/* Comentarios */}
          <Panel title="Comentarios" subtitle="Ayúdanos a mejorar compartiendo tus pensamientos.">
            <p className="text-sm leading-relaxed text-muted">
              Valoramos tus comentarios y trabajamos constantemente para mejorar. Por favor comparte cualquier idea, sugerencia o problema que hayas encontrado.
            </p>
            <button
              onClick={() => flash('¡Gracias por tus comentarios!')}
              className="mt-4 inline-flex items-center gap-1.5 rounded-xl border border-stroke bg-base/40 px-3 py-2 text-sm font-medium text-content-soft transition-colors hover:bg-overlay/5"
            >
              <MessageSquarePlus size={15} className="text-brandTo" />
              Compartir Comentarios
            </button>
          </Panel>

          {/* Información del Sistema */}
          <Panel title="Información del Sistema" subtitle="Detalles sobre la versión actual del sistema.">
            <div className="flex items-center justify-between">
              <span className="text-sm text-content-soft">Versión</span>
              <span className="rounded-md bg-overlay/5 px-2 py-1 font-mono text-xs text-muted">{appVersion}</span>
            </div>
            <div className="mt-4 rounded-xl border border-hairline bg-base/30 p-4">
              <p className="flex items-center gap-1.5 text-sm font-semibold text-content">
                <Sparkles size={14} className="text-brandTo" /> Qué hay de Nuevo
              </p>
              <ul className="mt-2 space-y-1.5">
                {whatsNew.map((n, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-brandTo" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </Panel>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl border border-stroke bg-elevated px-4 py-3 text-sm text-content shadow-card animate-fade-in">
          <Download size={16} className="text-brandTo" />
          {toast}
        </div>
      )}
    </div>
  )
}
