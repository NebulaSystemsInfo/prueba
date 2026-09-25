import Logo from './Logo.jsx'
import { hermandad } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor footer__contenido">
        <Logo claro />
        <p>{hermandad.nombreCompleto} · {hermandad.localidad}</p>
        <p className="footer__copy">© {new Date().getFullYear()} Hermandad del Santísimo Cristo de la Sangre de Pedrera</p>
      </div>
    </footer>
  )
}
