import Titulo from './Titulo.jsx'
import { img } from '../data.js'

const habito = [
  { pieza: 'Túnica', color: 'Verde', muestra: 'var(--verde)' },
  { pieza: 'Capirote', color: 'Verde', muestra: 'var(--verde)' },
  { pieza: 'Capa', color: 'Blanca', muestra: 'var(--cal)' },
]

export default function ViernesSanto() {
  return (
    <section id="viernes-santo" className="viernes">
      <div className="viernes__cabecera">
        <img src={img('paso-frente.jpg')} alt="" aria-hidden="true" />
        <div className="contenedor">
          <Titulo pre="Estación de penitencia" claro>Viernes Santo</Titulo>
          <p className="viernes__hora">
            <span>18:00 h</span> Salida desde la Ermita del Santo Cristo
          </p>
        </div>
      </div>

      <div className="contenedor viernes__grid">
        <div className="viernes__texto">
          <p className="lead">
            Cuando el sol de la tarde aún baña la portada de la ermita, Pedrera entera se congrega
            para ver salir a su Cristo. La hermandad tiene un único paso, tallado en madera color
            caoba, que sus devotos llevan en andas a hombros. Muchos lo hacen por promesa, pidiendo
            al Señor que les conceda lo que le ruegan.
          </p>
          <p>
            Cerca de 400 nazarenos le acompañan por las calles del pueblo, entre el olor a cera y el
            sonido de las marchas, hasta que el Cristo vuelve a su ermita ya entrada la noche.
          </p>
          <div className="habito">
            <h3>El hábito nazareno</h3>
            <ul>
              {habito.map((h) => (
                <li key={h.pieza}>
                  <span className="habito__muestra" style={{ background: h.muestra }} />
                  <strong>{h.pieza}</strong> {h.color}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="viernes__fotos">
          <img src={img('paso-canastilla.jpg')} alt="Canastilla del paso tallada en madera color caoba" loading="lazy" />
          <img src={img('cristo-atardecer.jpg')} alt="El Cristo de la Sangre al atardecer" loading="lazy" />
          <img src={img('paso-calle.jpg')} alt="El paso avanzando por una calle de Pedrera" loading="lazy" />
          <img src={img('rostro-perfil.jpg')} alt="El Cristo bajo la cartela del INRI" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
