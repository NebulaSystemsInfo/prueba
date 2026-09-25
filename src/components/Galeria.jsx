import Titulo from './Titulo.jsx'
import { galeria, hermandad } from '../data.js'

export default function Galeria() {
  return (
    <section id="galeria" className="seccion">
      <div className="contenedor">
        <Titulo pre="Imágenes">Galería</Titulo>
        <div className="galeria">
          {galeria.map((g) => (
            <figure key={g.titulo} className={`galeria__item ${g.clase}`}>
              {g.imagen ? (
                <img src={g.imagen} alt={g.titulo} loading="lazy" />
              ) : (
                <img className="galeria__escudo" src={hermandad.escudo} alt="" />
              )}
              <figcaption>{g.titulo}</figcaption>
            </figure>
          ))}
        </div>
        <p className="galeria__mas">
          Más fotografías en nuestro{' '}
          <a href={hermandad.facebook} target="_blank" rel="noreferrer">Facebook</a>.
        </p>
      </div>
    </section>
  )
}
