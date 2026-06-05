import { useState } from 'react'
import Sidebar from './components/Sidebar'
import InicioView from './views/InicioView'
import HallazgosView from './views/HallazgosView'
import TemasView from './views/TemasView'
import PersonasView from './views/PersonasView'
import EmpresasView from './views/EmpresasView'
import ListasView from './views/ListasView'
import InvestigacionView from './views/InvestigacionView'
import InformesView from './views/InformesView'
import ConfiguracionView from './views/ConfiguracionView'
import ConexionesView from './views/ConexionesView'
import AjusteModeloView from './views/AjusteModeloView'
import Placeholder from './views/Placeholder'
import { UsersRound, CreditCard, Building } from 'lucide-react'

// Mi Empresa sub-pages without a dedicated screen yet → polished placeholders.
const PLACEHOLDERS = {
  equipo: {
    icon: UsersRound,
    title: 'Equipo',
    description: 'Próximamente: gestión de miembros del equipo, roles y permisos para tu organización en Sentix AI.',
  },
  facturacion: {
    icon: CreditCard,
    title: 'Facturación',
    description: 'Próximamente: plan de suscripción, métodos de pago, consumo de tickets analizados y facturas descargables.',
  },
  'empresa-config': {
    icon: Building,
    title: 'Configuración de Empresa',
    description: 'Próximamente: datos de la organización, dominio, integraciones por defecto y políticas a nivel cuenta.',
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
      case 'empresas':
        return <EmpresasView />
      case 'listas':
        return <ListasView />
      case 'investigacion':
        return <InvestigacionView />
      case 'informes':
        return <InformesView />
      case 'configuracion':
        return <ConfiguracionView />
      case 'conexiones':
        return <ConexionesView />
      case 'ajuste-modelo':
        return <AjusteModeloView />
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
