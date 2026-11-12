import { site } from '../config/site.js'
import './Logo.css'

const sources = (extension) =>
  site.logo.largeurs.map((l) => `${site.logo.base}-${l}.${extension} ${l}w`).join(', ')

// Logo officiel de CAPANA. Seul composant à afficher le logo : en-tête, menu mobile, pied de page.
// `hauteur` est la hauteur affichée en pixels ; la largeur suit les proportions d'origine.
export default function Logo({ hauteur = 48, className = '' }) {
  const { largeur: l, hauteur: h } = site.logo.ratio
  const largeur = Math.round((hauteur * l) / h)
  const repli = site.logo.largeurs[1] ?? site.logo.largeurs[0]

  return (
    <picture className={`logo ${className}`.trim()}>
      <source type="image/webp" srcSet={sources('webp')} sizes={`${largeur}px`} />
      <img
        src={`${site.logo.base}-${repli}.png`}
        srcSet={sources('png')}
        sizes={`${largeur}px`}
        width={largeur}
        height={hauteur}
        alt={site.nom}
        decoding="async"
      />
    </picture>
  )
}
