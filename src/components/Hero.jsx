import { hermandad, datosClave, img } from '../data.js'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <img className="hero__fondo" src={img('paso-ermita.jpg')} alt="" aria-hidden="true" />
      <div className="contenedor hero__grid">
        <div className="hero__texto">
          <p className="eyebrow eyebrow--oro">Pedrera · Sevilla · Desde el siglo XVI</p>
          <h1 className="hero__titulo">
            <span className="hero__pre">Santísimo</span>
            Cristo de la Sangre
          </h1>
          <p className="hero__apodo">El Señor de Pedrera</p>
          <p className="hero__sub">{hermandad.nombreCompleto}</p>
          <div className="hero__acciones">
            <a className="boton boton--oro" href="#viernes-santo">Viernes Santo</a>
            <a className="boton boton--linea" href="#contacto">Hazte hermano</a>
          </div>
        </div>
        <figure className="hero__foto">
          <img src={img('cristo-altar.jpg')} alt="El Santísimo Cristo de la Sangre en su altar de cultos, entre cirios y claveles rojos" />
          <img className="hero__escudo" src={hermandad.escudo} alt="Escudo de la Hermandad" />
        </figure>
      </div>
      <div className="hero__datos">
        <ul className="contenedor">
          {datosClave.map((d) => (
            <li key={d.valor}>
              <strong>{d.valor}</strong>
              <span>{d.texto}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
