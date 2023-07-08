import Route from '@ember/routing/route';

export default class CodesRoute extends Route {
  async model(params) {
    var codeData = [
      {
        answer: ['2', '1', '6', '0'],
        unlock: ["Vous ouvrez la cellule de Sirius! Retournez la carte 38."],
        mode: "harry"
      },
      {
        answer: ['8', '3', '9', '2'],
        unlock: [
          "La porte s’ouvre et vous arrivez à l’extérieur. Retournez la carte 14.",
        ],
        mode: "harry"
      },
      {
        answer: ['8', '3', '3', '2'],
        unlock: [
          "La porte s’ouvre et vous arrivez à l’extérieur. Retournez la carte 14.",
        ],
        mode: "harry"
      },
      {
        answer: ['3', '7', '9', '5'],
        unlock: [
          "Les portes de la penderie s’ouvrent et vous trouvez un objet. Retournez la carte 58.",
        ],
        mode: "harry"
      },
      {
        answer: ['4', '3', '8', '7'],
        unlock: [
          "La porte du dortoir s’ouvre. Retournez la carte 57.",
        ],
        mode: "harry"
      },
      {
        answer: ['3', '8', '1', '5'],
        unlock: [
          "La porte s’ouvre et vous arrivez à l’extérieur. Retournez la carte 14.",
        ],
        mode: "harry"
      },
      {
        answer: ['3', '8', '4', '6'],
        unlock: [
          "La porte du sous-sol s’ouvre. Retournez la carte 77.",
        ],
        mode: "jumanji"
      },
      {
        answer: ['1', '1', '5', '2'],
        unlock: [
          "C’est la bonne réponse. Une nouvelle menace sort du jeu. Retournez les cartes 52 et 92.",
        ],
        mode: "jumanji"
      },
      {
        answer: ['1', '1', '2', '1'],
        unlock: [
          "C’est la bonne réponse. Une nouvelle menace sort du jeu. Retournez les cartes 36 et 74.",
        ],
        mode: "jumanji"
      },
      {
        answer: ['4', '9', '3', '8'],
        unlock: [
          "C’est la bonne réponse. Une nouvelle menace sort du jeu. Retournez les cartes 38 et 48.",
        ],
        mode: "jumanji"
      },
      {
        answer: ['9', '5', '7', '4'],
        unlock: [
          "C’est la bonne réponse. Une nouvelle menace sort du jeu. Retournez les cartes 38 et 48.",
        ],
        mode: "jumanji"
      },
      {
        answer: ['6', '8', '5', '2'],
        unlock: [
          "Le réfrigérateur s’ouvre! Mais il est en désordre. Retournez la carte 27.",
        ],
        mode: "jumanji"
      },
      {
        answer: ['6', '5', '3', '7'],
        unlock: [
          "C’est la bonne réponse. Une nouvelle menace sort du jeu. Retournez la carte 8.",
        ],
        mode: "jumanji"
      },
      {
        answer: ['8', '4', '9', '7'],
        unlock: [
          "La caisse enregistreuse s’ouvre! Retournez la carte 24.",
        ],
        mode: "jumanji"
      },
      {
        answer: ['1', '5', '1', '5'],
        unlock: [
          "C’est la bonne réponse. Une nouvelle menace sort du jeu. Retournez les cartes 13 et 88.",
        ],
        mode: "jumanji"
      },
      {
        answer: ['2', '1', '6', '3'],
        unlock: [
          "Le compartiment s’ouvre et vous trouvez deux dés. Ils semblent étranges. Retournez la carte 35.",
        ],
        mode: "jumanji"
      },
      {
        answer: ['6', '3', '5', '9'],
        unlock: [
          "La vieille armoire s’ouvre et vous trouvez un objet. Retournez la carte 56.",
        ],
        mode: "jumanji"
      },
      {
        answer: ['4', '2', '8', '6'],
        unlock: [
          "La porte du grenier s’ouvre. Retournez la carte 14.",
        ],
        mode: "jumanji"
      },
      {
        answer: ['8', '0', '4', '3'],
        unlock: [
          "C’est la bonne réponse. Une nouvelle menace sort du jeu. Retournez les cartes 31 et 54.",
        ],
        mode: "jumanji"
      },
      {
        answer: ['5', '0', '6', '4'],
        unlock: [
          "La porte du sous-sol s’ouvre. Retournez la carte 77.",
        ],
        mode: "jumanji"
      },
      {
        answer: ['6', '2', '8', '7'],
        unlock: [
          "Le casier s'ouvre. Retournez la carte 40.",
        ],
        mode: "mario"
      },
      {
        answer: ['4', '2', '0', '1'],
        unlock: [
          "Vous terminez le tableau et arrivez au boss. Retournez la carte 11.",
        ],
        mode: "mario"
      },
      {
        answer: ['8', '5', '0', '9'],
        unlock: [
          "Vous déverrouillez la Wii et entrez dans Super Smash Bros Brawl. Retournez la carte 7.",
        ],
        mode: "mario"
      },
      {
        answer: ['2', '0', '0', '5'],
        unlock: [
          "Les joueurs sont prêts, le combat commence. Retournez la carte 92.",
        ],
        mode: "mario"
      },
      {
        answer: ['2', '9', '4', '5'],
        unlock: [
          "Vous remportez Booksquirm! Retournez la carte 18.",
        ],
        mode: "mario"
      }
    ];
    return codeData;
  }
}
