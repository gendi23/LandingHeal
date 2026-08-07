import { CheckCircle2 } from 'lucide-react'
import { DashboardMockup } from '../components/DashboardMockup'

export function Cta() { return <section className="section"><div className="container"><div className="cta grid-bg"><div><h2>Transformá los datos que hoy están dispersos en decisiones</h2><ul>{['Detectá ineficiencias','Aumentá la cantidad de prestaciones','Mejorá la rentabilidad','Todo sin cambiar los sistemas que ya utilizás'].map(x => <li key={x}><CheckCircle2 /> {x}</li>)}</ul><a className="button button--light" href="#contacto">Solicitá una demo</a></div><div className="cta__mock"><DashboardMockup compact /></div></div></div></section> }
