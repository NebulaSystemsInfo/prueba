import Titulo from './Titulo.jsx'
import { hermandad, paleta } from '../data.js'

export default function Escudo() {
  return (
    <section id="escudo" className="seccion seccion--cal escudo">
      <div className="contenedor escudo__grid">
        <div className="escudo__imagen">
          <img src={hermandad.escudo} alt="Escudo de la Hermandad: cruz de San Juan dorada con un pelícano de plata sobre fondo verde" loading="lazy" />
        </div>
        <div>
          <Titulo pre="Heráldica" izquierda>Nuestro escudo</Titulo>
          <p className="lead">
            Sobre un óvalo verde se alza la <strong>cruz de San Juan</strong>, bordada en oro. En su
            centro, un <strong>pelícano</strong> de plata alimenta a sus polluelos con su propia
            sangre: el antiguo símbolo de la Eucaristía y del amor de Cristo, que se entrega por los
            suyos.
          </p>
          <p>
            Lo rodean los dos lemas de la hermandad: <em>«Símbolo de la Paz»</em> y{' '}
            <em>«Sangre de tu Sangre»</em>.
          </p>
          <h3 className="paleta__titulo">Los colores de la hermandad</h3>
          <ul className="paleta">
            {paleta.map((c) => (
              <li key={c.hex}>
                <span className="paleta__muestra" style={{ background: c.hex }} />
                <strong>{c.nombre}</strong>
                <span>{c.uso}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
