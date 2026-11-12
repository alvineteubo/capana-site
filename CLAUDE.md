# PROMPT — CONCEPTION ET DÉVELOPPEMENT DU SITE WEB PROFESSIONNEL DE CAPANA

## 0. RESSOURCES FOURNIES ET DONNÉES RÉELLES

### État actuel du dépôt (à lire avant l'étape 1)

La branche courante (`refonte-capana`) contient l'ancien site statique (fichiers HTML à la racine, `assets/css`, `assets/js`, scripts Python, etc.), récupéré depuis la branche `working`. Ce n'est PAS une base à reprendre : le nouveau site est un projet React + Vite créé de zéro dans cette branche. L'ancien code reste disponible dans `master` et `working`.

Ressources à conserver :
- **Logo officiel** : PAS ENCORE FOURNI. Je l'ajouterai moi-même plus tard (voir « Logo provisoire » en section 4).
- **Photos fournies par CAPANA** : tous les fichiers `.png`, `.jpg` et `.jpeg` de `assets/images/products/` et `assets/images/services/`. Ce sont les seules photos de référence.
- **À ignorer** : tous les fichiers `.svg` de ces dossiers (anciennes illustrations provisoires générées) et les fichiers `IMAGES_A_FOURNIR.txt`. Ne les réutilise pas.
- **Ancien cahier des charges** : `CAPANA_Specifications_Site_Web.docx`, à déplacer dans `docs/`. En cas de contradiction, le présent fichier fait foi.

