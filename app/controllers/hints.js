import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class HintsController extends Controller {
  @action
  fetchHints() {
    this.set('isErrorNumber', false);
    this.set('showFirst', false);
    this.set('firstClue', null);
    this.set('secondClue', null);
    this.set('thirdClue', null);
    var $this = this;
    this.model.forEach(function (element, i) {
      if (element.id == $this.cardNumber) {
        $this.set('showFirst', true);
        $this.set('firstClue', element.hint[0]);
        return;
      }
    });
    if (!this.showFirst) {
      this.set('isErrorNumber', true);
    }
  }

  @action
  secondHint() {
    var $this = this;
    this.model.forEach(function (element, i) {
      if (element.id == $this.cardNumber) {
        $this.set('showFirst', true);
        $this.set('secondClue', element.hint[1]);
        return;
      }
    });
  }

  @action
  thirdHint() {
    var $this = this;
    this.model.forEach(function (element, i) {
      if (element.id == $this.cardNumber) {
        $this.set('showFirst', true);
        $this.set('thirdClue', element.hint[2]);
        return;
      }
    });
  }

  @action
  back() {
    this.cardNumber = null;
    this.set('isErrorNumber', false);
    this.set('showFirst', false);
    this.set('firstClue', null);
    this.set('secondClue', null);
    this.set('thirdClue', null);
    this.replaceRoute('friends');
  }
}
