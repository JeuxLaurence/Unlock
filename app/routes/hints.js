import Route from '@ember/routing/route';

export default class HintsRoute extends Route {
  async model() {
    var hintsData = [
      {
        id: '68',
        hint: [
          "Avez-vous bien observé l'emplacement des tasses?",
          'Les tasses sont positionnées pour tracer des chiffres.',
        ],
      },
      {
        id: '16',
        hint: ["Faudrait-il réutiliser les lettres d'une seule couleur?"],
      },
      {
        id: '96',
        hint: [
          'Commencez par LAG, JFK, NLI ou BNI.',
          "Vous devez retracer les escales jusqu'à CDG.",
        ],
      },
      {
        id: '95',
        hint: ['Les tirs rebondissent toujours en angle droit.'],
      },
      {
        id: '79',
        hint: [
          "Avez-vous observé la liste d'épicerie?",
          "Si l'audition de Joey est demain, aujourd'hui est donc lundi.",
        ],
      },
      {
        id: '85',
        hint: [
          'Avez-vous bien observé les cartes 76 et 99?',
          'La construction ressemble à un château de carte.',
          'Vous avez 7 cartes, construisez le château de carte.',
        ],
      },
      {
        id: '34',
        hint: ['Avez-vous bien compté les items dans les valises?'],
      },
      {
        id: '25',
        hint: ['Son regard est familier, le connaissez-vous?'],
      },
      {
        id: '28',
        hint: [
          'Ce chapeau pourrait faire un bon récipient pour recevoir des dons.',
        ],
      },
      {
        id: '67',
        hint: [
          "Il y a un lien entre la carte de l'aéroport et l'aide-mémoire de Rachel.",
          ' Observez bien la couleur des magasins que Rachel doit visiter.',
        ],
      },
      {
        id: '26',
        hint: ['Karl pourrait peut-être vous aider.'],
      },
      {
        id: '90',
        hint: [
          'Vous devez remplir chaque carré de couleur avec les chiffres de 1 à 9.',
        ],
      },
      {
        id: '44',
        hint: ["Utilisez l'aide-mémoire du garde."],
      },
      {
        id: '72',
        hint: [
          "Apparemment c'est l'après-midi dans ce pays scandinave.",
          'Quelle heure est-il en Norvège?',
        ],
      },
      {
        id: '81',
        hint: [
          'Observez le poster de la salle des employés.',
          "Cam est l'employé du mois.",
          'Les horloges pourraient encore vous être utiles.',
        ],
      },
      {
        id: '78',
        hint: [
          "Avez-vous assemblé l'avion?",
          'La note de Rachel indique son siège.',
        ],
      },
      {
        id: 'B',
        hint: ["Remarquez bien les taches d'encres."],
      },
      {
        id: 'D',
        hint: [
          "Avez-vous suivi les indications de l'aide-mémoire?",
          'La flèche indique le début de la combinaison.',
        ],
      },
    ];
    return hintsData;
  }
}
