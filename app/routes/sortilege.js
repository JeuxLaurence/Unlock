import Route from '@ember/routing/route';

export default class SortilegeRoute extends Route {
  async model(params) {
    var codeData = [
      {
        answer: ['K', '2', '8'],
        unlock: ["Le jet de lumière réveille Dumbledore. Retournez la carte 27."],
        mode: "hardry"
      },
      {
        answer: ['C', '9', '3'],
        unlock: [
          "L’encre invisible se révèle! Retournez la carte 94.",
        ],
        mode: "harry"
      },
      {
        answer: ['G', '3', '3'],
        unlock: [
          "Vous devenez invisible! Le ministre ne vous voit pas et vous sortez par derrière. Retournez la carte 12.",
        ],
        mode: "harry"
      },
      {
        answer: ['B', '1', '2'],
        unlock: [
          "Vous coupez les racines du Saule Cogneur qui se calme aussitôt. Retournez la carte 75.",
        ],
        mode: "harry"
      },
      {
        answer: ['N', '4', '6'],
        unlock: [
          "Le rocher se soulève dans les airs. Retournez la carte 30.",
        ],
        mode: "harry"
      },
      {
        answer: ['M', '3', '0'],
        unlock: [
          "Vous déverrouillez la porte et entrez dans le passage secret. Retournez la carte 100.",
        ],
        mode: "harry"
      },
      {
        answer: ['O', '3', '6'],
        unlock: [
          "Votre patronus chasse le détraqueur! Retournez la carte 22.",
        ],
        mode: "harry"
      },
      {
        answer: ['D', '1', '9'],
        unlock: [
          "L’eau éteint le feu et vous trouvez un objet. Retournez la carte 8.",
        ],
        mode: "harry"
      }
    ];
    return codeData;
  }
}
