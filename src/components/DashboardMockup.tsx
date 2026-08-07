export function DashboardMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`dashboard ${compact ? 'dashboard--compact' : ''}`} aria-label="Vista previa del panel de Healthics">
      <aside className="dashboard__side">
        <span className="dashboard__mini-brand">▮▯ Healthics</span>
        <b>Resumen</b><span>Indicadores</span><small>Operativos</small><small>Comerciales</small>
        <span>Administración</span><small>Servicios</small><small>Coberturas</small><small>Usuarios</small>
      </aside>
      <main className="dashboard__main">
        <div className="dashboard__welcome"><b>Bienvenido, Martín García</b><small>Siga de cerca los indicadores clave de su interés.</small></div>
        <h4>Tus indicadores claves</h4>
        <div className="dashboard__stats"><article><small>Estudios realizados</small><b>1.284</b><em>↗ +8,3%</em></article><article><small>Ejecutados vs. agendados</small><b>87,4%</b><em>↗ +3,2%</em></article><article><small>Tasa de ocupación</small><b>73,4%</b><em className="down">↘ -2,1%</em></article></div>
        <div className="dashboard__charts"><article><b>Tiempo de Actividad (h)</b><div className="bars"><i /><i /><i /><i /><i /><i /></div></article><article><b>Duración de Estudios (min)</b><div className="lines"><i /><i /><i /><i /><i /></div></article></div>
      </main>
    </div>
  )
}
