const icons = {
  users: 'https://www.figma.com/api/mcp/asset/e5d29c3e-f500-455d-a98e-0c9f3e24a831.svg',
  chart: 'https://www.figma.com/api/mcp/asset/14b51960-c448-4e88-ad86-2db267716dc7.svg',
  calendar: 'https://www.figma.com/api/mcp/asset/7195c01e-b7dc-4976-94ca-d5d253f5af58.svg',
  plugs: 'https://www.figma.com/api/mcp/asset/837e3d18-9624-44c9-ba67-aecf9785fb96.svg',
}

export function Contact() {
  return (
    <section className="section section--contact" id="contacto">
      <div className="container contact contact--with-form">
        <div className="contact__card">
          <header className="contact__form-header">
            <h2>Coordinemos una demo</h2>
            <p>
              Contanos cómo funciona hoy tu centro de salud y te mostramos, con
              tus propios indicadores, dónde están las oportunidades de mejora.
            </p>
          </header>

          <form
            className="demo-form"
            aria-label="Solicitud de demo"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="form-field">
              <span>Nombre y apellido</span>
              <input name="name" type="text" placeholder="Ingresá tu nombre completo" autoComplete="name" required />
            </label>
            <label className="form-field">
              <span>Institución</span>
              <input name="organization" type="text" placeholder="Nombre de la institución o centro" autoComplete="organization" required />
            </label>
            <label className="form-field">
              <span>Email</span>
              <input name="email" type="email" placeholder="nombre@institucion.com" autoComplete="email" required />
            </label>
            <label className="form-field">
              <span>Teléfono</span>
              <input name="phone" type="tel" placeholder="+54 11 0000 0000" autoComplete="tel" required />
            </label>
            <button className="button button--primary demo-form__submit" type="submit">
              Solicitar una demo <span aria-hidden="true">→</span>
            </button>
          </form>
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
