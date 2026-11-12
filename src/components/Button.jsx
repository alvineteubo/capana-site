import { Link } from 'react-router-dom'
import './Button.css'

// Bouton de la charte. Rend un lien interne (`to`), un lien externe (`href`) ou un <button>.
// `variante` : "principal" | "secondaire" | "clair" (sur fond vert profond).
export default function Button({ to, href, variante = 'principal', icone: Icone, className = '', children, ...rest }) {
  const classes = `button button--${variante} ${className}`.trim()
  const contenu = (
    <>
      <span>{children}</span>
      {Icone && <Icone size={18} strokeWidth={1.75} aria-hidden="true" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {contenu}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {contenu}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...rest}>
      {contenu}
    </button>
  )
}
