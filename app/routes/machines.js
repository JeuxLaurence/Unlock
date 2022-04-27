import Route from '@ember/routing/route';

export default class MachinesRoute extends Route {
  async model() {
    var machineData = [
      {
        id: '25',
        type: 'tbd',
      },
      {
        id: '41',
        type: 'tbd',
      },
      {
        id: '50',
        type: 'tbd',
      },
      {
        id: '63',
        type: 'tbd',
      },
      {
        id: '88',
        type: 'tbd',
      },
      {
        id: '92',
        type: 'tbd',
      },
      {
        id: '94',
        type: 'tbd',
      },
      {
        id: '99',
        type: 'tbd',
      },
    ];
    return machineData;
  }
}
