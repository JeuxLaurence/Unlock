import Route from '@ember/routing/route';

export default class ColorRoute extends Route {
  async model() {
    var colorData = {
      answer: ['turquoise', 'turquoise', 'turquoise', 'yellow', 'red'],
      unlock: ['Le cellulaire est déverrouillé, retournez la carte 45'],
    };
    return colorData;
  }
}
