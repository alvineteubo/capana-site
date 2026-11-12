import { ArrowRight } from 'lucide-react'
import Button from './Button.jsx'

const LIENS = {
  contact: { to: '/contact', label: 'Contacter CAPANA' },
  produits: { to: '/produits', label: 'Découvrir nos produits' },
}

// Contenu provisoire des pages qui seront développées aux étapes suivantes.
// `vers` choisit l'appel à l'action principal : "contact" (défaut) ou "produits".
export default function EnPreparation({ vers = 'contact' }) {
  const lien = LIENS[vers] ?? LIENS.contact
  return (
    <>
      <p className="page-intro__note">
        Cette page est en cours de préparation. Son contenu complet sera bientôt disponible.
      </p>
      <div className="page-intro__actions">
        <Button to={lien.to} icone={ArrowRight}>
          {lien.label}
        </Button>
        <Button to="/" variante="secondaire">
          Retour à l’accueil
        </Button>
      </div>
    </>
  )
}
