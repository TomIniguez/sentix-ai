import { useState } from 'react'
import Sidebar from './components/Sidebar'
import InicioView from './views/InicioView'
import HallazgosView from './views/HallazgosView'
import TemasView from './views/TemasView'
import PersonasView from './views/PersonasView'
import Placeholder from './views/Placeholder'
import { Building2, ListChecks, FlaskConical, FileBarChart } from 'lucide-react'

const PLACEHOLDERS = {
  empresas: {
    icon: Building2,
    title: 'Empresas',
    description: 'Próximamente: vista consolidada de cada empresa cliente, con volumen de eventos, sentimiento agregado y riesgo de churn a nivel cuenta.',
  },
  listas: {
    icon: ListChecks,
    title: 'Listas',
    description: 'Próximamente: segmentos guardados de personas y hallazgos para seguimiento y campañas de retención.',
  },
  investigacion: {
    icon: FlaskConical,
    title: 'Investigación',
    description: 'Próximamente: Laboratorio de Clientes IA con usuarios sintéticos para simular encuestas CSAT/NPS antes de enviarlas.',
  },
  informes: {
    icon: FileBarChart,
    title: 'Informes',
    description: 'Próximamente: reportes ejecutivos automáticos sobre sentimiento, fricción y predicción de abandono, exportables a PDF.',
  },
}

export default function App() {
  const [active, setActive] = useState('inicio')

  function renderView() {
    switch (active) {
      case 'inicio':
        return <InicioView onNavigate={setActive} />
      case 'hallazgos':
        return <HallazgosView />
      case 'temas':
        return <TemasView />
      case 'personas':
        return <PersonasView />
      default: {
        const p = PLACEHOLDERS[active]
        return p ? <Placeholder {...p} /> : <InicioView onNavigate={setActive} />
      }
    }
  }

  return (
    <div className="flex h-screen overflow-hidden bg-base">
      <Sidebar active={active} onSelect={setActive} />
      <main className="flex-1 overflow-y-auto scroll-thin">
        <div className="mx-auto max-w-[1400px] px-6 py-6 lg:px-8">
          <div key={active} className="animate-fade-in">
            {renderView()}
          </div>
        </div>
      </main>
    </div>
  )
}
