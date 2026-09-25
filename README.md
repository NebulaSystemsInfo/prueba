# Hermandad del Santísimo Cristo de la Sangre · Pedrera

Landing page responsive en React (Vite) para la Hermandad del Santísimo Cristo de la Sangre de Pedrera (Sevilla).

## Uso

```bash
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # compilación de producción en dist/
npm run preview  # previsualizar la compilación
```

## Colores de la hermandad

| Color | Uso | Valor |
|---|---|---|
| Verde | Túnica y capirote | `#0f3b2a` |
| Blanco | Capa | `#fdfaf2` |
| Rojo | Botonadura / la Sangre | `#9b111e` |
| Oro | Detalles y corona | `#c9a24a` |

Están definidos como variables CSS en `src/styles.css` (`:root`).

## Escudo y logotipo oficiales

`public/escudo.svg` es una recreación vectorial provisional del escudo, con los colores de la hermandad.
Para usar el escudo y el logotipo oficiales de la página de Facebook:

1. Descarga las imágenes y cópialas a `public/` (por ejemplo, `public/escudo.png` y `public/logotipo.png`).
2. Actualiza `escudo` y `logotipo` en `src/data.js`.

## Contenido

Todos los textos (historia, cultos, galería, enlaces y dirección) están en `src/data.js`.
Para añadir fotos a la galería, pon los archivos en `public/` y añade `imagen: '/foto.jpg'` al elemento correspondiente.