Pendant l'étape 1 :
1. Avec `git mv`, déplace les photos fournies dans `ressources/photos/` (crée aussi `ressources/logo/` avec un fichier `LISEZMOI.txt` qui indique d'y déposer le logo officiel). Renomme proprement au passage : `miel-bocal-demi-littre.jpeg` → `miel-bocal-demi-litre.jpeg`, `accompagrer-les-porteur-projet.jpeg` → `accompagner-les-porteurs-projet.jpeg`. Garde les autres noms.
2. Supprime l'ancien site de cette branche : HTML, `assets/`, scripts Python et fichiers de l'ancienne génération. Ne supprime jamais le dossier `.git`, `.claude/`, ni ce fichier `CLAUDE.md`.
3. Ne modifie, n'affiche et ne committe jamais de fichiers de configuration personnels (`.bashrc`, `.profile`, `.zshrc`, `.gitconfig`, `.mcp.json`, `.idea/`, `.vscode/`…). S'ils sont suivis par Git, signale-le-moi au lieu d'agir.
4. Fais deux commits distincts : `chore: move brand assets to ressources` puis `chore: remove legacy static site`. Crée le projet Vite seulement ensuite.

Ne modifie jamais les fichiers originaux de `ressources/`. Les versions optimisées pour le site vont dans `public/images/` (voir section 4).

### Inventaire des photographies

**A. Photos réelles de CAPANA (à mettre en valeur, à présenter comme authentiques)**
- `miel-bocal-demi-litre.jpeg` : bocal en verre de Miel pur du Ndé, 0,5 kg.
- `photo-miel-original.jpeg` : bouteille de Miel pur du Ndé, 1 L.
- `les-ruches.jpeg` : rucher de CAPANA avec un apiculteur en tenue.
- `ruche-colonisee.jpeg` : ruches jaunes avec une grappe d'abeilles à l'entrée.
- `ruche-planches-bambou.jpeg` : ruches fabriquées (bois peint et planches de bambou), atelier.
- `noeud-abeille.jpeg` : cellules royales entourées d'abeilles (élevage).
- `accompagner-les-porteurs-projet.jpeg` : réunion / atelier avec des intervenants. N'écris aucune légende qui nomme ces personnes ou l'événement.

**B. Photos d'illustration génériques (autorisées pour illustrer, jamais présentées comme des photos de CAPANA)**
- `propolis.png`, `produit-de-la-ruche.png`, `cire-abeille.png` : illustrations des produits de la ruche.
- `enfumoir-apicole.png`, `tenue-apicole.png` : illustrations d'équipements (fond blanc).
- `formation-theorique.png` : illustration d'une formation en salle.
- `formation-apiculture.png` : illustration d'une formation pratique.

**C. Images à NE PAS utiliser telles quelles (filigrane ou contenu appartenant à un tiers)**
- `gamme-equipement-apicole.png` (logo « Shop Apiculture »), `redaction-des-projets-agro.png` (infographie « Agronomie Expert »), `suivie-apicole.png` et `formation-technique-apicole.png` (captures d'écran de Google Images).
- Ne supprime pas les filigranes. Remplace ces images par des photos libres de droits équivalentes (Unsplash, Pexels…), téléchargées dans le projet et citées dans `CREDITS.md`.

### Fiche des données réelles

Utilise UNIQUEMENT les informations ci-dessous. Lorsqu'un champ est marqué « à compléter », n'invente rien : affiche un message neutre (ex. « Prix sur demande », « Contactez-nous pour en savoir plus ») et laisse l'information facilement modifiable dans les fichiers de données.

- Numéro WhatsApp : utilise le numéro FICTIF `237600000000`, défini dans `src/config/site.js` avec un commentaire `// À REMPLACER : numéro fictif`. Je le remplacerai moi-même.
- Téléphone, e-mail, réseaux sociaux : à compléter (valeurs vides dans la config ; rien ne s'affiche tant qu'elles sont vides).
- Localisation : Bangangté, département du Ndé, région de l'Ouest, Cameroun (pas d'adresse exacte).

Produits de la ruche :
- **Miel pur du Ndé** (nom exact sur l'étiquette ; slogan de l'étiquette : « Bien plus qu'un simple sucre naturel. ») — formats confirmés : bocal en verre 0,5 kg, bouteille 1 L — prix : à compléter.
- Cire d'abeille — à compléter.
- Propolis — à compléter.
- Autres produits de la ruche — à compléter.

Kits et équipements :
- Kit d'élevage des abeilles — composants, caractéristiques et prix : à compléter.
- Ruches (fabrication CAPANA, voir photos) — modèles et prix : à compléter.
- Enfumoir, tenue de protection — à compléter.
- Autres équipements — à compléter.

Essaims et élevage : colonies et élevage de reines (voir photos) — conditions et prix : à compléter.

Services : installation de ruchers, accompagnement des porteurs de projet, rédaction de projets agricoles et apicoles, conseils techniques, suivi des exploitations apicoles.

Formations : formation théorique, formation technique et pratique au rucher, perfectionnement, accompagnement de projet. Dates, tarifs, durées et lieux : à compléter.

## 1. LE PROJET

Tu interviens comme une équipe professionnelle : directeur artistique UI/UX, développeur frontend React expérimenté, spécialiste UX e-commerce et expert en sécurité web.

Ta mission : concevoir et développer le site web professionnel, moderne, élégant, original et entièrement responsive de **CAPANA**, entreprise camerounaise d'apiculture et de valorisation des produits de la ruche, basée à Bangangté (Ndé, Ouest Cameroun). Produit phare : **Miel du Ndé**.

Le site est une vitrine digitale : il présente le savoir-faire, les produits, les équipements, les kits, les essaims, les services et les formations. Il doit inspirer confiance, donner envie de découvrir les produits et faciliter les prises de contact et les commandes.

CAPANA ne se limite pas à vendre du miel : elle accompagne aussi celles et ceux qui veulent découvrir l'apiculture, installer un rucher ou développer une activité apicole.

L'identité doit mettre en avant :
- la nature et les richesses du terroir du Ndé ;
- l'apiculture et le savoir-faire associé ;
- la qualité et l'authenticité des produits ;
- l'accompagnement des apiculteurs actuels et futurs ;
- la transmission des connaissances ;
- la valorisation des activités locales.

## 2. RÈGLE ABSOLUE : NE RIEN INVENTER

N'invente jamais : date de fondation, certification, récompense, statistique, capacité de production, témoignage client, propriétés médicinales ou bienfaits thérapeutiques du miel, analyses, prix, formats, stocks, dates/tarifs/durées/lieux de formation, diplômes délivrés, adresse exacte, numéros ou e-mails.

Seules les informations de la fiche ci-dessus sont des faits. Le reste du texte peut décrire l'univers apicole et le terroir de façon générale, sans affirmation vérifiable sur l'entreprise.

## 3. DIRECTION ARTISTIQUE

Design premium, naturel, lumineux, élégant et contemporain. Il évoque la nature, le miel, les abeilles et le terroir, sans tomber dans le rustique ou le daté. Il ne doit surtout pas ressembler à un template générique produit par une IA : je veux une identité forte et une composition soignée, au niveau d'un site de marque.

### Palette
- Crème naturel `#F8F5EC`
- Blanc `#FFFFFF`
- Vert naturel `#55764B`
- Vert profond `#234332`
- Or miel `#D9A441`
- Brun naturel `#604B38`
- Texte principal `#292A25`

Répartition approximative : 70 % surfaces claires (crème, blanc), 20 % vert, 10 % doré et brun. Le vert profond est réservé au footer et à quelques sections de contraste. Le doré reste subtil. Vérifie que les contrastes texte/fond respectent WCAG AA (attention au doré sur fond clair).

### Typographie
- Titres : une police expressive, élégante et raffinée (serif ou display).
- Texte, boutons, informations : une police moderne et très lisible.
- Polices auto-hébergées dans le projet (par ex. via @fontsource), pas de chargement depuis un CDN externe.

### À éviter
Cartes identiques répétées partout, grilles systématiques à trois colonnes, dégradés excessifs, ombres prononcées, boutons surdimensionnés, animations gratuites, décoration sans utilité, look « boutique générique ».

### À privilégier
Compositions éditoriales asymétriques, grandes photographies immersives, espaces blancs généreux, alternance visuel/texte, séparations élégantes, animations discrètes, transitions fluides.

## 4. LOGO, ÉTIQUETTE ET PHOTOGRAPHIES

Obligatoire :
- Quand il sera fourni, utiliser le véritable logo, sans le redessiner, le déformer, le recolorer ni le régénérer.
- Utiliser la véritable photographie du pot de Miel du Ndé. Ne jamais modifier l'étiquette ni son texte, ne jamais la remplacer par un pot fictif.
- Faire du Miel du Ndé le produit emblématique de l'expérience visuelle.

Logo provisoire (le logo officiel n'est pas encore fourni) :
- Crée un seul composant `src/components/Logo.jsx`, utilisé partout (en-tête, pied de page, menu mobile).
- En attendant, ce composant affiche le mot « CAPANA » en texte, avec la police des titres de la charte. Ne dessine aucun symbole et n'imite pas le logo (ni hexagone, ni abeille stylisée en guise de logo).
- Le composant doit accepter facilement une image : prévois dans `src/config/site.js` une propriété `logo: null` ; quand elle contient un chemin (ex. `/logo/capana.svg`), le composant affiche l'image avec un texte alternatif « CAPANA ».
- Favicon provisoire : la lettre « C » sur fond vert profond, en SVG, à remplacer plus tard.
- Le README explique en 3 étapes comment ajouter le logo officiel (où déposer le fichier, quelle ligne modifier, comment régénérer le favicon).

Traitement des images :
- Tu peux redimensionner, recadrer, corriger légèrement la lumière et le contraste, et convertir en WebP (avec `sharp` en dépendance de développement, ou un script dans `scripts/`). Fournis plusieurs tailles quand c'est utile (`srcset`).
- Les deux photos du Miel pur du Ndé peuvent être recadrées et éclairées, mais jamais redessinées, retouchées sur l'étiquette ou recréées.
- Tu ne génères pas d'images toi-même. Quand une image manque ou n'est pas assez professionnelle, utilise dans l'ordre : une photo réelle de CAPANA mieux cadrée, une photo libre de droits de qualité, une illustration SVG simple et élégante dans la charte, ou un emplacement clairement identifié. Liste dans le README les visuels à produire plus tard (photo studio, rendu 3D…).
- Les photos libres de droits sont citées dans `CREDITS.md` (source, auteur, licence) et ne sont jamais présentées comme des photos de CAPANA (pas de légende du type « notre rucher »).

## 5. CATALOGUE : QUATRE UNIVERS

### 5.1. Produits de la ruche
Miel du Ndé, cire d'abeille, propolis, autres produits selon la fiche.
Le Miel du Ndé a une présentation premium : photo officielle, description, caractéristiques et formats communiqués, prix seulement s'il est connu, bouton « Commander sur WhatsApp ».

### 5.2. Kits et équipements apicoles
Kit d'élevage des abeilles, ruches, accessoires, équipements de protection, matériel de récolte, d'extraction et de conditionnement.
Le **kit d'élevage** a une fiche dédiée particulièrement soignée : photo, nom, description, utilité, composants fournis, caractéristiques, prix si connu, bouton WhatsApp.
Ne suppose pas que tout est en stock.

### 5.3. Essaims et élevage
Rubrique dédiée, avec seulement les produits et prestations de la fiche.

### 5.4. Services et accompagnement
Installation de ruchers, accompagnement de projets, conseils techniques, suivi d'exploitations, aide au démarrage. Appel à l'action « Demander un devis » ou « Demander un accompagnement ».

### Données administrables
Toutes les données (produits, catégories, services, formations, coordonnées) sont centralisées dans `src/data/` et `src/config/`, dans des fichiers simples et commentés, pour que je puisse les modifier sans toucher aux composants. Chaque produit a au minimum : `id`, `slug`, `nom`, `categorie`, `description`, `images`, `prix` (nombre ou `null`), `formats` (tableau, éventuellement vide), `caracteristiques` (tableau), `disponibilite` (`null` si inconnue), `vedette` (booléen).

## 6. FORMATIONS

Page dédiée : initiation, formation pratique, perfectionnement, accompagnement de projet. Explique l'intérêt de chaque formation et permets de contacter CAPANA facilement.
Si les modalités ne sont pas renseignées : « Contactez-nous pour connaître les prochaines sessions et les modalités de formation. »

## 7. PAGES

### 7.1. Accueil (la plus soignée)
A. **En-tête** : logo, Accueil, L'entreprise, Produits, Services, Formations, Galerie, Contact, icône panier avec compteur. Élégant, sticky discret, menu mobile accessible.
B. **Hero** immersif.
   Titre : « Du cœur du Ndé, la richesse de la nature dans chaque goutte. »
   Sous-titre : « Découvrez Miel du Ndé et l'univers apicole de CAPANA, au cœur de Bangangté, dans l'Ouest du Cameroun. »
   Boutons : « Découvrir nos produits » → /produits ; « Explorer notre savoir-faire » → /entreprise.
C. **Présentation de CAPANA** : vision et engagement, en quelques lignes.
D. **Produit phare** : mise en scène éditoriale de la photo officielle du Miel du Ndé.
E. **Nos univers** : les quatre univers, présentés de façon variée (pas quatre cartes identiques).
F. **Services**.
G. **Formations**, avec un lien vers la page.
H. **Aperçu de la galerie**.
I. **Appel à l'action final**.
J. **Pied de page** : logo, courte présentation, navigation, coordonnées disponibles, « Bangangté, Ndé, Ouest Cameroun », réseaux sociaux s'ils sont renseignés (sinon rien), liens vers Mentions légales et Politique de confidentialité.

### 7.2. L'entreprise (/entreprise)
Page éditoriale : identité, vision, engagement dans l'apiculture, ancrage dans le Ndé, activités. Photos et vraie narration.

### 7.3. Produits (/produits)
Catalogue par catégories : filtre par catégorie, recherche par nom (insensible aux accents et à la casse), photo, nom, description courte, prix seulement s'il est confirmé, disponibilité seulement si elle est connue, lien vers la fiche, ajout au panier. État vide si aucun résultat. Le filtre actif est reflété dans l'URL (ex. `?categorie=equipements`).

### 7.4. Fiche produit (/produits/:slug)
Photos, nom, description, caractéristiques confirmées, formats, prix si disponible, sélecteur de quantité, ajout au panier, commande WhatsApp directe, produits associés (même catégorie). Page « produit introuvable » propre si le slug n'existe pas.

### 7.5. Services (/services)
Présentation des services + demande de devis ou de renseignements.

### 7.6. Formations (/formations)
Voir section 6.

### 7.7. Galerie (/galerie)
Galerie élégante (mise en page variée, pas une grille uniforme) avec visionneuse plein écran accessible : fermeture avec Échap, navigation avec les flèches du clavier, focus géré.

### 7.8. Contact (/contact)
Coordonnées disponibles, bouton WhatsApp, e-mail s'il est renseigné, « Bangangté, Ouest Cameroun », formulaire de contact (voir section 9).

### 7.9. Panier (/panier)
Liste des articles, modification des quantités, suppression, sous-total et total lorsque les prix sont connus, vider le panier (avec confirmation), commander sur WhatsApp. Message soigné quand le panier est vide, avec un lien vers le catalogue.

### 7.10. Pages complémentaires
- Mentions légales (/mentions-legales) et Politique de confidentialité (/confidentialite) : structure complète, avec les informations inconnues marquées [À COMPLÉTER].
- Page 404 cohérente avec le design.

## 8. PANIER ET COMMANDE WHATSAPP

Panier frontend réel (React Context + localStorage) :
- ajouter, retirer, modifier la quantité (minimum 1, maximum raisonnable, par ex. 99) ;
- fusion des lignes pour un même produit et un même format ;
- persistance après actualisation ; lecture de localStorage protégée (données corrompues ou absentes → panier vide, sans plantage) ;
- seuls l'id, le format et la quantité sont stockés ; nom et prix sont relus depuis le catalogue ;
- totaux calculés uniquement sur les articles avec prix ; si certains articles n'ont pas de prix, l'indiquer clairement (« Certains prix seront confirmés par CAPANA ») ;
- prix affichés en FCFA, au format `Intl.NumberFormat('fr-FR')` ;
- compteur dans l'en-tête ;
- retour visuel discret lors de l'ajout (message accessible, sans alerte bloquante).

### Message WhatsApp
Le bouton « Commander sur WhatsApp » génère un message structuré contenant : les produits, les formats, les quantités, les prix connus, le total s'il est calculable, puis une demande de confirmation de disponibilité et des modalités de livraison. Le message est encodé avec `encodeURIComponent` et ouvert via `https://wa.me/<numéro>?text=…`.

Le numéro est défini à un seul endroit (`src/config/site.js`) : pour l'instant le numéro fictif `237600000000`, commenté « À REMPLACER ». Le code valide le numéro. S'il est vide ou invalide, les boutons WhatsApp ne génèrent aucun lien : ils affichent un état clair (« Numéro WhatsApp bientôt disponible ») et proposent la page Contact.

Dans cette version, les commandes sont transmises par WhatsApp uniquement. Il n'y a ni base de données ni paiement en ligne, et le site doit l'indiquer honnêtement.

## 9. FORMULAIRES (sans backend)

Le site n'a pas de serveur. Les formulaires (contact, demande de devis, renseignements sur les formations) ne simulent donc jamais un envoi :
- après validation, ils préparent un message WhatsApp avec les champs saisis (et un lien `mailto:` comme alternative si l'e-mail est renseigné) ;
- le texte du bouton est explicite : « Envoyer via WhatsApp ».

Champs minimaux : nom, téléphone ou e-mail (au moins un des deux), objet, message. Aucune donnée superflue.

Validation : champs obligatoires, format d'e-mail, numéro camerounais (+237 ou 237 facultatif, puis 9 chiffres commençant par 6 ou 2) ou format international, longueur maximale par champ, messages d'erreur clairs reliés aux champs (`aria-describedby`). Les données du formulaire ne sont jamais stockées dans localStorage.

## 10. STACK ET ARCHITECTURE

- React + Vite, JavaScript (pas de TypeScript), React Router DOM, CSS moderne (variables CSS, sans framework CSS lourd), Lucide React pour les icônes.
- Pas de Next.js, pas de backend, pas de dépendance superflue.
- Le projet doit être 100 % autonome : aucune dépendance à un outil de génération ni à une plateforme propriétaire. Il s'ouvre dans VS Code et se lance avec :
  ```bash
  npm install
  npm run dev
  npm run build
  npm run preview
  ```

Organisation indicative (à améliorer si c'est plus propre, sans complexifier) :

```text
capana-website/
├── public/            (logo, images, favicon, _headers, _redirects)
├── src/
│   ├── components/    (Header, Footer, ProductCard, WhatsAppButton, Seo, …)
│   ├── pages/         (Home, About, Products, ProductDetails, Services, Training, Gallery, Contact, Cart, Legal, Privacy, NotFound)
│   ├── context/       (CartContext.jsx)
│   ├── data/          (products.js, categories.js, services.js, trainings.js, gallery.js, navigation.js)
│   ├── config/        (site.js : nom, coordonnées, WhatsApp, réseaux)
│   ├── utils/         (whatsapp.js, format.js, validation.js)
│   ├── hooks/
│   ├── styles/        (variables.css, global.css)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── README.md
└── CREDITS.md
```

Code lisible, modulaire, sans duplication. Aucun lien cassé, aucun bouton sans action, aucune page vide.

Pages chargées à la demande (`React.lazy`) si cela allège le premier chargement. Retour en haut de page à chaque changement de route.

## 11. HÉBERGEMENT CIBLE : NETLIFY

(Remplace par Vercel ou Cloudflare Pages si tu préfères ; adapte alors les fichiers ci-dessous.)

- `public/_redirects` : `/*  /index.html  200`, pour que les URLs propres fonctionnent après actualisation.
- `public/_headers` avec :
  - Content-Security-Policy stricte, adaptée aux ressources réellement utilisées (aucun domaine externe si tout est auto-hébergé ; pas de `unsafe-inline` pour les scripts) ;
  - Strict-Transport-Security ;
  - X-Content-Type-Options: nosniff ;
  - Referrer-Policy: strict-origin-when-cross-origin ;
  - Permissions-Policy restrictive ;
  - X-Frame-Options: DENY (ou frame-ancestors 'none' dans la CSP).

## 12. SÉCURITÉ

- Aucun `dangerouslySetInnerHTML`, aucune injection de contenu utilisateur dans le DOM.
- Aucun secret, clé API ou jeton dans le code.
- Aucune donnée personnelle dans les URL, la console ou localStorage (le panier ne contient que des données commerciales non sensibles).
- Liens externes en `rel="noopener noreferrer"` ; seules les URL externes connues (wa.me, réseaux sociaux renseignés) sont autorisées.
- Aucune information confidentielle dans les messages WhatsApp.
- Exécute `npm audit` et corrige ou documente les vulnérabilités.
- Le README précise les limites de cette version : validation uniquement côté client, pas de serveur, HTTPS et en-têtes assurés par l'hébergeur. Ne prétends pas que le site est « entièrement sécurisé ».

Évolution future (à ne PAS développer maintenant) : backend Spring Boot + PostgreSQL. Garde une architecture qui le permet (données isolées dans `src/data`, logique séparée de l'affichage). Le README liste ce que ce backend devra intégrer : authentification, rôles, validation serveur, CSRF, limitation de requêtes, sessions sécurisées, journalisation, gestion des secrets.

## 13. RESPONSIVE ET ACCESSIBILITÉ

- Parfait sur smartphone (dès 360 px), tablette, portable et grand écran, sans aucun débordement horizontal.
- HTML sémantique, un seul `h1` par page, textes alternatifs pertinents, navigation complète au clavier, focus visibles, lien « Aller au contenu ».
- Zones tactiles d'au moins 44 px, menu mobile qui piège le focus et se ferme avec Échap.
- Respect de `prefers-reduced-motion`.

## 14. SEO ET PERFORMANCE

- Titre et meta description uniques pour chaque page (petit composant `Seo` qui met à jour `document.title` et les metas).
- Balises Open Graph par défaut dans `index.html`, avec la photo du Miel du Ndé (les réseaux sociaux ne lisent que celles-ci sur un site React classique).
- `lang="fr"`, URLs propres, `robots.txt`, `sitemap.xml` (domaine à compléter), données structurées `LocalBusiness` sans information inventée.
- Images optimisées (WebP si possible, dimensions définies, `loading="lazy"` hors hero), favicon provisoire (voir section 4), à remplacer par le logo officiel.
- Mots-clés naturels : apiculture, miel, produits de la ruche, équipements apicoles, Bangangté, Ouest Cameroun. Aucune répétition artificielle.

## 15. TON ÉDITORIAL

Tout en français. Professionnel, naturel, authentique, accueillant, élégant, convaincant sans exagération. Pas de slogans creux ni de superlatifs non fondés.

Appels à l'action : Découvrir nos produits · Explorer nos équipements · Découvrir nos formations · Demander un devis · Commander sur WhatsApp · Contacter CAPANA.

## 16. MÉTHODE DE TRAVAIL : UNE ÉTAPE À LA FOIS, AVEC GIT

### Branche
- Tu travailles uniquement sur la branche courante, que j'ai créée (vérifie-la avec `git branch --show-current` au début de chaque étape).
- Ne crée pas d'autre branche, ne change pas de branche, ne fusionne rien, ne touche jamais à `master` ni à `working`, ne force jamais un push (`--force` interdit).

### Étapes
1. Initialisation : projet Vite + React, dépendances, structure des dossiers, variables CSS, polices, `.gitignore`, README de base.
2. Système visuel et mise en page : en-tête, menu mobile, pied de page, routes, page 404, composants de base.
3. Données et configuration : `src/config/site.js`, catalogue, services, formations, galerie ; traitement et optimisation des images.
4. Page d'accueil complète.
5. Catalogue (filtres, recherche) et fiche produit.
6. Panier (Context + localStorage) et commande WhatsApp.
7. Pages L'entreprise, Services et Formations.
8. Galerie et page Contact (avec formulaires).
9. Pages légales, SEO, `_headers`, `_redirects`, sitemap, robots.
10. Vérifications finales, accessibilité, `npm audit`, README et CREDITS complets.

### Déroulement de chaque étape
Je te demande une étape à la fois (ex. « Réalise l'étape 4 »). Pour chaque étape :
1. Annonce en quelques lignes ce que tu vas faire.
2. Développe, en faisant des commits au fil de l'eau, comme dans un vrai projet : un commit par ensemble cohérent de modifications (en général 2 à 6 commits par étape), jamais un seul gros commit par étape et jamais de commits artificiels.
3. Avant chaque commit : `npm run build` doit passer sans erreur.
4. À la fin de l'étape : vérifie que les étapes précédentes fonctionnent toujours, puis `git push` sur la branche courante.
5. Arrête-toi et donne un court compte rendu : ce qui est fait, la liste des commits, ce qui a été testé, ce qui reste [À COMPLÉTER]. Ne commence pas l'étape suivante sans mon accord.

### Messages de commit
Format Conventional Commits, en anglais, à l'impératif, précis :
- `chore: init vite react project`
- `style: add design tokens and typography`
- `feat: add responsive header with mobile menu`
- `feat: add product catalog data`
- `feat: add category filter and search`
- `fix: keep cart count in sync after reload`
- `security: add http security headers`

Ne committe jamais `node_modules/`, `dist/`, de fichiers `.env` ni de secrets.

## 17. VÉRIFICATIONS AVANT LIVRAISON

- Toutes les routes, y compris un slug inexistant et une URL inconnue.
- Filtres, recherche, fiche produit, ajout au panier, quantités, suppression, vidage, persistance après actualisation, totaux avec et sans prix.
- Message WhatsApp généré (affiche un exemple dans ta réponse) et comportement quand le numéro est vide.
- Formulaires testés avec des données invalides.
- Menu mobile, clavier, focus.
- Aucune erreur dans la console ; `npm run build` et `npm audit` exécutés.
- Rendu vérifié à 360 px, 768 px, 1280 px et 1920 px.

## 18. LIVRABLES

1. Le code source complet, poussé sur la branche courante, avec un historique de commits propre.
2. `package.json` avec des versions récentes et maintenues.
3. `README.md` : installation, lancement, build, déploiement sur Netlify, modification des produits/prix/numéro WhatsApp, liste des informations [À COMPLÉTER], photos à ajouter, limites de sécurité, pistes d'évolution.
4. `CREDITS.md` : sources et licences des images et polices.
5. Un récapitulatif final : fonctionnalités terminées, tests effectués, points restant à compléter.

## RÉSULTAT ATTENDU

Un site qui donne immédiatement l'image d'une entreprise sérieuse, moderne et attachée à son territoire. Le visiteur comprend vite que CAPANA propose bien plus que du miel : produits de la ruche, kits d'élevage, matériel, essaims, services et formations. Le Miel du Ndé est au cœur de l'expérience. Le site est lumineux, raffiné, naturel, agréable sur mobile et présentable à un vrai client.

Priorité absolue : qualité visuelle, authenticité, expérience utilisateur, fonctionnalités réelles, sécurité et code propre, complet et évolutif.
