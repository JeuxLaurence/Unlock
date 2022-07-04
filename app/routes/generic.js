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
        answerType: 'single',
        response: 'Oui c’est la bonne clé! C’est bête la porte du sous-sol n’a pas de serrure. Vous remarquez toutefois les chiffres 3846 engravés dans le bronze de la clé.',
        mode: 'jumanji'
    };
    genericMachineData[35] = 
      {
        id: '35',
        image: '/Unlock/assets/images/35_des.jpg',
        question: 'Par déduction, quels sont les deux chiffres manquant sur chacun de ces dés?',
        answer: [5, 3],
        answerType: 'two',
        response: 'Les dés sont bons! Retournez la carte 71.',
        mode: 'jumanji'
    };
    return genericMachineData[machine.machine_id];
  }
}
