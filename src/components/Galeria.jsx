import { useCallback, useEffect, useState } from 'react'
import Titulo from './Titulo.jsx'
import { galeria, hermandad } from '../data.js'

export default function Galeria() {
  const [actual, setActual] = useState(null)
  const total = galeria.length
  const mover = useCallback((paso) => setActual((i) => (i + paso + total) % total), [total])

  useEffect(() => {
    if (actual === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActual(null)
      if (e.key === 'ArrowRight') mover(1)
      if (e.key === 'ArrowLeft') mover(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [actual, mover])

  const foto = actual !== null ? galeria[actual] : null

  return (
    <section id="galeria" className="seccion seccion--noche">
      <div className="contenedor">
        <Titulo pre="Imágenes" claro>Galería</Titulo>
        <div className="galeria">
          {galeria.map((g, i) => (
            <button key={g.titulo} className="galeria__item" onClick={() => setActual(i)} aria-label={`Ampliar: ${g.titulo}`}>
              <img src={g.src} alt={g.titulo} loading="lazy" />
              <span>{g.titulo}</span>
            </button>
          ))}
        </div>
        <p className="nota nota--claro">
          Más fotografías en el{' '}
          <a href={hermandad.facebook} target="_blank" rel="noreferrer">Facebook de la hermandad</a>.
        </p>
      </div>

      {foto && (
        <div className="visor" role="dialog" aria-modal="true" aria-label={foto.titulo} onClick={() => setActual(null)}>
          <button className="visor__cerrar" aria-label="Cerrar" onClick={() => setActual(null)}>×</button>
          <button className="visor__nav visor__nav--prev" aria-label="Anterior" onClick={(e) => { e.stopPropagation(); mover(-1) }}>‹</button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={foto.src} alt={foto.titulo} />
            <figcaption>
              {foto.titulo} <small>Foto: {foto.credito} · {actual + 1}/{total}</small>
            </figcaption>
          </figure>
          <button className="visor__nav visor__nav--next" aria-label="Siguiente" onClick={(e) => { e.stopPropagation(); mover(1) }}>›</button>
        </div>
      )}
    </section>
  )
}
