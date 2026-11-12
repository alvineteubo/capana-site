import EnPreparation from '../components/EnPreparation.jsx'
import PageIntro from '../components/PageIntro.jsx'

// Contenu provisoire : cette page est développée dans une étape ultérieure.
export default function Cart() {
  return (
    <PageIntro
      surtitre="Panier"
      titre="Votre panier est vide"
      chapeau="Parcourez le catalogue pour ajouter des produits. Les commandes sont transmises à CAPANA par WhatsApp."
    >
      <EnPreparation vers="produits" />
    </PageIntro>
  )
}
