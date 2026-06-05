import { useState } from 'react'
import { SlidersHorizontal, Plus, X, Check } from 'lucide-react'

// Larger titled card to match the reference section style.
function Section({ title, description, children }) {
  return (
    <section className="rounded-2xl border border-hairline bg-card p-6 shadow-card">
      <h2 className="text-lg font-bold text-content">{title}</h2>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{description}</p>
      <div className="mt-5">{children}</div>
    </section>
  )
}

// Add/remove tag list with an input + button and an empty state.
function TagInput({ placeholder, addLabel, emptyLabel, items, onAdd, onRemove }) {
  const [value, setValue] = useState('')

  const submit = () => {
    const v = value.trim()
    if (!v || items.includes(v)) return
    onAdd(v)
    setValue('')
  }

  return (
    <div>
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && submit()}
          placeholder={placeholder}
          className="flex-1 rounded-xl border border-stroke bg-base/40 px-3.5 py-2.5 text-sm text-content placeholder:text-faint focus:border-brandTo focus:outline-none focus:ring-1 focus:ring-brandTo"
        />
        <button
          onClick={submit}
          disabled={!value.trim()}
          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-stroke bg-base/40 px-4 py-2.5 text-sm font-medium text-content-soft transition-colors hover:bg-overlay/5 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Plus size={15} />
          {addLabel}
        </button>
      </div>

      {items.length === 0 ? (
        <p className="mt-3 text-sm text-faint">{emptyLabel}</p>
      ) : (
        <div className="mt-3 flex flex-wrap gap-2">
          {items.map((it) => (
            <span
              key={it}
              className="inline-flex items-center gap-1.5 rounded-lg bg-brandTo/10 py-1 pl-3 pr-1.5 text-sm text-content-soft shadow-[inset_0_0_0_1px_rgba(139,92,246,0.25)]"
            >
              {it}
              <button
                onClick={() => onRemove(it)}
                className="rounded-md p-0.5 text-faint transition-colors hover:bg-overlay/10 hover:text-problemas"
                aria-label={`Quitar ${it}`}
              >
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default function AjusteModeloView() {
  const [context, setContext] = useState('')
  const [topics, setTopics] = useState([])
  const [keywords, setKeywords] = useState([])
  const [dirty, setDirty] = useState(false)

  const touch = () => setDirty(true)

  const addTopic = (v) => {
    setTopics((p) => [...p, v])
    touch()
  }
  const removeTopic = (v) => {
    setTopics((p) => p.filter((t) => t !== v))
    touch()
  }
  const addKeyword = (v) => {
    setKeywords((p) => [...p, v])
    touch()
  }
  const removeKeyword = (v) => {
    setKeywords((p) => p.filter((k) => k !== v))
    touch()
  }

  return (
    <div className="space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brandFrom/20 to-brandTo/20 text-brandTo">
          <SlidersHorizontal size={22} />
        </span>
        <div>
          <h1 className="text-2xl font-bold text-content">Ajuste del Modelo</h1>
          <p className="mt-0.5 text-sm text-muted">Configura cómo la IA procesa tus tickets</p>
        </div>
      </div>

      {/* Contexto de la Empresa */}
      <Section
        title="Contexto de la Empresa"
        description="Proporciona contexto sobre tu empresa, productos y servicios. Esto ayuda al modelo de IA a comprender mejor tu negocio y analizar los tickets con mayor precisión en el contexto de lo que haces."
      >
        <textarea
          value={context}
          onChange={(e) => {
            setContext(e.target.value)
            touch()
          }}
          rows={8}
          placeholder="Ejemplo: Somos una empresa SaaS que proporciona herramientas de gestión de proyectos para equipos remotos. Priorizamos la experiencia del usuario, la seguridad de los datos y las integraciones fluidas. Nuestros clientes valoran la confiabilidad y el soporte receptivo..."
          className="w-full resize-y rounded-xl border border-stroke bg-base/40 px-3.5 py-3 text-sm leading-relaxed text-content placeholder:text-faint focus:border-brandTo focus:outline-none focus:ring-1 focus:ring-brandTo"
        />
      </Section>

      {/* Temas No Interesantes */}
      <Section
        title="Temas No Interesantes"
        description="Añade temas que deben omitirse durante el procesamiento de tickets. Los tickets relacionados con estos temas no serán analizados ni procesados por el modelo de IA. Nota: Ya filtramos automáticamente spam, phishing y otros contenidos maliciosos."
      >
        <TagInput
          placeholder="Añadir un tema..."
          addLabel="Añadir Tema"
          emptyLabel="No se han añadido temas todavía"
          items={topics}
          onAdd={addTopic}
          onRemove={removeTopic}
        />
      </Section>

      {/* Hallazgos Irrelevantes */}
      <Section
        title="Hallazgos Irrelevantes"
        description="Añade palabras clave o frases que representen hallazgos que deben ignorarse durante el análisis. Los hallazgos que contengan estos términos serán filtrados automáticamente."
      >
        <TagInput
          placeholder="Añadir palabra clave de hallazgo..."
          addLabel="Añadir Palabra Clave"
          emptyLabel="No se han añadido palabras clave todavía"
          items={keywords}
          onAdd={addKeyword}
          onRemove={removeKeyword}
        />
      </Section>

      {/* Sticky save bar */}
      <div className="sticky bottom-0 z-10 -mx-6 mt-2 flex items-center justify-between border-t border-hairline bg-panel/90 px-6 py-4 backdrop-blur lg:-mx-8 lg:px-8">
        <span className="flex items-center gap-2 text-sm text-muted">
          {dirty ? (
            <>
              <span className="h-2 w-2 rounded-full bg-friccion" />
              Cambios sin guardar
            </>
          ) : (
            <>
              <Check size={15} className="text-positivos" />
              Todos los cambios guardados
            </>
          )}
        </span>
        <button
          onClick={() => setDirty(false)}
          disabled={!dirty}
          className="rounded-xl bg-gradient-to-r from-brandFrom to-brandTo px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Guardar Cambios
        </button>
      </div>
    </div>
  )
}
