import Route from '@ember/routing/route';

export default class MachinesRoute extends Route {
  async model() {
    var machineData = [
      {
        id: '25',
        type: 'chiffre',
        mode: 'harry'
      },
      {
        id: '41',
        type: 'patronus',
        mode: 'harry'
      },
      {
        id: '50',
        type: 'escalier',
        mode: 'harry'
      },
      {
        id: '63',
        type: 'souvenir',
        mode: 'harry'
      },
      {
        id: '88',
        type: 'empreinte',
        mode: 'harry'
      },
      {
        id: '92',
        type: 'echec',
        mode: 'harry'
      },
      {
        id: '94',
        type: 'hagrid',
        mode: 'harry'
      },
      {
        id: '99',
        type: 'memoire',
        mode: 'harry'
      },
      {
        id: '19',
        type: 'generic',
        mode: 'jumanji'
      },
      {
        id: '35',
        type: 'generic',
        mode: 'jumanji'
      }
    ];
    return machineData;
  }
}
