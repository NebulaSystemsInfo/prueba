import Titulo from './Titulo.jsx'
import { hitos, img } from '../data.js'

export default function Historia() {
  return (
    <section id="historia" className="seccion seccion--cal">
      <div className="contenedor historia">
        <div className="historia__fotos">
          <img className="historia__foto1" src={img('cristo-ermita.jpg')} alt="El Cristo de la Sangre en su paso ante la fachada encalada de la ermita" loading="lazy" />
          <img className="historia__foto2" src={img('costaleros.jpg')} alt="Costaleros de la hermandad portando el paso por las calles de Pedrera" loading="lazy" />
        </div>
        <div className="historia__texto">
          <Titulo pre="Nuestra historia" izquierda>Cinco siglos junto al Señor de Pedrera</Titulo>
          <p className="lead">
            Pocas devociones están tan unidas a Pedrera como la del Santísimo Cristo de la Sangre.
            Su hermandad, posiblemente del siglo XVI, custodia la imagen más antigua del pueblo en
            su ermita de la calle Santo Cristo.
          </p>
          <ol className="hitos">
            {hitos.map((h) => (
              <li key={h.titulo}>
                <span className="hitos__fecha">{h.fecha}</span>
                <div>
                  <h3>{h.titulo}</h3>
                  <p>{h.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
