import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import './Layout.css'

// Gabarit commun à toutes les pages : lien d'évitement, en-tête, contenu, pied de page.
export default function Layout() {
  return (
    <div className="layout">
      <a href="#contenu" className="skip-link">
        Aller au contenu
      </a>
      <ScrollToTop />
      <Header />
      <main id="contenu" className="layout__contenu" tabIndex={-1}>
        <Suspense fallback={<p className="layout__chargement">Chargement…</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
