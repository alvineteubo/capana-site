import { NavLink } from 'react-router-dom'
import { MapPin, X } from 'lucide-react'
import { site } from '../config/site.js'
import { navigationPrincipale } from '../data/navigation.js'
import CartLink from './CartLink.jsx'
import Logo from './Logo.jsx'
import './MobileMenu.css'

// Menu mobile plein écran. Il repose sur l'élément natif <dialog> ouvert avec showModal() :
// le navigateur piège le focus, rend le reste de la page inerte, ferme avec Échap
// et rend le focus au bouton d'ouverture à la fermeture.
export default function MobileMenu({ ref, onClose }) {
  const fermer = () => ref.current?.close()

  return (
    <dialog ref={ref} id="menu-mobile" className="mobile-menu" aria-label="Menu" onClose={onClose}>
      <div className="mobile-menu__barre">
        <Logo hauteur={52} />
        <div className="mobile-menu__actions">
          <CartLink onClick={fermer} />
          <button type="button" className="mobile-menu__fermer" onClick={fermer} data-focus-initial>
            <X size={26} strokeWidth={1.6} aria-hidden="true" />
            <span className="visually-hidden">Fermer le menu</span>
          </button>
        </div>
      </div>

      <nav className="mobile-menu__nav" aria-label="Navigation principale">
        <ul>
          {navigationPrincipale.map(({ label, to }) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} className="mobile-menu__lien" onClick={fermer}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <p className="mobile-menu__lieu">
        <MapPin size={16} strokeWidth={1.6} aria-hidden="true" />
        {site.localisation}
      </p>
    </dialog>
  )
}
