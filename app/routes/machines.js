import Route from '@ember/routing/route';

export default class MachinesRoute extends Route {
  async model() {
    var machineData = [
      {
        id: '25',
        type: 'chiffre',
      },
      {
        id: '41',
        type: 'patronus',
      },
      {
        id: '50',
        type: 'escalier',
      },
      {
        id: '63',
        type: 'souvenir',
      },
      {
        id: '88',
        type: 'empreinte',
      },
      {
        id: '92',
        type: 'echec',
      },
      {
        id: '94',
        type: 'hagrid',
      },
      {
        id: '99',
        type: 'memoire',
      },
    ];
    return machineData;
  }
}
