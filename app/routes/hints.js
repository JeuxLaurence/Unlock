import Route from '@ember/routing/route';

export default class HintsRoute extends Route {
  async model() {
    var hintsData = [
      {
        id: '1',
        hint: [
          "Ils sont trop bien protégés, mais ils sont en première place. Il vous faudrait une carapace bleue."
        ],
        mode: 'mario'
      },
      {
        id: '3',
        hint: [
          "Ils sont protégés par une carapace, vaut mieux lancer quelque chose devant eux."
        ],
        mode: 'mario'
      },
      {
        id: '7',
        hint: [
          "Observez bien les choix de chaque joueur. A doit être unique. B est à la croisée des deux paires. C'est au centre d'un quatuor et D n'est pas dans la trajectoire du quatuor."
        ],
        mode: 'mario'
      },
      {
        id: '8',
        hint: [
          "Ces étapes vous aideront à placer le tableau en ordre."
        ],
        mode: 'mario'
      },
      {
        id: '10',
        hint: [
          "Le seul moyen de sauver Mario est avec un Yoshi."
        ],
        mode: 'mario'
      },
      {
        id: '11',
        hint: [
          "Observez bien sur quoi se tient Koopa Bones."
        ],
        mode: 'mario'
      },
      {
        id: '18',
        hint: [
          "Observez bien le morceau de casse-tête, il ressemble un des items, non?"
        ],
        mode: 'mario'
      },
      {
        id: '19',
        hint: [
          "À Mario Party, Peach est cachée dans les cocos de Pâques, regardez bien au-dessus d'elle."
        ],
        mode: 'mario'
      },
      {
        id: '21',
        hint: [
          "Bébé Mario cache un objet chez lui."
        ],
        mode: 'mario'
      },
      {
        id: '32',
        hint: [
          "Avez-vous essayé de tourner le dos à votre carte?"
        ],
        mode: 'mario'
      },
      {
        id: '34',
        hint: [
          "Ces vis sont serrées, il vous faudrait quelque chose de plat en métal pour l'ouvrir."
        ],
        mode: 'mario'
      },
      {
        id: '35',
        hint: [
          "Qui n'est pas dans une trajectoire d'un quatuor?"
        ],
        mode: 'mario'
      },
      {
        id: '36',
        hint: [
          "Leurs arrières ne sont pas protégés, profitez-en!"
        ],
        mode: 'mario'
      },
      {
        id: '37',
        hint: [
          "L'aide-mémoire pourrait vous être utile. Chaque main pointe une case."
        ],
        mode: 'mario'
      },
      {
        id: '40',
        hint: [
          "Plusieurs morceaux sont inutiles. Reconstituez l'image d'une console."
        ],
        mode: 'mario'
      },
      {
        id: '41',
        hint: [
          "Mis bout à bout, cela vous donne l'ordre des formes à utiliser dans le livre."
        ],
        mode: 'mario'
      },
      {
        id: '42',
        hint: [
          "Avez-vous bien observer les contrôles de l'arcade?"
        ],
        mode: 'mario'
      },
      {
        id: '48',
        hint: [
          "Un champion ajouté d'un GN? Cela semble créer un nouveau mot."
        ],
        mode: 'mario'
      },
      {
        id: '52',
        hint: [
          "Un d'eux n'a pas de pair."
        ],
        mode: 'mario'
      },
      {
        id: '55',
        hint: [
          "Il y a un objet près de la case de départ."
        ],
        mode: 'mario'
      },
      {
        id: '57',
        hint: [
          "Peach est cachée dans les cocos de Pâques, regardez bien au-dessus d'elle."
        ],
        mode: 'mario'
      },
      {
        id: '58',
        hint: [
          "Trouvez les deux paires et voyez qui est à la croisée."
        ],
        mode: 'mario'
      },
      {
        id: '64',
        hint: [
          "Observez-bien sur quel chiffre tombent les formes, si on feuilletait les pages."
        ],
        mode: 'mario'
      },
      {
        id: '66',
        hint: [
          "Comment avez-vous payé pour cet indice? Pas de tricherie!"
        ],
        mode: 'mario'
      },
      {
        id: '68',
        hint: [
          "Observez bien ces mouvements avec ceux du Gameboy. Lesquels concordent avec le trajet de Mario?"
        ],
        mode: 'mario'
      },
      {
        id: '69',
        hint: [
          "Qui est au centre d'un quatuor?"
        ],
        mode: 'mario'
      },
      {
        id: '70',
        hint: [
          "Placez les cinq morceaux du tableau dans le bon ordre. Puis comptez la quantité de ? dans les premières étapes."
        ],
        mode: 'mario'
      },
      {
        id: '71',
        hint: [
          "Il n'y a pas de logique, vous devez utiliser vos connaissances. Au besoin vous avez le droit de googler."
        ],
        mode: 'mario'
      },
      {
        id: '72',
        hint: [
          "Luigi tient un des items dans ses mains."
        ],
        mode: 'mario'
      },
      {
        id: '74',
        hint: [
          "Le guide vous aidera. Portez bien attention aux mouvements. B sert à sauter et A pour cogner sous un cube."
        ],
        mode: 'mario'
      },
      {
        id: '84',
        hint: [
          "Il y a un item près de la case de départ."
        ],
        mode: 'mario'
      },
      {
        id: '88',
        hint: [
          "Observez bien ce que tiennent les Yoshis, Mario aurait un souvenir de chacun chez lui, sauf un."
        ],
        mode: 'mario'
      },
      {
        id: '89',
        hint: [
          "Shrek n'est pas un combattant dans Super Smash Bros"
        ],
        mode: 'mario'
      },
      {
        id: '92',
        hint: [
          "Il n'y a pas d'item à apercevoir, seulement un d'entre eux peut s'additionner à un boss aussi élevé."
        ],
        mode: 'mario'
      },
      {
        id: '93',
        hint: [
          "Remarquez ses mots: Cent, moins deux, faire la différence."
        ],
        mode: 'mario'
      }
    ];
    return hintsData;
  }
}
