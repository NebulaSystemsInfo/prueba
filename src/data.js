// Contenido de la landing. Textos verificados en fuentes públicas (ver README).
// Las imágenes están en src/assets/img; para añadir una, cópiala allí y úsala con img('nombre.jpg').

const imagenes = import.meta.glob('./assets/img/*.{jpg,png}', { eager: true, import: 'default' })
export const img = (nombre) => imagenes[`./assets/img/${nombre}`]

export const hermandad = {
  nombreCorto: 'Cristo de la Sangre',
  nombreCompleto:
    'Ilustre y Fervorosa Hermandad y Cofradía de Nazarenos del Santísimo Cristo de la Sangre',
  localidad: 'Pedrera (Sevilla)',
  escudo: img('escudo.png'),
  facebook: 'https://www.facebook.com/hmndadsmocristodelasangre.depedrera.3/',
  twitter: 'https://x.com/stcristopedrera',
  sedeCanonica: 'Ermita del Santo Cristo de la Sangre',
  direccionErmita: 'C/ Santo Cristo, 84 · 41566 Pedrera (Sevilla)',
  casaHermandad: 'C/ Río Corbones, 1 · Pedrera (Sevilla)',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Ermita+Santo+Cristo+de+la+Sangre+Pedrera',
}

export const navegacion = [
  { id: 'historia', label: 'Historia' },
  { id: 'titular', label: 'Titular' },
  { id: 'escudo', label: 'Escudo' },
  { id: 'viernes-santo', label: 'Viernes Santo' },
  { id: 'cuaresma', label: 'Cuaresma' },
  { id: 'galeria', label: 'Galería' },
  { id: 'contacto', label: 'Contacto' },
]

export const datosClave = [
  { valor: 's. XVI', texto: 'Fundación de la hermandad' },
  { valor: 'Viernes Santo', texto: 'Estación de penitencia, 18:00 h' },
  { valor: '≈ 400', texto: 'Nazarenos acompañan al Señor' },
]

export const hitos = [
  {
    fecha: 'Siglo XVI',
    titulo: 'Llega el Señor de Pedrera',
    texto:
      'Cuenta la tradición que una carreta que transportaba la imagen se detuvo a las afueras del pueblo, y allí se quedó el Cristo. Es la imagen más antigua del municipio.',
  },
  {
    fecha: 'Siglo XIX',
    titulo: 'Una ermita a su medida',
    texto:
      'La primitiva ermita del siglo XVIII se quedó pequeña. Una vecina de Pedrera y un vecino de Gilena costearon la actual capilla de la calle Santo Cristo.',
  },
  {
    fecha: '1892',
    titulo: 'El cólera de Gilena',
    texto:
      'Una epidemia de cólera asoló la vecina Gilena. Sus vecinos pidieron el Cristo y los hermanos lo llevaron hasta el límite entre los dos pueblos. Desde entonces se le atribuyen numerosos milagros.',
  },
  {
    fecha: '2022',
    titulo: 'Rostro de la Semana Santa',
    texto:
      'El rostro del Cristo protagonizó el cartel oficial de la Semana Santa de Pedrera, un óleo de la artista local Líbera Ángel.',
  },
]

export const fichaTitular = [
  { etiqueta: 'Imagen', valor: 'Crucificado' },
  { etiqueta: 'Escuela', valor: 'Granadina' },
  { etiqueta: 'Época', valor: 'Siglo XVI' },
  { etiqueta: 'Autor', valor: 'Anónimo' },
  { etiqueta: 'Ajuar', valor: 'Corona de espinas y potencias de plata' },
  { etiqueta: 'Sede', valor: 'Ermita del Santo Cristo' },
]

export const paleta = [
  { nombre: 'Verde hermandad', hex: '#153616', uso: 'Fondo del escudo, túnica y capirote' },
  { nombre: 'Oro viejo', hex: '#c9a85a', uso: 'Cruz de San Juan bordada' },
  { nombre: 'Plata', hex: '#e2e0d2', uso: 'Pelícano, potencias y corona' },
  { nombre: 'Granate', hex: '#781f2c', uso: 'Cartelería y cultos' },
  { nombre: 'Caoba', hex: '#8a4a3a', uso: 'Talla del paso' },
]

export const cultos = [
  {
    titulo: 'Solemne Triduo',
    cuando: 'Cuaresma · 20:00 h',
    texto:
      'Tres días de culto en honor al Titular en la Ermita del Santo Cristo, oficiados por el párroco y director espiritual.',
    imagen: img('triduo-2025.jpg'),
  },
  {
    titulo: 'Veneración del Cristo',
    cuando: 'Último día del Triduo',
    texto:
      'Al terminar el Triduo, el pueblo se acerca a besar los pies del Señor de Pedrera.',
    imagen: img('cristo-camarin.jpg'),
  },
  {
    titulo: 'Certamen de Marchas',
    cuando: 'Cuaresma',
    texto:
      'Bandas de Pedrera y de la comarca se reúnen en el Certamen de Marchas Procesionales y desfilan hasta las puertas de la ermita.',
    imagen: img('certamen-marchas.jpg'),
  },
  {
    titulo: 'Pregón y cartel',
    cuando: 'Antes de Semana Santa',
    texto:
      'La hermandad ha presentado el cartel y organizado el Pregón de la Semana Santa de Pedrera, pregonado en 2022 por su Grupo Joven.',
    imagen: img('pregon-2022.jpg'),
  },
]

export const galeria = [
  { src: img('paso-ermita.jpg'), titulo: 'El paso ante la ermita', credito: 'ArteSacro' },
  { src: img('rostro.jpg'), titulo: 'Rostro del Señor', credito: 'ArteSacro' },
  { src: img('paso-frente.jpg'), titulo: 'Viernes Santo por Pedrera', credito: 'ArteSacro' },
  { src: img('cristo-altar.jpg'), titulo: 'En su altar de cultos', credito: 'Semana Santa de Andalucía' },
  { src: img('paso-canastilla.jpg'), titulo: 'Canastilla tallada', credito: 'ArteSacro' },
  { src: img('cristo-atardecer.jpg'), titulo: 'Al caer la tarde', credito: 'ArteSacro' },
  { src: img('costaleros.jpg'), titulo: 'Sus costaleros', credito: 'ArteSacro' },
  { src: img('rostro-perfil.jpg'), titulo: 'Bajo el INRI', credito: 'ArteSacro' },
  { src: img('paso-calle.jpg'), titulo: 'De vuelta a casa', credito: 'ArteSacro' },
  { src: img('cristo-cielo.jpg'), titulo: 'Contra el cielo de Pedrera', credito: 'ArteSacro' },
  { src: img('cartel-2022.jpg'), titulo: 'Cartel de la Semana Santa 2022', credito: 'Ayto. de Pedrera' },
  { src: img('potencias.jpg'), titulo: 'Corona y potencias', credito: 'IAPH' },
  { src: img('paso-ermita-2.jpg'), titulo: 'Salida de la ermita', credito: 'ArteSacro' },
  { src: img('cristo-cruz.jpg'), titulo: 'Sobre la cruz', credito: 'ArteSacro' },
  { src: img('paso-frente-2.jpg'), titulo: 'Faldones verdes', credito: 'ArteSacro' },
]
