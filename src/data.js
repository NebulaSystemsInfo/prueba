// Contenido editable de la landing. Cambia aquí textos, enlaces e imágenes.

export const hermandad = {
  nombreCorto: 'Cristo de la Sangre',
  nombreCompleto:
    'Ilustre y Fervorosa Hermandad y Cofradía de Nazarenos del Santísimo Cristo de la Sangre',
  localidad: 'Pedrera (Sevilla)',
  // Sustituye estos archivos en /public por el escudo y el logotipo oficiales
  // (por ejemplo, /escudo.png y /logotipo.png) y actualiza las rutas.
  escudo: '/escudo.svg',
  logotipo: null,
  facebook: 'https://www.facebook.com/hmndadsmocristodelasangre.depedrera.3/',
  twitter: 'https://twitter.com/stcristopedrera',
  direccion: 'Calle Santo Cristo, 41566 Pedrera (Sevilla)',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Calle+Santo+Cristo+Pedrera+Sevilla',
}

export const navegacion = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'historia', label: 'Historia' },
  { id: 'titular', label: 'Titular' },
  { id: 'semana-santa', label: 'Semana Santa' },
  { id: 'cultos', label: 'Cultos' },
  { id: 'hermano', label: 'Hazte hermano' },
  { id: 'contacto', label: 'Contacto' },
]

export const hitos = [
  {
    fecha: 'Siglo XVI',
    titulo: 'La imagen',
    texto:
      'El Santísimo Cristo de la Sangre es un crucificado de escuela granadina, de autor anónimo, que ha presidido la devoción de Pedrera durante siglos.',
  },
  {
    fecha: 'Siglo XIX',
    titulo: 'Su capilla',
    texto:
      'La hermandad cuenta con capilla propia en la calle Santo Cristo, levantada en el siglo XIX y convertida en corazón de la vida cofrade del barrio.',
  },
  {
    fecha: '2022',
    titulo: 'Cartel de la Semana Santa',
    texto:
      'La imagen del Cristo de la Sangre protagonizó el cartel oficial de la Semana Santa de Pedrera, reflejo del cariño de todo el pueblo.',
  },
  {
    fecha: 'Hoy',
    titulo: 'Una hermandad viva',
    texto:
      'Hermanos, costaleros, grupo joven y colaboradores mantienen viva una tradición que pasa de padres a hijos.',
  },
]

export const habito = [
  { pieza: 'Túnica y capirote', color: 'Verde', muestra: 'var(--verde)' },
  { pieza: 'Capa', color: 'Blanca', muestra: 'var(--blanco)' },
  { pieza: 'Botonadura', color: 'Roja', muestra: 'var(--rojo)' },
]

export const cultos = [
  {
    titulo: 'Quinario',
    cuando: 'Cuaresma',
    texto: 'Solemnes cultos en honor al Santísimo Cristo de la Sangre en preparación de la Semana Santa.',
  },
  {
    titulo: 'Besapiés',
    cuando: 'Cuaresma',
    texto: 'Jornada en la que devotos y hermanos pueden acercarse a venerar a nuestro Titular.',
  },
  {
    titulo: 'Estación de penitencia',
    cuando: 'Semana Santa',
    texto: 'El Cristo de la Sangre recorre las calles de Pedrera acompañado por sus nazarenos.',
  },
  {
    titulo: 'Misa de hermandad',
    cuando: 'Durante el año',
    texto: 'Encuentro periódico de los hermanos en la capilla. Consulta fechas en nuestras redes.',
  },
]

export const galeria = [
  { titulo: 'El Titular', clase: 'g1' },
  { titulo: 'La capilla', clase: 'g2' },
  { titulo: 'Nazarenos', clase: 'g3' },
  { titulo: 'El paso', clase: 'g4' },
  { titulo: 'Cuaresma', clase: 'g5' },
  { titulo: 'Grupo joven', clase: 'g6' },
]
