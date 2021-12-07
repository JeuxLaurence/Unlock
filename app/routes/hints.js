import Route from '@ember/routing/route';

export default class HintsRoute extends Route {
  async model() {
    var hintsData = [
      {
        id: '1',
        hint: [
          'As tu bien regarder carte?',
          'Les couleurs sonts importantes',
          'Les couleurs match avec des chiffres',
        ],
      },
    ];
    return hintsData;
  }
}
