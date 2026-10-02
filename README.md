# Hermandad del Santísimo Cristo de la Sangre · Pedrera

Landing page responsive en React (Vite) para la Hermandad del Santísimo Cristo de la Sangre de Pedrera (Sevilla).

## Uso

```bash
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # compilación de producción en dist/
npm run preview  # previsualizar la compilación
```

## Identidad visual

- **Escudo oficial** (`src/assets/img/escudo.png`): foto de perfil de la página de Facebook de la hermandad, recortada sobre fondo transparente. Cruz de San Juan dorada con un pelícano de plata alimentando a sus polluelos, y los lemas «Símbolo de la Paz» y «Sangre de tu Sangre».
- **Paleta** (variables CSS en `src/styles.css`), muestreada de las imágenes reales:

| Color | Origen | Valor |
|---|---|---|
| Verde hermandad | Fondo del escudo, túnica y capirote | `#153616` |
| Oro viejo | Cruz de San Juan bordada | `#c9a85a` |
| Plata | Pelícano, corona y potencias | `#e2e0d2` |
| Granate | Cartelería de la hermandad | `#781f2c` |
| Caoba | Talla del paso | `#8a4a3a` |
| Cal / albero | Muros y recercados de la ermita | `#fbf8f0` / `#d3b26a` |

## Contenido y fuentes

Textos en `src/data.js`, contrastados con:
[ArteSacro](https://www.artesacro.org/Noticia.asp?idreg=30850),
[cofradiasyhermandades.es](https://www.cofradiasyhermandades.es/fichacofradia.php?cc=74004),
[Semana Santa de Andalucía](https://semanasantadeandalucia.es/hermandades/hermandad-del-cristo-de-la-sangre/),
[Ayuntamiento de Pedrera](https://www.pedrera.es/) y
[El Pespunte](https://www.elpespunte.es/actos-de-cuaresma-de-las-hermandades-de-jesus-nazareno-y-cristo-de-la-sangre-en-pedrera/).

## Fotografías

Las imágenes de `src/assets/img/` proceden de ArteSacro (Viernes Santo 2016), Semana Santa de Andalucía,
el IAPH, el Ayuntamiento de Pedrera y las redes de la hermandad, y se citan en el pie de página.
Antes de publicar la web, conviene pedir permiso a sus autores o sustituirlas por fotos propias de la hermandad.
Para añadir una foto: cópiala en `src/assets/img/` y úsala en `src/data.js` con `img('nombre.jpg')`.
