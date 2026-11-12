// Services et accompagnement de CAPANA. Seuls les services de la fiche figurent ici.
// `image` : { id, alt, illustration? } (voir src/data/images.js) ou null si aucun visuel n'est disponible.
// `appel` : texte du bouton qui mène à la demande de devis ou d'accompagnement.

export const services = [
  {
    id: 'installation-ruchers',
    titre: 'Installation de ruchers',
    resume: 'Mettre en place un rucher pour démarrer ou développer une activité apicole.',
    description:
      'CAPANA accompagne l’installation de ruchers. Contactez-nous pour décrire votre projet et obtenir un devis.',
    image: { id: 'rucher-paysage', alt: 'Rangées de ruches colorées et apiculteur en tenue au rucher' },
    appel: 'Demander un devis',
  },
  {
    id: 'accompagnement-porteurs-projet',
    titre: 'Accompagnement des porteurs de projet',
    resume: 'Un appui pour celles et ceux qui souhaitent se lancer dans l’apiculture.',
    description:
      'CAPANA accompagne les porteurs de projet qui souhaitent découvrir l’apiculture ou développer une activité apicole.',
    // Photo réelle : ne pas ajouter de légende qui nomme les personnes ou l'événement.
    image: { id: 'accompagnement', alt: 'Réunion avec des intervenants assis autour d’une table' },
    appel: 'Demander un accompagnement',
  },
  {
    id: 'redaction-projets',
    titre: 'Rédaction de projets agricoles et apicoles',
    resume: 'Mettre un projet par écrit : le structurer et le présenter clairement.',
    description:
      'CAPANA peut vous aider à rédiger votre projet agricole ou apicole. Contactez-nous pour en discuter.',
    // À COMPLÉTER : photo libre de droits à trouver (voir README).
    image: null,
    appel: 'Demander un devis',
  },
  {
    id: 'conseils-techniques',
    titre: 'Conseils techniques',
    resume: 'Des conseils pour conduire vos ruches et vos colonies.',
    description:
      'CAPANA répond à vos questions techniques sur l’apiculture. Contactez-nous pour en savoir plus.',
    image: null,
    appel: 'Contacter CAPANA',
  },
  {
    id: 'suivi-exploitations',
    titre: 'Suivi des exploitations apicoles',
    resume: 'Un suivi dans la durée de votre exploitation apicole.',
    description:
      'CAPANA assure le suivi d’exploitations apicoles. Contactez-nous pour connaître les modalités.',
    // À COMPLÉTER : photo libre de droits à trouver (voir README).
    image: null,
    appel: 'Demander un devis',
  },
]
