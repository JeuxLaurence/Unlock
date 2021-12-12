import Route from '@ember/routing/route';

export default class AvionRoute extends Route {
	async model() {
    var avionData = {
      answer: ['D20'],
      unlock: ["Ross retrouve enfin Rachel! Retournez la carte 75"],
    };
    return avionData;
  }
}
