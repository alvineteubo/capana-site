import EnPreparation from '../components/EnPreparation.jsx'
import PageIntro from '../components/PageIntro.jsx'

// Contenu provisoire : cette page est développée dans une étape ultérieure.
export default function Products() {
  return (
    <PageIntro
      surtitre="Catalogue"
      titre="Produits de la ruche, équipements et essaims"
      chapeau="Miel pur du Ndé, produits de la ruche, kits et équipements apicoles, essaims et élevage."
    >
      <EnPreparation />
    </PageIntro>
  )
}
