import { hermandad } from '../data.js'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__fondo" aria-hidden="true" />
      <div className="contenedor hero__contenido">
        <img className="hero__escudo" src={hermandad.escudo} alt="Escudo de la Hermandad" />
        <p className="hero__pre">{hermandad.localidad}</p>
        <h1 className="hero__titulo">
          Santísimo Cristo
          <span>de la Sangre</span>
        </h1>
        <p className="hero__sub">{hermandad.nombreCompleto}</p>
        <div className="hero__acciones">
          <a className="boton boton--rojo" href="#hermano">Hazte hermano</a>
          <a className="boton boton--linea" href="#historia">Conócenos</a>
        </div>
      </div>
      <a className="hero__scroll" href="#historia" aria-label="Bajar a Historia">
        <span />
      </a>
    </section>
  )
}
