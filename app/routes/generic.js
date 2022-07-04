import Route from '@ember/routing/route';

export default class GenericRoute extends Route {
  async model(machine) {
    var genericMachineData = []
    genericMachineData[19] = 
      {
      	id: '19',
      	image: '/Unlock/assets/images/19_cle_etrange.jpg',
        question: 'Laquelle de ces clés étranges est la bonne?',
        answer: 'K',
        response: 'Oui c’est la bonne clé! C’est bête la porte du sous-sol n’a pas de serrure. Vous remarquez toutefois les chiffres 3846 engravés dans le bronze de la clé.',
        mode: 'jumanji'
    };
    return genericMachineData[machine.machine_id];
  }
}
