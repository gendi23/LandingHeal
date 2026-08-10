import { type CSSProperties, useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import healthicsIsologo from '../assets/healthics-isologo.svg'

const paths = [
  'M 206 76 H 326 C 400 76 440 220 580 270',
  'M 206 218 H 330 C 410 218 450 252 580 278',
  'M 206 360 H 330 C 410 360 450 316 580 292',
  'M 206 502 H 330 C 410 502 440 354 580 300',
  'M 646 270 C 740 238 744 146 830 146 H 1074',
  'M 646 294 C 740 326 744 430 830 430 H 1074',
]

const sources = ['HIS', 'RIS', 'PACS', 'Información complementaria']
const outputs = ['Indicadores operativos', 'Indicadores económicos']

export function Integration() {
  const [activePath, setActivePath] = useState<number | null>(null)
  const lineClass = (index: number, variant: string) => {
    const dimmed =
      activePath !== null && activePath !== index ? ' is-dimmed' : ''
    const active = activePath === index ? ' is-active' : ''
    return 'integration-path integration-path--' + variant + dimmed + active
  }

  return (
    <section className="section section--integration" id="integraciones">
      <div className="container">
        <SectionHeading
          eyebrow="Visión integral"
          title="Toda la información de tu operación, en un solo lugar."
        >
          Healthics no reemplaza tus herramientas actuales. Las conecta,
          centraliza la información y la convierte en conocimiento para decidir
          mejor.
        </SectionHeading>

        <div className="integration-scroll-shell">
          <div className="integration-diagram">
            <svg
              className="integration-diagram__lines"
              viewBox="0 0 1280 578"
              preserveAspectRatio="none"
              role="img"
              aria-label="Flujo de integración de sistemas hacia indicadores"
            >
              {paths.map((path, index) => (
                <path
                  id={'integration-path-' + index}
                  className={lineClass(index, 'base')}
                  d={path}
                  key={'base-' + path}
                />
              ))}
              {paths.map((path, index) => (
                <path
                  className={lineClass(index, 'draw')}
                  d={path}
                  key={'draw-' + path}
                  pathLength="1"
                  style={
                    { '--path-delay': index * 140 + 'ms' } as CSSProperties
                  }
                />
              ))}
              {paths.map((path, index) => (
                <path
                  className={lineClass(index, 'flow')}
                  d={path}
                  key={'flow-' + path}
                  pathLength="1"
                  style={
                    { '--flow-delay': index * -420 + 'ms' } as CSSProperties
                  }
                />
              ))}
            </svg>

            <div className="integration-diagram__sources">
              {sources.map((item, index) => (
                <button
                  type="button"
                  key={item}
                  aria-controls={'integration-path-' + index}
                  onMouseEnter={() => setActivePath(index)}
                  onMouseLeave={() => setActivePath(null)}
                  onFocus={() => setActivePath(index)}
                  onBlur={() => setActivePath(null)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="integration-diagram__ripples" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="integration-diagram__hub" aria-hidden="true">
              <img
                className="brand__isologo"
                src={healthicsIsologo}
                alt=""
                width="164"
                height="164"
              />
            </div>

            <div className="integration-diagram__outputs">
              {outputs.map((item, outputIndex) => {
                const index = outputIndex + 4
                return (
                  <button
                    type="button"
                    key={item}
                    aria-controls={'integration-path-' + index}
                    onMouseEnter={() => setActivePath(index)}
                    onMouseLeave={() => setActivePath(null)}
                    onFocus={() => setActivePath(index)}
                    onBlur={() => setActivePath(null)}
                  >
                    {item}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
