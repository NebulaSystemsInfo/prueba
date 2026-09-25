import { hermandad } from '../data.js'

// Logotipo: escudo + nombre. Si existe un logotipo oficial (hermandad.logotipo)
// se muestra en su lugar.
export default function Logo({ claro = false }) {
  if (hermandad.logotipo) {
    return <img className="logo-img" src={hermandad.logotipo} alt={`Logotipo ${hermandad.nombreCorto}`} />
  }
  return (
    <span className={`logo ${claro ? 'logo--claro' : ''}`}>
      <img className="logo__escudo" src={hermandad.escudo} alt="" />
      <span className="logo__texto">
        <span className="logo__pre">Hdad. Stmo.</span>
        <span className="logo__nombre">{hermandad.nombreCorto}</span>
        <span className="logo__lugar">Pedrera</span>
      </span>
    </span>
  )
}
