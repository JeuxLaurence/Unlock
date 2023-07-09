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
      },
      {
        id: '51',
        type: 'generic',
        mode: 'jumanji'
      },
      {
        id: '62',
        type: 'generic',
        mode: 'jumanji'
      },
      {
        id: '66',
        type: 'generic',
        mode: 'jumanji'
      },
      {
        id: '17',
        type: 'ballerina',
        mode: 'jumanji'
      },
      {
        id: '57',
        type: 'generic',
        mode: 'mario'
      },
      {
        id: '84',
        type: 'generic',
        mode: 'mario'
      },
      {
        id: '64',
        type: 'generic',
        mode: 'mario'
      },
      {
        id: '67',
        type: 'generic',
        mode: 'mario'
      },
      {
        id: '88',
        type: 'generic',
        mode: 'mario'
      },
      {
        id: '74',
        type: 'generic',
        mode: 'mario'
      },
      {
        id: '71',
        type: 'generic',
        mode: 'mario'
      }
    ];
    return machineData;
  }
}
