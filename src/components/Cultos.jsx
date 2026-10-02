import Titulo from './Titulo.jsx'
import { cultos } from '../data.js'

export default function Cultos() {
  return (
    <section id="cuaresma" className="seccion seccion--cal">
      <div className="contenedor">
        <Titulo pre="Vida de hermandad">Cuaresma y cultos</Titulo>
        <div className="cultos">
          {cultos.map((c) => (
            <article key={c.titulo} className="culto">
              <div className="culto__imagen">
                <img src={c.imagen} alt="" loading="lazy" />
              </div>
              <div className="culto__cuerpo">
                <span className="culto__cuando">{c.cuando}</span>
                <h3>{c.titulo}</h3>
                <p>{c.texto}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="nota">Fechas y horarios de cada año, en el Facebook de la hermandad.</p>
      </div>
    </section>
  )
}
