import { images } from '../data/images.js'

// Attributs <img> d'une image du catalogue (src, srcSet, width, height).
// `id` est une clé de src/data/images.js ; `sizes` décrit la largeur d'affichage (ex. '(min-width: 62rem) 50vw, 100vw').
// Renvoie null si l'identifiant est inconnu, pour que l'affichage puisse prévoir un repli.
export function imageProps(id, sizes) {
  const image = images[id]
  if (!image) return null
  const srcSet = image.largeurs.map((l) => `${image.base}-${l}.webp ${l}w`).join(', ')
  const moyenne = image.largeurs[Math.floor(image.largeurs.length / 2)]
  return {
    src: `${image.base}-${moyenne}.webp`,
    srcSet,
    sizes,
    width: image.largeur,
    height: image.hauteur,
  }
}
