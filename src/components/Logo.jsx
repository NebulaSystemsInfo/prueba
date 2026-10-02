import { hermandad } from '../data.js'

export default function Logo() {
  return (
    <span className="logo">
      <img className="logo__escudo" src={hermandad.escudo} alt="" width="40" height="50" />
      <span className="logo__texto">
        <span className="logo__pre">Hermandad del Stmo.</span>
        <span className="logo__nombre">Cristo de la Sangre</span>
        <span className="logo__pre">Pedrera</span>
      </span>
    </span>
  )
}
