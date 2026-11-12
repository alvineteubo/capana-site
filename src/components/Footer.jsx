import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { site } from '../config/site.js'
import { navigationLegale, navigationPrincipale } from '../data/navigation.js'
import Container from './Container.jsx'
import Logo from './Logo.jsx'
import './Footer.css'

export default function Footer() {
  const annee = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <div className="footer__haut grille">
          <div className="footer__marque">
            {/* Le logo garde ses couleurs : il est posé sur un bloc clair, jamais inversé. */}
            <Link to="/" className="footer__logo" aria-label="CAPANA, retour à l’accueil">
              <Logo hauteur={72} />
            </Link>
            <p className="footer__signature">{site.signature}</p>
            <p className="footer__presentation">
              Apiculture et valorisation des produits de la ruche, au cœur du Ndé. Du miel aux essaims, des
              équipements aux formations.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Navigation du pied de page">
            <h2 className="footer__titre">Explorer</h2>
            <ul>
              {navigationPrincipale.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__contact">
            <h2 className="footer__titre">Nous trouver</h2>
            <p className="footer__lieu">
              <MapPin size={18} strokeWidth={1.6} aria-hidden="true" />
              {site.localisation}
            </p>
            <Link to="/contact" className="footer__lien-contact">
              Contacter CAPANA
            </Link>
          </div>
        </div>

        <div className="footer__bas">
          <p>
            © {annee} {site.nom}
          </p>
          <ul>
            {navigationLegale.map(({ label, to }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
