import { useEffect, useState } from 'react'
import { BadgePercent, X } from 'lucide-react'

const bookingUrl = 'https://calendar.app.google/odM9roFptFCzyrja7'

const icons = {
  users: 'https://www.figma.com/api/mcp/asset/e5d29c3e-f500-455d-a98e-0c9f3e24a831.svg',
  chart: 'https://www.figma.com/api/mcp/asset/14b51960-c448-4e88-ad86-2db267716dc7.svg',
  calendar: 'https://www.figma.com/api/mcp/asset/7195c01e-b7dc-4976-94ca-d5d253f5af58.svg',
  plugs: 'https://www.figma.com/api/mcp/asset/837e3d18-9624-44c9-ba67-aecf9785fb96.svg',
}

export function Contact() {
  const [showBooking, setShowBooking] = useState(false)

  useEffect(() => {
    if (!showBooking) return

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShowBooking(false)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [showBooking])

  return (
    <section className="section section--contact" id="contacto">
      <div className="container contact contact--demo">
        <div className="contact__card" id="agendar">
          <div>
            <h2>Coordinemos una demo</h2>
            <p>
              Conocé cómo Healthics puede optimizar la gestión de tu centro de
              salud. Reservá una reunión, recibí una demostración personalizada
              de la plataforma y encontrá el plan de suscripción que mejor se
              adapta a las necesidades y objetivos de tu organización.
            </p>
          </div>

          <div className="contact__action">
            <a
              className="button button--primary"
              href="#agendar"
              onClick={(event) => {
                event.preventDefault()
                setShowBooking(true)
              }}
            >
              Agendá una demo
            </a>
            <div className="event-benefit">
              <BadgePercent aria-hidden="true" size={24} />
              <div>
                <strong>¡Beneficio exclusivo durante el evento!</strong>
                <span>
                  Reservá tu reunión durante el evento y obtené un descuento
                  exclusivo del 25%.
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

      {showBooking && (
        <div
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setShowBooking(false)
          }}
          style={{
            position: 'fixed',
            zIndex: 1000,
            inset: 0,
            display: 'grid',
            placeItems: 'center',
            padding: '16px',
            background: 'rgb(15 23 42 / 72%)',
            backdropFilter: 'blur(6px)',
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Reservar una demostración de Healthics"
            style={{
              position: 'relative',
              width: 'min(960px, 100%)',
              height: 'min(760px, calc(100dvh - 32px))',
              overflow: 'hidden',
              borderRadius: '16px',
              background: '#fff',
              boxShadow: '0 24px 80px rgb(15 23 42 / 32%)',
            }}
          >
            <button
              type="button"
              aria-label="Cerrar calendario"
              autoFocus
              onClick={() => setShowBooking(false)}
              style={{
                position: 'absolute',
                zIndex: 1,
                top: '12px',
                right: '12px',
                display: 'grid',
                width: '40px',
                height: '40px',
                placeItems: 'center',
                border: 0,
                borderRadius: '999px',
                color: '#fff',
                background: '#0034c2',
                cursor: 'pointer',
              }}
            >
              <X aria-hidden="true" size={22} />
            </button>
            <iframe
              src={bookingUrl}
              title="Reservar una demostración de Healthics"
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                border: 0,
                background: '#fff',
              }}
            />
          </div>
        </div>
      )}
    </section>
  )
}
