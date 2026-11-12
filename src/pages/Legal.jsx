import EnPreparation from '../components/EnPreparation.jsx'
import PageIntro from '../components/PageIntro.jsx'

// Contenu provisoire : cette page est développée dans une étape ultérieure.
export default function Legal() {
  return (
    <PageIntro
      surtitre="Informations légales"
      titre="Mentions légales"
      chapeau="Les informations légales relatives au site et à son éditeur."
    >
      <EnPreparation />
    </PageIntro>
  )
}
