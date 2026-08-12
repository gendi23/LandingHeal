import { type CSSProperties } from 'react'
import { SectionHeading } from '../components/SectionHeading'

const benefits = [
  [
    'https://www.figma.com/api/mcp/asset/25e4824a-687c-42c5-8ad7-45c831ebe38e.svg',
    'Detectá pérdidas de rentabilidad',
    'Conocé qué servicios, equipos o procesos están afectando tus resultados.',
  ],
  [
    'https://www.figma.com/api/mcp/asset/25d19744-3a59-42d4-a389-1714485ee5d2.svg',
    'Aumentá la cantidad de prestaciones por mes',
    'Identificá tiempos ociosos y aprovechá mejor la capacidad instalada.',
  ],
  [
    'https://www.figma.com/api/mcp/asset/57173aeb-5fdc-4faa-9edf-a21f8db62766.svg',
    'Optimizá el uso de tus equipos',
    'Medí la utilización real de cada recurso y tomá decisiones para maximizar su rendimiento.',
  ],
  [
    'https://www.figma.com/api/mcp/asset/25dc9f1a-e46c-4faf-8ddc-9dc878fab3c6.svg',
    'Reducí tiempos de espera',
    'Analizá agendas, procesos y tiempos para mejorar la experiencia del paciente.',
  ],
  [
    'https://www.figma.com/api/mcp/asset/ced24be6-ebda-4afa-b0ec-0849df76c698.svg',
    'Conocé el desempeño de cada sede',
    'Compará productividad, utilización y rentabilidad entre centros.',
  ],
  [
    'https://www.figma.com/api/mcp/asset/e0b56736-a3c2-4b87-aeb1-f84600cf8d22.svg',
    'Tomá decisiones con datos',
    'Accedé a indicadores claros y actualizados para gestionar con evidencia.',
  ],
]

export function Benefits() {
  return (
    <section className="section section--features" id="funcionalidades">
      <div className="container">
        <SectionHeading
          eyebrow="¿Qué podés lograr con Healthics?"
          title="Descubrí el potencial de tus datos"
        >
          Con información consolidada de toda tu operación, Healthics te ayuda a
          identificar oportunidades de mejora que permanecen ocultas entre
          distintos sistemas.
        </SectionHeading>
        <div className="benefits">
          {benefits.map(([icon, title, text], index) => (
            <article
              className="benefit"
              key={title}
              style={
                {
                  '--card-column': index % 3,
                  '--card-row': Math.floor(index / 3),
                } as CSSProperties
              }
            >
              <img
                src={icon}
                alt=""
                width="64"
                height="64"
                loading="lazy"
                decoding="async"
              />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

