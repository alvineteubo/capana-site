# CAPANA — site web

Site vitrine de CAPANA, entreprise d'apiculture et de valorisation des produits de la ruche à Bangangté (Ndé, Ouest Cameroun). Produit phare : Miel du Ndé.

Stack : React, Vite, React Router, CSS moderne (variables), Lucide React. JavaScript, sans backend.

> Projet en construction (étape 1 sur 10 : initialisation). Ce README sera complété à chaque étape.

## Prérequis

- Node.js 20 ou plus récent, avec npm.

## Commandes

```bash
npm install       # installe les dépendances
npm run dev       # serveur de développement
npm run build     # build de production dans dist/
npm run preview   # prévisualise le build
```

## Structure

```text
public/        fichiers servis tels quels (images optimisées, logo web, favicon…)
ressources/    originaux fournis par CAPANA (logo, photos) : ne jamais modifier
docs/          documents de référence (ancien cahier des charges)
scripts/       scripts de traitement d'images (sharp)
src/
  components/  composants réutilisables
  pages/       une page par route
  context/     contextes React (panier)
  data/        produits, catégories, services, formations, galerie
  config/      configuration du site (coordonnées, WhatsApp, logo)
  utils/       fonctions utilitaires
  hooks/       hooks personnalisés
  styles/      variables.css (charte) et global.css
```

## Charte

Les couleurs, polices et espacements sont définis dans [src/styles/variables.css](src/styles/variables.css). Les polices (Fraunces pour les titres, Inter pour le texte) sont auto-hébergées via `@fontsource-variable`, sans chargement depuis un CDN.

## Logo officiel

Les originaux sont dans `ressources/logo/` (`capana-logo.jpeg` et `capana-logo-signature.jpeg`). Ils ne doivent jamais être modifiés. Les versions web (fond transparent, plusieurs tailles) et le favicon seront générés par script dans `public/logo/` à l'étape 3, et leur chemin sera défini dans `src/config/site.js`.

## À compléter

Voir `CLAUDE.md` (fiche des données réelles) : prix, téléphone, e-mail, réseaux sociaux, numéro WhatsApp réel (un numéro fictif sera utilisé en attendant), modalités des formations.
