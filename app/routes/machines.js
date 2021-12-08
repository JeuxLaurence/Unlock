import Route from '@ember/routing/route';

export default class MachinesRoute extends Route {
  async model() {
    var machineData = [
      {
        id: '38',
        type: 'gift',
      },
      {
        id: '96',
        type: 'something',
      },
      {
        id: '95',
        type: 'something',
      },
      {
        id: '85',
        type: 'something',
      },
      {
        id: '67',
        type: 'color',
      },
      {
        id: '81',
        type: 'question',
      },
      {
        id: '78',
        type: 'something',
      },
    ];
    return machineData;
  }
}
