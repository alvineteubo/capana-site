import EnPreparation from '../components/EnPreparation.jsx'
import PageIntro from '../components/PageIntro.jsx'

// Contenu provisoire : cette page est développée dans une étape ultérieure.
export default function Privacy() {
  return (
    <PageIntro
      surtitre="Informations légales"
      titre="Politique de confidentialité"
      chapeau="La manière dont ce site traite vos données personnelles."
    >
      <EnPreparation />
    </PageIntro>
  )
}
