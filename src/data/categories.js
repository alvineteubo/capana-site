// Catégories du catalogue (filtres de /produits) et « univers » présentés sur l'accueil.
// L'identifiant `id` est repris dans le champ `categorie` de chaque produit et dans l'URL
// (ex. /produits?categorie=equipements).

export const categories = [
  {
    id: 'produits-de-la-ruche',
    nom: 'Produits de la ruche',
    description: 'Miel pur du Ndé, cire d’abeille, propolis.',
  },
  {
    id: 'equipements',
    nom: 'Kits et équipements apicoles',
    description: 'Kit d’élevage, ruches, enfumoir, tenue de protection.',
  },
  {
    id: 'essaims-elevage',
    nom: 'Essaims et élevage',
    description: 'Colonies d’abeilles et élevage de reines.',
  },
]

// Les quatre univers de CAPANA (accueil). Les trois premiers renvoient au catalogue, le dernier aux services.
export const univers = [
  {
    id: 'produits-de-la-ruche',
    nom: 'Produits de la ruche',
    accroche: 'Le Miel pur du Ndé, la cire d’abeille et la propolis.',
    lien: '/produits?categorie=produits-de-la-ruche',
    appel: 'Découvrir nos produits',
  },
  {
    id: 'equipements',
    nom: 'Kits et équipements',
    accroche: 'Kit d’élevage, ruches fabriquées par CAPANA, enfumoir et tenue de protection.',
    lien: '/produits?categorie=equipements',
    appel: 'Explorer nos équipements',
  },
  {
    id: 'essaims-elevage',
    nom: 'Essaims et élevage',
    accroche: 'Colonies d’abeilles et élevage de reines.',
    lien: '/produits?categorie=essaims-elevage',
    appel: 'Découvrir nos essaims',
  },
  {
    id: 'services',
    nom: 'Services et accompagnement',
    accroche: 'Installation de ruchers, conseils techniques, suivi des exploitations et accompagnement de projets.',
    lien: '/services',
    appel: 'Demander un accompagnement',
  },
]
