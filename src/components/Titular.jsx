import Titulo from './Titulo.jsx'
import { fichaTitular, img } from '../data.js'

export default function Titular() {
  return (
    <section id="titular" className="seccion seccion--verde titular">
      <div className="contenedor titular__grid">
        <figure className="titular__foto">
          <img src={img('rostro.jpg')} alt="Rostro del Santísimo Cristo de la Sangre con la corona de espinas y las potencias de plata" loading="lazy" />
        </figure>
        <div className="titular__texto">
          <Titulo pre="Nuestro Titular" claro izquierda>Santísimo Cristo de la Sangre</Titulo>
          <p className="lead">
            Crucificado de escuela granadina, tallado en el siglo XVI por un autor desconocido.
            El pueblo lo llama con cariño <em>el Señor de Pedrera</em>, y a Él se encomienda en
            la alegría y en el dolor.
          </p>
          <dl className="ficha">
            {fichaTitular.map((f) => (
              <div key={f.etiqueta}>
                <dt>{f.etiqueta}</dt>
                <dd>{f.valor}</dd>
              </div>
            ))}
          </dl>
          <figure className="titular__detalle">
            <img src={img('potencias.jpg')} alt="Detalle de la corona de espinas y las potencias de plata" loading="lazy" />
            <figcaption>Corona de espinas y potencias. Foto: IAPH</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
