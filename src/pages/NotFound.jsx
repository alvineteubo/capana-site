import { ArrowRight } from 'lucide-react'
import Button from '../components/Button.jsx'
import PageIntro from '../components/PageIntro.jsx'

export default function NotFound() {
  return (
    <PageIntro
      surtitre="Erreur 404"
      titre="Cette page est introuvable"
      chapeau="L’adresse a peut-être changé, ou la page n’existe plus. Le reste du site, lui, est bien là."
    >
      <div className="page-intro__actions">
        <Button to="/" icone={ArrowRight}>
          Retour à l’accueil
        </Button>
        <Button to="/produits" variante="secondaire">
          Découvrir nos produits
        </Button>
      </div>
    </PageIntro>
  )
}
