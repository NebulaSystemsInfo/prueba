import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { navegacion } from '../data.js'

export default function Header() {
  const [abierto, setAbierto] = useState(false)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = abierto ? 'hidden' : ''
  }, [abierto])

  return (
    <header className={`header ${scroll || abierto ? 'header--solido' : ''}`}>
      <div className="contenedor header__barra">
        <a href="#inicio" className="header__marca" onClick={() => setAbierto(false)}>
          <Logo claro />
        </a>
        <button
          className={`hamburguesa ${abierto ? 'hamburguesa--abierta' : ''}`}
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          aria-controls="menu-principal"
          onClick={() => setAbierto(!abierto)}
        >
          <span /><span /><span />
        </button>
        <nav id="menu-principal" className={`nav ${abierto ? 'nav--abierta' : ''}`}>
          <ul>
            {navegacion.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={() => setAbierto(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
