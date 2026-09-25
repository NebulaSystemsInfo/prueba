export default function Titulo({ pre, children, claro = false }) {
  return (
    <div className={`titulo ${claro ? 'titulo--claro' : ''}`}>
      {pre && <p className="titulo__pre">{pre}</p>}
      <h2>{children}</h2>
      <span className="titulo__adorno" aria-hidden="true">
        <i /> ✚ <i />
      </span>
    </div>
  )
}
