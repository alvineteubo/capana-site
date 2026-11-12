import './Container.css'

// Conteneur centré. `taille` : "large" (défaut), "etroit" pour les textes longs.
export default function Container({ as: Tag = 'div', taille = 'large', className = '', children, ...rest }) {
  return (
    <Tag className={`container container--${taille} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
