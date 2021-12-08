import Route from '@ember/routing/route';

export default class CodesRoute extends Route {
  async model(params) {
    var codeData = [
      {
        answer: ['3', '7', '0', '5'],
        unlock: ["Le placard s'ouvre, retournez la carte 19"],
      },
      {
        answer: ['9', '4', '2', '1'],
        unlock: [
          "L'armoire s'ouvre et vous trouvez les économies de Joey, retournez la carte 1",
        ],
      },
      {
        answer: ['6', '2', '9', '8'],
        unlock: [
          "Vous enfilez l'uniforme et entrez dans la zone d'employé, retournez la carte 94",
        ],
      },
      {
        answer: ['1', '8', '5', '3'],
        unlock: [
          "La porte vers la zone d'embarquements s'ouvre, retournez la carte 58",
        ],
      },
      {
        answer: ['2', '4', '7', '3'],
        unlock: [
          "Le message provient de Rachel! Elle tente de sortir de l'avion mais l'employée l'empêche. Oh mon Dieu est-elle sortie de l'avion? Retournez la carte C",
        ],
      },
    ];
    return codeData;
  }
}
