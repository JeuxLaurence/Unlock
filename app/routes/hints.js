import Route from '@ember/routing/route';

export default class HintsRoute extends Route {
  async model() {
    var hintsData = [
      {
        id: '90',
        hint: [
          "Ces quatre animaux ont tous un nombre de membre différent."
        ],
        mode: 'jumanji'
      },
      {
        id: '73',
        hint: [
          "Observez bien la première lettre de chaque phrase."
        ],
        mode: 'jumanji'
      },
      {
        id: '57',
        hint: [
          "« Compter les vers » Comme en poésie?"
        ],
        mode: 'jumanji'
      },
      {
        id: '41',
        hint: [
          "Un nombre se cache auditivement dans chacune de ces phrases."
        ],
        mode: 'jumanji'
      },
      {
        id: '16',
        hint: [
          "Tout comme le chien Sushi, vous devez chasser les consonnes de ce texte."
        ],
        mode: 'jumanji'
      },
      {
        id: '65',
        hint: [
          "« Comme la mélodie » et la note 1 c’est le do. "
        ],
        mode: 'jumanji'
      }
    ];
    return hintsData;
  }
}
