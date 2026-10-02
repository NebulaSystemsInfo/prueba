import { hermandad } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor footer__contenido">
        <img className="footer__escudo" src={hermandad.escudo} alt="" />
        <p className="footer__nombre">{hermandad.nombreCompleto}</p>
        <p>{hermandad.localidad}</p>
        <p className="footer__creditos">
          Fotografías: ArteSacro (Viernes Santo 2016), Semana Santa de Andalucía, IAPH (Instituto Andaluz
          del Patrimonio Histórico), Ayuntamiento de Pedrera y redes sociales de la hermandad.
        </p>
        <p className="footer__copy">© {new Date().getFullYear()} Hermandad del Santísimo Cristo de la Sangre · Pedrera</p>
      </div>
    </footer>
  )
}
