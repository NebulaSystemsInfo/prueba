export default function Titulo({ pre, children, claro = false, izquierda = false }) {
  return (
    <div className={`titulo ${claro ? 'titulo--claro' : ''} ${izquierda ? 'titulo--izq' : ''}`}>
      {pre && <p className="eyebrow">{pre}</p>}
      <h2>{children}</h2>
      <span className="titulo__adorno" aria-hidden="true">
        <i /><b>✠</b><i />
      </span>
    </div>
  )
}
