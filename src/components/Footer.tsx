import fysLogo from '../assets/fys-logo.svg'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <img
          className="footer__company-logo"
          src={fysLogo}
          alt="FyS TechGroup"
          width="149"
          height="67"
          loading="lazy"
          decoding="async"
        />
        <address>
          <b>Contacto</b>
          <a href="https://maps.google.com/?q=Lavalle+579+CABA">
            Lavalle 579 7° - CABA
          </a>
          <a href="tel:+5491150501292">+54 9 11 5050-1292</a>
          <a href="mailto:ventas@fysgroup.com.ar">
            ventas@fysgroup.com.ar
          </a>
        </address>
      </div>
      <div className="container footer__bottom">
        <span>2026 © FyS TechGroup | Todos los derechos reservados</span>
      </div>
    </footer>
  )
}