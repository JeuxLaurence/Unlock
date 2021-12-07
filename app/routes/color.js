import Route from '@ember/routing/route';

export default class ColorRoute extends Route {
  async model(params) {
    var colorData = [
      {
        id: 1,
        answer: ['turquoise', 'turquoise', 'turquoise', 'yellow', 'red'],
        unlock: ['3', 'E', '67'],
      },
    ];
    return colorData.filter((data) => data.id == params.cardnumber)[0];
  }
}
