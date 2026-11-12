// Formations proposées par CAPANA. Dates, tarifs, durées et lieux sont « à compléter » : ils restent
// à null tant qu'ils ne sont pas confirmés (ne rien inventer). Quand une valeur est renseignée,
// la page Formations l'affiche à la place du message par défaut.
//
// `image` : { id, alt, illustration? } ou null. Les illustrations ne sont jamais présentées comme
// des photos de CAPANA.

export const MESSAGE_MODALITES =
  'Contactez-nous pour connaître les prochaines sessions et les modalités de formation.'

export const formations = [
  {
    id: 'initiation',
    titre: 'Initiation à l’apiculture',
    resume: 'Une formation théorique pour comprendre les bases avant de se lancer.',
    interet:
      'Pour découvrir l’apiculture et poser les bases avant d’installer un premier rucher : la formation théorique de CAPANA.',
    image: {
      id: 'illustration-formation-theorique',
      alt: 'Illustration : formation en salle',
      illustration: true,
    },
    dates: null, // À COMPLÉTER
    tarif: null, // À COMPLÉTER
    duree: null, // À COMPLÉTER
    lieu: null, // À COMPLÉTER
  },
  {
    id: 'formation-pratique',
    titre: 'Formation technique et pratique au rucher',
    resume: 'Apprendre les gestes au contact des ruches.',
    interet:
      'Pour apprendre les gestes de l’apiculture sur le terrain : la formation technique et pratique au rucher.',
    image: {
      id: 'illustration-formation-pratique',
      alt: 'Illustration : apiculteurs en tenue de protection devant une ruche',
      illustration: true,
    },
    dates: null, // À COMPLÉTER
    tarif: null, // À COMPLÉTER
    duree: null, // À COMPLÉTER
    lieu: null, // À COMPLÉTER
  },
  {
    id: 'perfectionnement',
    titre: 'Perfectionnement',
    resume: 'Approfondir sa pratique quand on conduit déjà des ruches.',
    interet: 'Pour les apiculteurs qui ont déjà démarré et souhaitent approfondir leur pratique.',
    image: null,
    dates: null, // À COMPLÉTER
    tarif: null, // À COMPLÉTER
    duree: null, // À COMPLÉTER
    lieu: null, // À COMPLÉTER
  },
  {
    id: 'accompagnement-projet',
    titre: 'Accompagnement de projet',
    resume: 'Être accompagné pour construire et lancer son projet apicole.',
    interet: 'Pour être accompagné dans la construction et le lancement d’un projet apicole.',
    image: null,
    dates: null, // À COMPLÉTER
    tarif: null, // À COMPLÉTER
    duree: null, // À COMPLÉTER
    lieu: null, // À COMPLÉTER
  },
]
