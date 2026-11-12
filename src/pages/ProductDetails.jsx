import EnPreparation from '../components/EnPreparation.jsx'
import PageIntro from '../components/PageIntro.jsx'

// Contenu provisoire : cette page est développée dans une étape ultérieure.
export default function ProductDetails() {
  return (
    <PageIntro
      surtitre="Fiche produit"
      titre="Fiche produit en préparation"
      chapeau="Les fiches détaillées du catalogue arrivent bientôt."
    >
      <EnPreparation vers="produits" />
    </PageIntro>
  )
}
