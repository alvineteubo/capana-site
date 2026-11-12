import './SectionTitle.css'

// Titre de section éditorial : sur-titre en petites capitales, titre, chapeau facultatif.
// `niveau` choisit la balise (h1 pour le titre de page, h2 par défaut).
// `numero` (ex. "01") est réservé à la page d'accueil.
export default function SectionTitle({ surtitre, titre, chapeau, niveau = 'h2', numero, className = '' }) {
  const Titre = niveau
  return (
    <header className={`section-title section-title--${niveau} ${className}`.trim()}>
      {(surtitre || numero) && (
        <p className="section-title__surtitre">
          {numero && <span className="section-title__numero">{numero}</span>}
          {surtitre}
        </p>
      )}
      <Titre className="section-title__titre">{titre}</Titre>
      {chapeau && <p className="section-title__chapeau">{chapeau}</p>}
    </header>
  )
}
