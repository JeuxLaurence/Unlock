import Route from '@ember/routing/route';

export default class AeroportRoute extends Route {
  async model() {
    var aeroportData = {
      answer: ['JFK'],
      unlock: ["C'est bon! Retournez la carte 64"],
    };
    return aeroportData;
  }
}
