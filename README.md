# CAPANA — site web

Site vitrine de CAPANA, entreprise d'apiculture et de valorisation des produits de la ruche à Bangangté (Ndé, Ouest Cameroun). Produit phare : Miel du Ndé.

Stack : React, Vite, React Router, CSS moderne (variables), Lucide React. JavaScript, sans backend.

> Projet en construction (étape 3 sur 10 : données, configuration et images). Ce README sera complété à chaque étape.

## Prérequis

- Node.js 20 ou plus récent, avec npm.

## Commandes

```bash
npm install       # installe les dépendances
npm run dev       # serveur de développement
npm run build     # build de production dans dist/
npm run preview   # prévisualise le build
npm run logo      # régénère les versions web du logo dans public/logo/
npm run images    # traite ressources/photos/ vers public/images/ (et src/data/images.js)
npm run icons     # régénère le favicon et les icônes (après npm run logo)
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

Le favicon et les icônes (16, 32, 180 et 512 px) sont générés par `npm run icons` à partir du logo sans signature. À 16 et 32 px, où le mot « CAPANA » serait illisible, on utilise un recadrage de l'alvéole jaune du logo ; à 180 et 512 px, le logo complet.

Les JPEG fournis sont petits (environ 600 px de large). Une version vectorielle officielle (SVG, AI ou PDF) les remplacerait avantageusement si CAPANA peut la fournir.

Dans le pied de page, la signature « Centre Apicole de Production Artificiel de Nucléi d'Abeille » est écrite en texte à côté du logo sans signature : intégrée à l'image, elle serait illisible à cette taille.

## Modifier les données

Tout le contenu se modifie sans toucher aux composants, dans des fichiers commentés :

| Fichier | Contenu |
| --- | --- |
| [src/config/site.js](src/config/site.js) | nom, localisation, **numéro WhatsApp**, téléphone, e-mail, réseaux sociaux, logo |
| [src/data/products.js](src/data/products.js) | produits, formats, **prix**, caractéristiques, disponibilité |
| [src/data/categories.js](src/data/categories.js) | catégories du catalogue et les quatre univers de l'accueil |
| [src/data/services.js](src/data/services.js) | services |
| [src/data/trainings.js](src/data/trainings.js) | formations (dates, tarifs, durées, lieux) |
| [src/data/gallery.js](src/data/gallery.js) | photos de la galerie |

- **Numéro WhatsApp** : champ `whatsapp` de `site.js`, en chiffres avec l'indicatif, sans « + ». La valeur actuelle `237600000000` est **fictive** (marquée « À REMPLACER »).
- **Prix** : champ `prix` d'un produit (nombre en FCFA) ou, pour un produit à formats, champ `prix` de chaque format. `null` affiche « Prix sur demande ».
- **Coordonnées et réseaux sociaux** : tant qu'une valeur est vide (`''`), rien ne s'affiche.

## Images

Les originaux de `ressources/photos/` ne sont jamais modifiés. `npm run images` produit dans `public/images/` des versions WebP en plusieurs largeurs (sans jamais agrandir une photo) et met à jour `src/data/images.js`. Les recadrages sont définis dans [scripts/build-images.mjs](scripts/build-images.mjs).

Quatre images ne sont volontairement pas utilisées, car elles portent un filigrane ou appartiennent à un tiers : `gamme-equipement-apicole`, `redaction-des-projets-agro`, `suivie-apicole` et `formation-technique-apicole`.

L'image de partage `public/images/og-miel-du-nde.jpg` (1200 × 630) est la photo de la bouteille 1 L, intacte, posée sur son propre arrière-plan flouté. La photo de la bouteille est le visuel principal du Miel pur du Ndé ; le bocal 0,5 kg n'apparaît que sur sa fiche produit.

Les photos fournies sont petites (de 390 à 1 400 px de côté) : elles conviennent au web, mais pas à de grands formats plein écran ni à l'impression.

## Visuels à produire

- **Photo à refaire : bocal 0,5 kg.** Sur la photo actuelle, le petit texte en bas de l'étiquette est illisible : le cadrage s'arrête au-dessus.
- **Photo studio ou rendu 3D du Miel pur du Ndé** (bocal et bouteille, étiquette lisible), pour un rendu plus premium.
- **Kit d'élevage des abeilles** : photo réelle du kit, avec ses composants (sinon photo libre de droits, jamais présentée comme celle de CAPANA).
- **Photos libres de droits à trouver** (Unsplash, Pexels…, à citer dans `CREDITS.md`) :
  - rédaction de projets agricoles et apicoles (personne rédigeant un dossier, bureau de travail) ;
  - suivi d'une exploitation apicole (apiculteur inspectant un cadre de ruche) ;
  - conseils techniques (échange sur le terrain, au rucher) ;
  - matériel apicole : gamme d'équipements (extracteur, outils, cadres) ;
  - formation technique en apiculture (groupe au rucher).
- **Cire d'abeille et propolis** : photos réelles de CAPANA, pour remplacer les illustrations génériques.
- **Perfectionnement et accompagnement de projet** (page Formations) : visuels à définir.

## À compléter

Voir `CLAUDE.md` (fiche des données réelles). À ce jour :

- numéro WhatsApp réel (un numéro fictif est utilisé) ;
- téléphone, e-mail, réseaux sociaux, adresse du site (`site.url`) ;
- prix et disponibilité de tous les produits ;
- cire d'abeille, propolis, autres produits de la ruche ;
- kit d'élevage (composants, caractéristiques, prix), modèles de ruches, enfumoir, tenue de protection, autres équipements ;
- conditions et prix des colonies et de l'élevage de reines ;
- formations : dates, tarifs, durées, lieux.
