# CAPANA — site web

Site vitrine de CAPANA, entreprise d'apiculture et de valorisation des produits de la ruche à Bangangté (Ndé, Ouest Cameroun). Produit phare : Miel du Ndé.

Stack : React, Vite, React Router, CSS moderne (variables), Lucide React. JavaScript, sans backend.

> Projet en construction (étape 2 sur 10 : système visuel et mise en page). Ce README sera complété à chaque étape.

## Prérequis

- Node.js 20 ou plus récent, avec npm.

## Commandes

```bash
npm install       # installe les dépendances
npm run dev       # serveur de développement
npm run build     # build de production dans dist/
npm run preview   # prévisualise le build
npm run logo      # régénère les versions web du logo dans public/logo/
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

Les originaux sont dans `ressources/logo/` (`capana-logo.jpeg` et `capana-logo-signature.jpeg`). Ils ne doivent jamais être modifiés.

Les versions web sont générées par [scripts/build-logo.mjs](scripts/build-logo.mjs) : recadrage des marges blanches et fond blanc rendu transparent, en PNG et WebP. Les formes, couleurs et proportions ne changent pas. Pour remplacer le logo :

1. Déposez le nouveau fichier dans `ressources/logo/`, sous le même nom que l'ancien.
2. Lancez `npm run logo`, puis reportez dans `src/config/site.js` (propriété `logo`) les dimensions affichées par le script si elles ont changé.
3. Vérifiez le rendu dans l'en-tête et le pied de page avec `npm run dev`.

Le favicon et les icônes seront générés à partir du logo à l'étape 3.

Les JPEG fournis sont petits (environ 600 px de large). Une version vectorielle officielle (SVG, AI ou PDF) les remplacerait avantageusement si CAPANA peut la fournir.

Dans le pied de page, la signature « Centre Apicole de Production Artificiel de Nucléi d'Abeille » est écrite en texte à côté du logo sans signature : intégrée à l'image, elle serait illisible à cette taille.

## Visuels à produire

- Photo à refaire : bocal 0,5 kg. Sur la photo actuelle, le petit texte en bas de l'étiquette est illisible. En attendant, la bouteille 1 L est le visuel principal du Miel pur du Ndé, et le bocal n'apparaît que sur sa fiche produit.

## À compléter

Voir `CLAUDE.md` (fiche des données réelles) : prix, téléphone, e-mail, réseaux sociaux, numéro WhatsApp réel (un numéro fictif sera utilisé en attendant), modalités des formations.
