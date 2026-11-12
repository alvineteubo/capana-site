import Container from './Container.jsx'
import SectionTitle from './SectionTitle.jsx'
import './PageIntro.css'

// Ouverture d'une page intérieure : sur-titre, titre h1, chapeau, puis contenu libre.
export default function PageIntro({ surtitre, titre, chapeau, children }) {
  return (
    <section className="page-intro">
      <Container>
        <SectionTitle niveau="h1" surtitre={surtitre} titre={titre} chapeau={chapeau} />
        {children && <div className="page-intro__suite">{children}</div>}
      </Container>
    </section>
  )
}
