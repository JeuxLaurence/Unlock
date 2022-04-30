import Route from '@ember/routing/route';

export default class SortilegeRoute extends Route {
  async model(params) {
    var codeData = [
      {
        answer: ['K', '2', '8'],
        unlock: ["Le jet de lumière réveille Dumbledore. Retournez la carte 27."],
      },
      {
        answer: ['C', '9', '3'],
        unlock: [
          "L’encre invisible se révèle! Retournez la carte 94.",
        ],
      },
      {
        answer: ['G', '3', '3'],
        unlock: [
          "Vous devenez invisible! Le ministre ne vous voit pas et vous sortez par derrière. Retournez la carte 12.",
        ],
      },
      {
        answer: ['B', '1', '2'],
        unlock: [
          "Vous coupez les racines du Saule Cogneur qui se calme aussitôt. Retournez la carte 75.",
        ],
      },
      {
        answer: ['N', '4', '6'],
        unlock: [
          "Le rocher se soulève dans les airs. Retournez la carte 30.",
        ],
      },
      {
        answer: ['M', '3', '0'],
        unlock: [
          "Vous déverrouillez la porte et entrez dans le passage secret. Retournez la carte 100.",
        ],
      },
      {
        answer: ['O', '3', '6'],
        unlock: [
          "Votre patronus chasse le détraqueur! Retournez la carte 22.",
        ],
      },
      {
        answer: ['D', '1', '9'],
        unlock: [
          "L’eau éteint le feu et vous trouvez un objet. Retournez la carte 8.",
        ],
      }
    ];
    return codeData;
  }
}
