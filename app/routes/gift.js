import Route from '@ember/routing/route';

export default class GiftRoute extends Route {
  async model() {
    var colorData = {
      answer: [
        'green_square',
        'green_circle',
        'blue_hexagon',
        'blue_triangle',
        'red_triangle',
        'yellow_square',
        'yellow_trapeze',
      ],
      unlock: ['Monica vous remercie, retournez la carte 2'],
    };
    return colorData;
  }
}
