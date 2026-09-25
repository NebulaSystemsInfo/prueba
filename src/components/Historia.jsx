import Titulo from './Titulo.jsx'
import { hitos } from '../data.js'

export default function Historia() {
  return (
    <section id="historia" className="seccion">
      <div className="contenedor">
        <Titulo pre="Nuestra hermandad">Historia y tradición</Titulo>
        <p className="intro">
          Una de las devociones más antiguas de Pedrera. Generación tras generación, los
          pedrereños acompañan al Santísimo Cristo de la Sangre desde su capilla de la calle
          Santo Cristo.
        </p>
        <ol className="linea-tiempo">
          {hitos.map((h) => (
            <li key={h.titulo} className="hito">
              <span className="hito__fecha">{h.fecha}</span>
              <h3>{h.titulo}</h3>
              <p>{h.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
