import Titulo from './Titulo.jsx'
import { hermandad } from '../data.js'

export default function Titular() {
  return (
    <section id="titular" className="seccion seccion--verde">
      <div className="contenedor titular">
        <div className="titular__imagen">
          {/* Sustituye por una fotografía del Titular: <img src="/titular.jpg" alt="..." /> */}
          <div className="titular__marco">
            <img src={hermandad.escudo} alt="" />
          </div>
        </div>
        <div className="titular__texto">
          <Titulo pre="Nuestro Titular" claro>
            Santísimo Cristo de la Sangre
          </Titulo>
          <p>
            Crucificado de escuela granadina del siglo XVI, de autor desconocido. Su rostro sereno
            y la sangre que brota de sus llagas han hecho de Él el refugio de Pedrera en los
            momentos de alegría y de dolor.
          </p>
          <blockquote>
            «Por su Sangre hemos sido redimidos»
            <cite>Efesios 1, 7</cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
