import { BadgePercent } from 'lucide-react'

const icons = {
  users: 'https://www.figma.com/api/mcp/asset/e5d29c3e-f500-455d-a98e-0c9f3e24a831.svg',
  chart: 'https://www.figma.com/api/mcp/asset/14b51960-c448-4e88-ad86-2db267716dc7.svg',
  calendar: 'https://www.figma.com/api/mcp/asset/7195c01e-b7dc-4976-94ca-d5d253f5af58.svg',
  plugs: 'https://www.figma.com/api/mcp/asset/837e3d18-9624-44c9-ba67-aecf9785fb96.svg',
}

export function Contact() {
  return (
    <section className="section section--contact" id="contacto">
      <div className="container contact contact--demo">
        <div className="contact__card" id="agendar">
          <div>
            <h2>Coordinemos una demo</h2>
            <p>
              Conocé cómo Healthics puede optimizar la gestión de tu centro de
              salud. Reservá una reunión en el horario que te resulte más
              conveniente y recibí una demostración personalizada de la
              plataforma.
            </p>
          </div>

          <div className="contact__action">
            <a className="button button--primary" href="#agendar">
              Agendá una demo
            </a>
            <div className="event-benefit">
              <BadgePercent aria-hidden="true" size={24} />
              <div>
                <strong>¡Beneficio exclusivo durante el evento!</strong>
                <span>
                  Reservá tu reunión durante el evento y obtené un descuento
                  exclusivo.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__visual">
          <img className="contact__grid" src="https://www.figma.com/api/mcp/asset/4ee4ae01-268f-4296-ac2a-f0d861495a04.png" alt="" width="1280" height="650" loading="lazy" decoding="async" />
          <img className="contact__doctor" src="https://www.figma.com/api/mcp/asset/7f14ea40-7883-4b17-bfb2-7d30cb2e18c7.png" alt="Profesional médico mostrando aprobación frente a una computadora" width="720" height="648" loading="lazy" decoding="async" />
          {Object.entries(icons).map(([name, src], index) => (
            <span className={'contact-icon ci' + (index + 1)} key={name}>
              <img src={src} alt="" width="53" height="53" loading="lazy" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
