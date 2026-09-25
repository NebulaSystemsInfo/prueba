import Titulo from './Titulo.jsx'
import { habito } from '../data.js'

export default function SemanaSanta() {
  return (
    <section id="semana-santa" className="seccion">
      <div className="contenedor semana">
        <div>
          <Titulo pre="Estación de penitencia">Semana Santa</Titulo>
          <p className="intro intro--izq">
            Cada Semana Santa el Santísimo Cristo de la Sangre sale de su capilla para recorrer
            las calles de Pedrera, acompañado por su cortejo de nazarenos, costaleros y devotos.
            Consulta horarios e itinerario en nuestras redes sociales.
          </p>
        </div>
        <div className="habito">
          <h3>El hábito nazareno</h3>
          <div className="habito__nazareno" aria-hidden="true">
            <svg viewBox="0 0 120 200">
              <path d="M60 6 L82 70 L38 70 Z" fill="var(--verde)" />
              <path d="M38 70 Q60 78 82 70 L100 196 L20 196 Z" fill="var(--verde)" />
              <path d="M38 70 L20 196 L8 196 L30 72 Z M82 70 L100 196 L112 196 L90 72 Z" fill="#fdfaf2" />
              <rect x="44" y="40" width="7" height="4" rx="2" fill="#111" />
              <rect x="69" y="40" width="7" height="4" rx="2" fill="#111" />
              {[92, 108, 124, 140, 156, 172].map((y) => (
                <circle key={y} cx="60" cy={y} r="3" fill="var(--rojo)" />
              ))}
            </svg>
          </div>
          <ul>
            {habito.map((h) => (
              <li key={h.pieza}>
                <span className="muestra" style={{ background: h.muestra }} />
                <strong>{h.pieza}</strong>
                <span>{h.color}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
