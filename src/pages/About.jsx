import EnPreparation from '../components/EnPreparation.jsx'
import PageIntro from '../components/PageIntro.jsx'

// Contenu provisoire : cette page est développée dans une étape ultérieure.
export default function About() {
  return (
    <PageIntro
      surtitre="L’entreprise"
      titre="Un savoir-faire apicole enraciné dans le Ndé"
      chapeau="CAPANA, Centre Apicole de Production Artificiel de Nucléi d’Abeille, travaille avec les abeilles à Bangangté, dans l’Ouest du Cameroun."
    >
      <EnPreparation />
    </PageIntro>
  )
}
