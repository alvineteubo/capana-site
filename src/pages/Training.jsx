import EnPreparation from '../components/EnPreparation.jsx'
import PageIntro from '../components/PageIntro.jsx'

// Contenu provisoire : cette page est développée dans une étape ultérieure.
export default function Training() {
  return (
    <PageIntro
      surtitre="Formations"
      titre="Apprendre l’apiculture, de la théorie au rucher"
      chapeau="Contactez-nous pour connaître les prochaines sessions et les modalités de formation."
    >
      <EnPreparation />
    </PageIntro>
  )
}
