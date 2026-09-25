import { hermandad } from '../data.js'

export default function Hermano() {
  return (
    <section id="hermano" className="cta">
      <div className="contenedor cta__contenido">
        <img className="cta__escudo" src={hermandad.escudo} alt="" />
        <div>
          <h2>Hazte hermano del Cristo de la Sangre</h2>
          <p>
            Forma parte de nuestra historia. Acompaña a nuestro Titular, participa en los cultos y
            ayuda a mantener viva la tradición de Pedrera.
          </p>
        </div>
        <a className="boton boton--blanco" href={hermandad.facebook} target="_blank" rel="noreferrer">
          Escríbenos
        </a>
      </div>
    </section>
  )
}
