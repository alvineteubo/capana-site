// Catalogue des produits. Modifier ce fichier suffit pour changer le catalogue : aucun composant à toucher.
//
// Champs de chaque produit :
//   id, slug (adresse /produits/<slug>), nom, categorie (voir categories.js),
//   description (courte, pour les listes), descriptionLongue (facultative, pour la fiche),
//   images : [{ id, alt, illustration }] — `id` vient de src/data/images.js. La première image est
//            celle des listes. `illustration: true` marque une image générique, jamais présentée
//            comme une photo de CAPANA. Tableau vide = pas encore de visuel.
//   prix : nombre en FCFA, ou null (affichage « Prix sur demande »). Sert de prix par défaut.
//   formats : tableau, éventuellement vide. Chaque format : { id, libelle, prix? } — un `prix` de
//             format, s'il est renseigné, remplace le prix du produit pour ce format.
//   caracteristiques : uniquement des informations confirmées par CAPANA.
//   disponibilite : null si inconnue (rien n'est affiché), sinon un texte court.
//   vedette : true pour les produits mis en avant.
//
// RÈGLE : ne rien inventer. Toute information « à compléter » reste à null ou vide.

export const MESSAGE_PRIX_ABSENT = 'Prix sur demande'

export const produits = [
  // —— Produits de la ruche ——
  {
    id: 'miel-pur-du-nde',
    slug: 'miel-pur-du-nde',
    nom: 'Miel pur du Ndé',
    categorie: 'produits-de-la-ruche',
    description: 'Le miel de CAPANA, produit emblématique de la maison. « Bien plus qu’un simple sucre naturel. »',
    descriptionLongue:
      'Le Miel pur du Ndé est le produit emblématique de CAPANA. Il est proposé en bocal en verre de 0,5 kg et en bouteille de 1 L. Contactez-nous pour connaître les prix et la disponibilité.',
    images: [
      { id: 'miel-1l', alt: 'Bouteille de Miel pur du Ndé, 1 L, devant un bouquet de fleurs jaunes' },
      { id: 'miel-500g', alt: 'Bocal en verre de Miel pur du Ndé, 0,5 kg' },
    ],
    prix: null,
    formats: [
      { id: 'bocal-0-5-kg', libelle: 'Bocal en verre, 0,5 kg', prix: null },
      { id: 'bouteille-1-l', libelle: 'Bouteille, 1 L', prix: null },
    ],
    caracteristiques: [
      'Nom sur l’étiquette : Miel pur du Ndé',
      'Slogan de l’étiquette : « Bien plus qu’un simple sucre naturel. »',
      'Formats : bocal en verre 0,5 kg, bouteille 1 L',
    ],
    disponibilite: null,
    vedette: true,
  },
  {
    id: 'cire-d-abeille',
    slug: 'cire-d-abeille',
    nom: 'Cire d’abeille',
    categorie: 'produits-de-la-ruche',
    description: 'La cire produite par les abeilles pour bâtir les alvéoles de la ruche.',
    descriptionLongue:
      'Les abeilles produisent la cire pour construire les alvéoles de la ruche. Contactez-nous pour en savoir plus sur la cire d’abeille proposée par CAPANA.',
    images: [
      { id: 'illustration-cire', alt: 'Illustration : pot de miel et bougie en cire d’abeille alvéolée', illustration: true },
    ],
    prix: null,
    formats: [],
    caracteristiques: [],
    disponibilite: null,
    vedette: false,
  },
  {
    id: 'propolis',
    slug: 'propolis',
    nom: 'Propolis',
    categorie: 'produits-de-la-ruche',
    description: 'Une résine que les abeilles récoltent et utilisent dans la ruche.',
    descriptionLongue:
      'La propolis est une résine que les abeilles récoltent et utilisent dans la ruche. Contactez-nous pour en savoir plus sur la propolis proposée par CAPANA.',
    images: [
      { id: 'illustration-propolis', alt: 'Illustration : pot de miel, rayon et propolis dans une cuillère en bois', illustration: true },
    ],
    prix: null,
    formats: [],
    caracteristiques: [],
    disponibilite: null,
    vedette: false,
  },

  // —— Kits et équipements apicoles ——
  {
    id: 'kit-elevage-abeilles',
    slug: 'kit-elevage-abeilles',
    nom: 'Kit d’élevage des abeilles',
    categorie: 'equipements',
    description: 'Un kit pour démarrer l’élevage des abeilles. Composition et prix sur demande.',
    descriptionLongue:
      'Le kit d’élevage des abeilles s’adresse à celles et ceux qui souhaitent démarrer une activité apicole. Contactez-nous pour connaître sa composition, ses caractéristiques et son prix.',
    // À COMPLÉTER : photo du kit (voir « Visuels à produire » dans le README).
    images: [],
    prix: null,
    formats: [],
    caracteristiques: [],
    // À COMPLÉTER : liste des composants fournis, par exemple ['Ruche', 'Cadres'] (ne rien inscrire d'inconfirmé).
    composants: [],
    utilite: 'Démarrer l’élevage des abeilles et installer ses premières colonies.',
    disponibilite: null,
    vedette: true,
  },
  {
    id: 'ruches-capana',
    slug: 'ruches-capana',
    nom: 'Ruches CAPANA',
    categorie: 'equipements',
    description: 'Des ruches fabriquées par CAPANA, en bois peint et planches de bambou.',
    descriptionLongue:
      'CAPANA fabrique ses ruches dans son atelier, en bois peint et planches de bambou. Contactez-nous pour connaître les modèles disponibles et les prix.',
    images: [
      { id: 'ruches-atelier', alt: 'Ruches jaunes fabriquées par CAPANA, en bois peint et planches de bambou, dans l’atelier' },
      { id: 'ruches-jaunes', alt: 'Ruche jaune avec une grappe d’abeilles à l’entrée' },
    ],
    prix: null,
    formats: [],
    caracteristiques: ['Fabrication CAPANA', 'Bois peint et planches de bambou'],
    disponibilite: null,
    vedette: false,
  },
  {
    id: 'enfumoir-apicole',
    slug: 'enfumoir-apicole',
    nom: 'Enfumoir apicole',
    categorie: 'equipements',
    description: 'L’outil de base de l’apiculteur pour travailler calmement auprès des colonies.',
    descriptionLongue:
      'L’enfumoir fait partie du matériel de base de l’apiculteur. Contactez-nous pour connaître les modèles disponibles et les prix.',
    images: [{ id: 'illustration-enfumoir', alt: 'Illustration : enfumoir apicole en métal', illustration: true }],
    prix: null,
    formats: [],
    caracteristiques: [],
    disponibilite: null,
    vedette: false,
  },
  {
    id: 'tenue-de-protection',
    slug: 'tenue-de-protection',
    nom: 'Tenue de protection',
    categorie: 'equipements',
    description: 'Équipement de protection pour intervenir sur les ruches.',
    descriptionLongue:
      'La tenue de protection se porte pour intervenir sur les ruches. Contactez-nous pour connaître les modèles disponibles et les prix.',
    images: [{ id: 'illustration-tenue', alt: 'Illustration : combinaison d’apiculteur avec voile et gants', illustration: true }],
    prix: null,
    formats: [],
    caracteristiques: [],
    disponibilite: null,
    vedette: false,
  },

  // —— Essaims et élevage ——
  {
    id: 'colonies-abeilles',
    slug: 'colonies-abeilles',
    nom: 'Colonies d’abeilles',
    categorie: 'essaims-elevage',
    description: 'Des colonies pour installer ou développer un rucher. Conditions et prix sur demande.',
    descriptionLongue:
      'CAPANA, Centre Apicole de Production Artificiel de Nucléi d’Abeille, propose des colonies d’abeilles. Contactez-nous pour connaître les conditions et les prix.',
    images: [{ id: 'ruches-jaunes', alt: 'Ruches jaunes avec une grappe d’abeilles à l’entrée' }],
    prix: null,
    formats: [],
    caracteristiques: [],
    disponibilite: null,
    vedette: false,
  },
  {
    id: 'elevage-de-reines',
    slug: 'elevage-de-reines',
    nom: 'Élevage de reines',
    categorie: 'essaims-elevage',
    description: 'L’élevage de reines pratiqué par CAPANA. Conditions et prix sur demande.',
    descriptionLongue:
      'CAPANA pratique l’élevage de reines. Contactez-nous pour connaître les conditions et les prix.',
    images: [{ id: 'cellules-royales', alt: 'Cellules royales entourées d’abeilles' }],
    prix: null,
    formats: [],
    caracteristiques: [],
    disponibilite: null,
    vedette: false,
  },
]
