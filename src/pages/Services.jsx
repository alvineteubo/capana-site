import EnPreparation from '../components/EnPreparation.jsx'
import PageIntro from '../components/PageIntro.jsx'

// Contenu provisoire : cette page est développée dans une étape ultérieure.
export default function Services() {
  return (
    <PageIntro
      surtitre="Services et accompagnement"
      titre="Installer, conseiller, suivre"
      chapeau="Installation de ruchers, accompagnement des porteurs de projet, rédaction de projets, conseils techniques et suivi des exploitations apicoles."
    >
      <EnPreparation />
    </PageIntro>
  )
}
