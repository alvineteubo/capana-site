import EnPreparation from '../components/EnPreparation.jsx'
import PageIntro from '../components/PageIntro.jsx'

// Contenu provisoire : cette page est développée dans une étape ultérieure.
export default function Gallery() {
  return (
    <PageIntro
      surtitre="Galerie"
      titre="Le rucher, l’atelier et les produits en images"
      chapeau="Un aperçu du travail de CAPANA, au plus près des abeilles."
    >
      <EnPreparation />
    </PageIntro>
  )
}
