import { CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'

export function Indicators() {
  return (
    <section className="section" id="indicadores">
      <div className="container">
        <SectionHeading
          eyebrow="Métricas que importan"
          title="Indicadores diseñados para la gestión sanitaria"
        >
          Transformá los datos de tu operación en información accionable
          mediante indicadores claros y comparables.
        </SectionHeading>
        <div className="indicator-panel">
          <CheckCircle2 aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
