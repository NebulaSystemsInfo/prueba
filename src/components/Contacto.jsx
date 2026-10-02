import Titulo from './Titulo.jsx'
import { hermandad, img } from '../data.js'

export default function Contacto() {
  const mapa = `https://maps.google.com/maps?q=${encodeURIComponent('Calle Santo Cristo 84, Pedrera, Sevilla')}&z=16&output=embed`
  return (
    <section id="contacto" className="seccion seccion--cal">
      <div className="contenedor">
        <Titulo pre="Dónde estamos">Contacto</Titulo>
        <div className="contacto">
          <div className="contacto__datos">
            <div className="contacto__bloque">
              <h3>Sede canónica</h3>
              <p><strong>{hermandad.sedeCanonica}</strong><br />{hermandad.direccionErmita}</p>
              <a href={hermandad.mapa} target="_blank" rel="noreferrer">Cómo llegar →</a>
            </div>
            <div className="contacto__bloque">
              <h3>Casa Hermandad</h3>
              <p>{hermandad.casaHermandad}</p>
            </div>
            <div className="contacto__bloque">
              <h3>Síguenos</h3>
              <ul className="redes">
                <li>
                  <a href={hermandad.facebook} target="_blank" rel="noreferrer">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v9h4v-9h3l1-4h-4V9c0-.6.4-1 1-1z" /></svg>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href={hermandad.twitter} target="_blank" rel="noreferrer">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.2 2H21l-6.6 7.6L22 22h-6l-4.7-6.2L5.9 22H3l7.1-8.1L2.5 2h6.1l4.3 5.7L18.2 2zm-1 18h1.6L7 3.7H5.3L17.2 20z" /></svg>
                    @StCristoPedrera
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {import.meta.env.VITE_SIN_MAPA ? (
            <a className="contacto__mapa contacto__mapa--enlace" href={hermandad.mapa} target="_blank" rel="noreferrer">
              <img src={img('paso-ermita-2.jpg')} alt="" />
              <span>Ver la ermita en Google Maps →</span>
            </a>
          ) : (
            <iframe className="contacto__mapa" title="Mapa de la Ermita del Santo Cristo" src={mapa} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          )}
        </div>
      </div>
    </section>
  )
}
