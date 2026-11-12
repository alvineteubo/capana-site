import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import './CartLink.css'

// Lien vers le panier avec compteur. Le nombre d'articles sera fourni par le
// contexte du panier à l'étape 6 ; d'ici là il vaut 0.
export default function CartLink({ nombre = 0, onClick }) {
  const libelle = `Panier, ${nombre} article${nombre > 1 ? 's' : ''}`
  return (
    <Link to="/panier" className="cart-link" aria-label={libelle} onClick={onClick}>
      <ShoppingBag size={22} strokeWidth={1.6} aria-hidden="true" />
      <span className="cart-link__compteur" aria-hidden="true">
        {nombre}
      </span>
    </Link>
  )
}
