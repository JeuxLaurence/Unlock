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
      }
    ];
    return codeData;
  }
}
