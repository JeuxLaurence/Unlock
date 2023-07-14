import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class GameoverController extends Controller {
  @service('global') globalService;

  currentQuestion = "";
  currentChoiceOne = "";
  currentChoiceTwo = "";
  currentChoiceThree = "";
  currentChoiceFour = "";
  currentAnswer = "";
  gameoverModal = false;

  @action
  isFirst() {
    if( this.currentAnswer == this.currentChoiceOne) {
      this.updateUsedQuestion()
      this.set('gameoverModal', true);
    } else {
      this.set('isMachineError', true)
    }
  }

  @action
  isSecond() {
    if( this.currentAnswer == this.currentChoiceTwo) {
      this.updateUsedQuestion()
      this.set('gameoverModal', true);
    } else {
      this.set('isMachineError', true)
    }
  }

  @action
  isThird() {
    if( this.currentAnswer == this.currentChoiceThree) {
      this.updateUsedQuestion()
      this.set('gameoverModal', true);
    } else {
      this.set('isMachineError', true)
    }
  }

  @action
  isFourth() {
    if( this.currentAnswer == this.currentChoiceFour) {
      this.updateUsedQuestion()
      this.set('gameoverModal', true);
    } else {
      this.set('isMachineError', true)
    }
  }

  updateUsedQuestion() {
    var usedQuestions = JSON.parse(localStorage.getItem('usedQuestion'))
    if( usedQuestions == null || usedQuestions.length == 0) {
      usedQuestions = []
    }
    usedQuestions.push(this.model.id)
    localStorage.setItem('usedQuestion', JSON.stringify(usedQuestions))
  }

  @action resetQuestions() {
    localStorage.setItem("usedQuestion", null)
  }

  @action
  back() {
    this.set('isMachineError', false);
    this.set('currentQuestion', null);
    this.set('currentAnswer', null);
    this.set('currentChoiceOne', null);
    this.set('currentChoiceTwo', null);
    this.set('currentChoiceThree', null);
    this.set('currentChoiceFour', null);
    this.set('gameoverModal', false);
    this.replaceRoute(this.globalService.currentUnlock);
  }
 }