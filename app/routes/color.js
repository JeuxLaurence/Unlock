import Route from '@ember/routing/route';

export default class ColorRoute extends Route {
  async model() {
    var colorData = {
      answer: ['darkturquoise', 'orange', 'lime', 'blue', 'pink'],
      unlock: ['Le cellulaire est déverrouillé, retournez la carte 45'],
    };
    return colorData;
  }
}
