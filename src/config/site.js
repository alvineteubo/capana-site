// Configuration générale du site. Les coordonnées et le numéro WhatsApp seront ajoutés à l'étape 3.
export const site = {
  nom: 'CAPANA',
  // Signature officielle, recopiée telle qu'elle figure sur le logo. Ne pas corriger.
  signature: "Centre Apicole de Production Artificiel de Nucléi d’Abeille",
  localisation: 'Bangangté, Ndé, Ouest Cameroun',

  // Logo web généré par `npm run logo` à partir de ressources/logo/ (voir README).
  // `base` est le chemin sans la taille ni l'extension ; `largeurs` liste les tailles générées.
  logo: {
    base: '/logo/capana-logo',
    largeurs: [160, 320, 480],
    // Dimensions du logo recadré, pour réserver la bonne place avant le chargement.
    ratio: { largeur: 594, hauteur: 434 },
  },
}
