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
        answer: ["5", "3"], //TODO: Put correct answer here
        answerType: 'two',
        response: 'Les dés sont bons! Retournez la carte 71.',
        mode: 'jumanji'
    };
    genericMachineData[51] = 
      {
        id: '51',
        image: '/Unlock/assets/images/51_boites.jpg',
        question: 'De quelle boîte provient le son?',
        answer: "B",
        answerType: 'single',
        response: 'La boîte la plus bruyante s’ouvre, retournez la Carte 39.',
        mode: 'jumanji'
    };
    genericMachineData[62] = 
      {
        id: '62',
        image: '/Unlock/assets/images/62_plantation.jpg',
        question: 'À quelle plantation faut-il aller pour récolter la citronnelle?',
        answer: "C",
        answerType: 'single',
        response: 'C’est bon! Retournez la carte 26.',
        mode: 'jumanji'
    };
    genericMachineData[66] = 
      {
        id: '66',
        image: '/Unlock/assets/images/66_livres.jpg',
        question: 'Vous ne pouvez lire qu’un seul livre, lequel?',
        answer: "C",
        answerType: 'single',
        response: 'Oui c’est le bon! Retournez la carte 62.',
        mode: 'jumanji'
    };
    return genericMachineData[machine.machine_id];
  }
}
