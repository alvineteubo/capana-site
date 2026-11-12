// Configuration générale du site. Seul fichier à modifier pour changer le nom,
// les coordonnées, le numéro WhatsApp ou les réseaux sociaux.
// Une valeur vide ('') signifie « pas encore renseigné » : le site n'affiche rien à sa place.
export const site = {
  nom: 'CAPANA',
  // Signature officielle, recopiée telle qu'elle figure sur le logo. Ne pas corriger.
  signature: "Centre Apicole de Production Artificiel de Nucléi d’Abeille",

  // Adresse du site en production, sans « / » final (ex. 'https://www.exemple.cm'). Sert au sitemap
  // et aux balises de partage.
  url: '', // À COMPLÉTER : domaine du site

  // Localisation : aucune adresse exacte n'est communiquée.
  localisation: 'Bangangté, Ndé, Ouest Cameroun',
  ville: 'Bangangté',
  departement: 'Ndé',
  region: 'Ouest',
  pays: 'Cameroun',

  // Numéro WhatsApp au format international, chiffres uniquement, sans « + » (ex. 237 6XX XX XX XX).
  // C'est le seul endroit où il est défini. S'il est vide ou invalide, aucun lien WhatsApp n'est généré.
  whatsapp: '237600000000', // À REMPLACER : numéro fictif

  // Coordonnées : rien ne s'affiche tant que la valeur est vide.
  telephone: '', // À COMPLÉTER
  email: '', // À COMPLÉTER

  // Réseaux sociaux : adresse complète du profil (https://…). Rien ne s'affiche tant qu'elle est vide.
  reseaux: {
    facebook: '', // À COMPLÉTER
    instagram: '', // À COMPLÉTER
    tiktok: '', // À COMPLÉTER
    youtube: '', // À COMPLÉTER
  },

  devise: 'FCFA',

  // Logo web généré par `npm run logo` à partir de ressources/logo/ (voir README).
  // `base` est le chemin sans la taille ni l'extension ; `largeurs` liste les tailles générées.
  logo: {
    base: '/logo/capana-logo',
    largeurs: [160, 320, 480],
    // Dimensions du logo recadré, pour réserver la bonne place avant le chargement.
    ratio: { largeur: 594, hauteur: 434 },
  },
}
