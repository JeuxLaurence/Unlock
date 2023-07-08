import Route from '@ember/routing/route';

export default class GameoverRoute extends Route {
  async model(params) {
    var gameoverData = [
      {
        id: "1",
        question: "Quel était le nom original de la Princesse Peach?",
        choice: ["The Peach", "Princess Toadstool", "Princess Fruity", "Princess Mushroom"],
        answer: "Princess Toadstool",
        mode: "mario"
      },
      {
        id: "2",
        question: "Dans quel jeu fut introduit Waluigi?",
        choice: ["Mario Tennis", "Mario Golf", "Mario Party 4", "Super Smash Bros"],
        answer: "Mario Tennis",
        mode: "mario"
      },
      {
        id: "3",
        question: "Qui interprète la voix de Bowser dans le film de Mario?",
        choice: ["Chris Pratt", "Steve Carell", "Dwayne Johnson", "Jack Black"],
        answer: "Jack Black",
        mode: "mario"
      },
      {
        id: "4",
        question: "Quels sont les 4 tournois dans Mario Kart 64?",
        choice: ["Champignon-Fleur-Étoile-Éclair", "Champignon-Étoile-Carapace-Spéciale", "Champignon-Fleur-Étoile-Spéciale", "Carapace-Banane-Fleur-Spéciale"],
        answer: "Champignon-Fleur-Étoile-Spéciale",
        mode: "mario"
      },
      {
        id: "5",
        question: "De quel jeu provient Rosalina?",
        choice: ["Super Smash Bros", "Mario Sunshine", "Paper Mario", "Super Mario Galaxy"],
        answer: "Super Mario Galaxy",
        mode: "mario"
      },
      {
        id: "6",
        question: "Sur quelle console fut introduit le jeu Super Smash Bros?",
        choice: ["SNES", "N64", "Gamecube", "Wii"],
        answer: "N64",
        mode: "mario"
      },
      {
        id: "7",
        question: "Qui est le créateur de Mario?",
        choice: ["Shigeru Miyamoto", "Fusajiro Yamuachi", "Hiroshi Yamauchi", "Gunpei Yokoi"],
        answer: "Shigeru Miyamoto",
        mode: "mario"
      },
      {
        id: "8",
        question: "Combien de couleur de yoshi y a-t-il dans Super Mario World SNES?",
        choice: ["1", "4", "6", "12"],
        answer: "4",
        mode: "mario"
      },
      {
        id: "9",
        question: "Dans combien de jeu différent peut-on rouler sur la piste Rainbow Road?",
        choice: ["6", "8", "10", "14"],
        answer: "8",
        mode: "mario"
      },
      {
        id: "10",
        question: "Lequel de ces personnages est apparu en premier dans l’univers Mario?",
        choice: ["Bowser", "Daisy", "Luigi", "Toad"],
        answer: "Luigi",
        mode: "mario"
      },
      {
        id: "11",
        question: "Lequel de ces jeux n’existe pas?",
        choice: ["Mario Underground", "Mario is missing!", "Mario’s Time Machine", "Mario Clash"],
        answer: "Mario Underground",
        mode: "mario"
      },
      {
        id: "12",
        question: "Qui est le cousin de Mario?",
        choice: ["Waluigi", "Wario", "Luigi", "Luigeena"],
        answer: "Luigeena",
        mode: "mario"
      },
      {
        id: "13",
        question: "Combien de jeu de Mario Party existe-il?",
        choice: ["10", "13", "15", "17"],
        answer: "17",
        mode: "mario"
      },
      {
        id: "14",
        question: "Lequel de ces personnages ne fait pas partit de la famille Kong?",
        choice: ["Cranky", "Funky", "Chunky", "Spunky"],
        answer: "Spunky",
        mode: "mario"
      },
      {
        id: "15",
        question: "En quelle année est né le personnage de Mario?",
        choice: ["1981", "1983", "1985", "1990"],
        answer: "1983",
        mode: "mario"
      },
      {
        id: "16",
        question: "Quel est le dé de Peach dans Super Mario Party?",
        choice: ["1-3-3-3-5-6", "1-1-1-5-6-7", "0-2-4-4-4-6", "0-1-3-5-5-7"],
        answer: "0-2-4-4-4-6",
        mode: "mario"
      },
      {
        id: "17",
        question: "Lequel de ces noms n’est pas un acolyte de Bowser?",
        choice: ["Kimmy", "Larry", "Wendy", "Iggy"],
        answer: "Kimmy",
        mode: "mario"
      },
      {
        id: "18",
        question: "Daisy est la princesse de quel royaume?",
        choice: ["Mushroom Kingdom", "Sarasaland", "Flowerland", "Daisyland"],
        answer: "Sarasaland",
        mode: "mario"
      },
      {
        id: "19",
        question: "Combien de choix de combattant y avait-il dans le premier Super Smash Bros?",
        choice: ["8", "12", "16", "20"],
        answer: "12",
        mode: "mario"
      },
      {
        id: "20",
        question: "Lequel de ces noms n’est pas un Minigame de Mario Party?",
        choice: ["Crazy cutter", "Treasure seeker", "Pipe Maze", "Nut cases"],
        answer: "Treasure seeker",
        mode: "mario"
      },
      {
        id: "21",
        question: "Au maximum, combien de secondes a Yoshi pour reprendre Bébé Mario avant qu’il se fasse enlever dans Yoshi’s Island?",
        choice: ["10", "20", "30", "60"],
        answer: "30",
        mode: "mario"
      },
      {
        id: "22",
        question: "Dans combien de jeux différents sur la console Gamecube apparait Mario?",
        choice: ["8", "12", "14", "24"],
        answer: "14",
        mode: "mario"
      },
      {
        id: "23",
        question: "Que mord Waluigi lorsqu’il est victorieux?",
        choice: ["Une rose", "Son bras", "Son chapeau", "Une clé anglais"],
        answer: "Une rose",
        mode: "mario"
      }
    ];
    return gameoverData;
  }

  setupController(controller, model) {
    var chosenModel = this.findUnansweredQuestion(model)

    controller.set('currentQuestion', chosenModel.question);
    controller.set('currentChoiceOne', chosenModel.choice[0]);
    controller.set('currentChoiceTwo', chosenModel.choice[1]);
    controller.set('currentChoiceThree', chosenModel.choice[2]);
    controller.set('currentChoiceFour', chosenModel.choice[3]);
    controller.set('currentAnswer', chosenModel.answer)
    controller.set('model', chosenModel);
  }

  findUnansweredQuestion(model) {
    var usedQuestions = JSON.parse(localStorage.getItem('usedQuestion'))
    var possibleIndex = [];
    for(var i=1; i <= 23; i++) {
      if( usedQuestions == null || !usedQuestions.includes(i.toString())) {
        possibleIndex.push(i)
      }
    }
    var chosenIndex = possibleIndex[Math.floor(Math.random()*possibleIndex.length)]
    var chosenModel = model.find(function(value,b,c){
      return value.id == chosenIndex
    })
    return chosenModel
  }
}