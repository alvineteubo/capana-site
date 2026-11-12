import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { navigationPrincipale } from '../data/navigation.js'
import useScrolled from '../hooks/useScrolled.js'
import CartLink from './CartLink.jsx'
import Container from './Container.jsx'
import Logo from './Logo.jsx'
import MobileMenu from './MobileMenu.jsx'
import './Header.css'

export default function Header() {
  const scrolled = useScrolled()
  const [menuOuvert, setMenuOuvert] = useState(false)
  const menuRef = useRef(null)

  const ouvrirMenu = () => {
    const menu = menuRef.current
    if (!menu) return
    menu.showModal()
    // Le focus arrive sur le bouton de fermeture plutôt que sur le premier lien.
    menu.querySelector('[data-focus-initial]')?.focus()
    setMenuOuvert(true)
  }

  return (
    <header className={`header${scrolled ? ' header--resserre' : ''}`}>
      <Container className="header__barre">
        <Link to="/" className="header__logo" aria-label="CAPANA, retour à l’accueil">
          <Logo hauteur={60} />
        </Link>

        <nav className="header__nav" aria-label="Navigation principale">
          <ul>
            {navigationPrincipale.map(({ label, to }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'} className="header__lien">
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <CartLink />
          <button
            type="button"
            className="header__menu"
            aria-haspopup="dialog"
            aria-expanded={menuOuvert}
            aria-controls="menu-mobile"
            onClick={ouvrirMenu}
          >
            <Menu size={24} strokeWidth={1.6} aria-hidden="true" />
            <span className="visually-hidden">Ouvrir le menu</span>
          </button>
        </div>
      </Container>

      <MobileMenu ref={menuRef} onClose={() => setMenuOuvert(false)} />
    </header>
  )
}
