import EnPreparation from '../components/EnPreparation.jsx'
import PageIntro from '../components/PageIntro.jsx'

// Contenu provisoire : cette page est développée dans une étape ultérieure.
export default function Contact() {
  return (
    <PageIntro
      surtitre="Contact"
      titre="Parlons de votre projet"
      chapeau="Une question sur un produit, un équipement ou une formation ? CAPANA vous répond depuis Bangangté, Ouest Cameroun."
    >
      <EnPreparation vers="produits" />
    </PageIntro>
  )
}
