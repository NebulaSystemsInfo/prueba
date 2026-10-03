import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { hermandad, navegacion } from '../data.js'

export default function Header() {
  const [abierto, setAbierto] = useState(false)
  const [solido, setSolido] = useState(false)
  const [activa, setActiva] = useState(null)

  useEffect(() => {
    const onScroll = () => setSolido(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Marca en el menú la sección que se está viendo
  useEffect(() => {
    const secciones = navegacion.map((n) => document.getElementById(n.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => { if (e.isIntersecting) setActiva(e.target.id) })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    secciones.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = abierto ? 'hidden' : ''
    if (!abierto) return
    const onKey = (e) => e.key === 'Escape' && setAbierto(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [abierto])

  const cerrar = () => setAbierto(false)

  return (
    <header className={`header ${solido ? 'header--solido' : ''} ${abierto ? 'header--abierto' : ''}`}>
      <div className="contenedor header__barra">
        <a href="#inicio" className="header__marca" onClick={cerrar} aria-label="Inicio">
          <Logo />
        </a>
        <button
          className="hamburguesa"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          aria-controls="menu-principal"
          onClick={() => setAbierto(!abierto)}
        >
          <span /><span /><span />
        </button>
      </div>
      <nav id="menu-principal" className="nav" aria-label="Secciones">
        <img className="nav__escudo" src={hermandad.escudo} alt="" />
        <ul>
          {navegacion.map((item, i) => (
            <li key={item.id} style={{ '--i': i }}>
              <a
                href={`#${item.id}`}
                onClick={cerrar}
                className={activa === item.id ? 'activo' : undefined}
                aria-current={activa === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="boton boton--oro nav__cta" href={hermandad.facebook} target="_blank" rel="noreferrer" onClick={cerrar}>
          Hazte hermano
        </a>
      </nav>
    </header>
  )
}
