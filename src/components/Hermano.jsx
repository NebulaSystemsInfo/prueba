import { hermandad, img } from '../data.js'

export default function Hermano() {
  return (
    <section className="cta">
      <img className="cta__fondo" src={img('rostro-detalle.jpg')} alt="" aria-hidden="true" />
      <div className="contenedor cta__contenido">
        <img className="cta__escudo" src={hermandad.escudo} alt="" />
        <div>
          <p className="eyebrow eyebrow--oro">Sangre de tu Sangre</p>
          <h2>Hazte hermano del Cristo de la Sangre</h2>
          <p>
            Acompaña al Señor de Pedrera el Viernes Santo, participa en sus cultos y ayuda a que esta
            devoción siga pasando de padres a hijos.
          </p>
        </div>
        <a className="boton boton--oro" href={hermandad.facebook} target="_blank" rel="noreferrer">
          Escríbenos
        </a>
      </div>
    </section>
  )
}
