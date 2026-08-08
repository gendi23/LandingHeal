import { Brand } from './Brand'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <Brand inverse linked={false} />
        <address>
          <b>Contacto</b>
          <a href="https://maps.google.com/?q=Lavalle+579+CABA">
            Lavalle 579 7° - CABA
          </a>
          <a href="tel:+5491158081291">+54 9 11 5808-1291</a>
          <a href="mailto:comercial@fystechgroup.com">
            comercial@fystechgroup.com
          </a>
        </address>
      </div>
      <div className="container footer__bottom">
        <span>2026 © FyS TechGroup | Todos los derechos reservados</span>

      </div>
    </footer>
  )
}
