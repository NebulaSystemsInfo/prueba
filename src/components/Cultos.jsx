import Titulo from './Titulo.jsx'
import { cultos } from '../data.js'

export default function Cultos() {
  return (
    <section id="cultos" className="seccion seccion--crema">
      <div className="contenedor">
        <Titulo pre="Vida de hermandad">Cultos y actos</Titulo>
        <div className="tarjetas">
          {cultos.map((c) => (
            <article key={c.titulo} className="tarjeta">
              <span className="tarjeta__cuando">{c.cuando}</span>
              <h3>{c.titulo}</h3>
              <p>{c.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
