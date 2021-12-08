import Route from '@ember/routing/route';

export default class QuestionRoute extends Route {
  async model() {
    var questionData = [
      {
        question:
          "En quelle année le célèbre pilote Ken Adams a-t-il fait atterrir héroïquement un avion d'urgence?",
        answer: '1963',
        valid: false,
      },
      {
        question: 'En quelle année ai-je été engagé chez NLI?',
        answer: '2008',
        valid: false,
      },
      {
        question:
          "Quelle est la différence d'heure entre la Suède et l'Écosse?",
        answer: '3',
        valid: false,
      },
    ];
    return questionData;
  }
}
