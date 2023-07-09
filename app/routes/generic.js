import Route from '@ember/routing/route';

export default class GenericRoute extends Route {
  async model(machine) {
    var genericMachineData = []
    genericMachineData[57] = {
        id: '57',
        image: '/Unlock/assets/images/57_party.jpg',
        question: 'Vous devez jouer une partie de Mario Party! Vous devrez tomber sur les quatre cases ?, chacune des cases vous autorise à révéler son indice.',
        answerType: 'hint',
        hints: ["Retournez la carte 41", "Retournez la carte 73", "Retournez la carte 13", "Retournez la carte 59"],
        mode: 'mario'
    };
    genericMachineData[84] = {
        id: '84',
        image: '/Unlock/assets/images/84_party.jpg',
        question: 'Vous devez jouer une partie de Mario Party! Vous devrez tomber sur les quatre cases ?, chacune des cases vous autorise à révéler un indice.',
        answerType: 'hint',
        hints: ["Retournez la carte 21", "Retournez la carte 89", "Retournez la carte 55", "Retournez la carte 19"],
        mode: 'mario'
    };
    genericMachineData[64] = {
        id: '64',
        image: '/Unlock/assets/64.pdf',
        question: 'C\'est le temps de jouer à Booksquirm!',
        answerType: 'pdf',
        hints: ["Retournez la carte 21", "Retournez la carte 89", "Retournez la carte 55", "Retournez la carte 19"],
        mode: 'mario'
    };
    genericMachineData[67] = 
      {
        id: '67',
        image: '/Unlock/assets/images/67_donkey.jpg',
        question: 'Il faut sauver la Princesse Peach! Les tonneaux de Donkey Kong dévalent en suivant la première échelle qu\'ils croisent. À quel endroit doit se placer Mario afin d\'être sain et sauf?',
        answer: 'B',
        answerType: 'single',
        response: 'Vous battez Donkey Kong, il laisse tomber un objet! Retournez la carte 2.',
        mode: 'mario'
    };
    genericMachineData[88] = 
      {
        id: '88',
        image: '/Unlock/assets/images/88_yoshi.jpg',
        question: 'Bébé Mario a voyagé avec tous les yoshis sauf un, quelle est sa couleur?',
        answer: 'yoshi-yellow',
        answerType: 'color',
        response: 'Excellent! Retournez la carte 22',
        mode: 'mario'
    };
    genericMachineData[74] = 
      {
        id: '74',
        image: '/Unlock/assets/images/74_gameboy.jpg',
        question: 'Vous êtes dans le jeu Super Mario Land, mais dans quel monde et quel tableau? Mario doit sauter sous les quatre cubes ? le plus rapidement possible.',
        answer: ['3', '3'],
        answerType: 'twoSelect',
        response: 'C\'est bon! Retournez la carte 48',
        mode: 'mario'
    };
    genericMachineData[71] = 
      {
        id: '71',
        image: '/Unlock/assets/images/71_item.jpg',
        question: 'Afin de gagner la course finale, vous devrez être alerte aux armes de vos adversaires. Associez chaque arme à son joueur.',
        answer: ['A7', 'B1', 'C6', 'D5', 'E3', 'F8', 'G4', 'H2'],
        answerType: 'twoColumn',
        response: 'C\'est bon! Vous commencez la course finale, retournez la carte 93.',
        mode: 'mario'
    };
   /* genericMachineData[19] = 
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
        answer: ["2", "1"],
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
    };*/
    return genericMachineData[machine.machine_id];
  }
}
