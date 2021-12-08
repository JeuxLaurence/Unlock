import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class QuestionController extends Controller {
  firstValid = false;
  secondValid = false;
  thirdValid = false;
  answerIndex = 0;

  @action
  verify() {
    this.set('isMachineError', false);
    if (this.answerIndex == 0) {
      if (this.answer == '1963') {
        this.set('firstValid', true);
        this.set('newQuestion', 'En quelle année ai-je été engagé chez NLI?');
        this.answerIndex = 1;
        this.set('answer', null);
        return;
      } else {
        this.set('isMachineError', true);
        return;
      }
    }
    if (this.answerIndex == 1) {
      if (this.answer == '2008') {
        this.set('secondValid', true);
        this.set(
          'newQuestion',
          "Quelle est la différence d'heure entre la Suède et l'Écosse?"
        );
        this.answerIndex = 2;
        this.set('answer', null);
        return;
      } else {
        this.set('isMachineError', true);
        return;
      }
    }

    if (this.answerIndex == 2) {
      if (this.answer == '3') {
        this.set('thirdValid', true);
        this.set('isMachineSuccess', true);
        return;
      } else {
        this.set('isMachineError', true);
        return;
      }
    }
  }

  @action
  back() {
    this.set('newQuestion', null);
    this.set('firstValid', false);
    this.set('secondValid', false);
    this.set('thirdValid', false);
    this.set('answerIndex', 0);
    this.set('isMachineSuccess', false);
    this.set('isMachineError', false);
    this.replaceRoute('friends');
  }
}
