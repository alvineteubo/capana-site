import { ArrowRight } from 'lucide-react'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import './Home.css'

// Version provisoire : la page d'accueil complète est réalisée à l'étape 4.
export default function Home() {
  return (
    <section className="home-hero">
      <Container>
        <SectionTitle
          niveau="h1"
          surtitre="Bangangté · Ndé · Ouest Cameroun"
          titre="Du cœur du Ndé, la richesse de la nature dans chaque goutte."
          chapeau="Découvrez Miel du Ndé et l’univers apicole de CAPANA, au cœur de Bangangté, dans l’Ouest du Cameroun."
        />
        <div className="home-hero__actions">
          <Button to="/produits" icone={ArrowRight}>
            Découvrir nos produits
          </Button>
          <Button to="/entreprise" variante="secondaire">
            Explorer notre savoir-faire
          </Button>
        </div>
      </Container>
    </section>
  )
}
