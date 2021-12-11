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
    this.set('showMore', false)
    var $this = this;
    this.model.forEach(function (element, i) {
      if (element.id == $this.cardNumber.toUpperCase()) {
        $this.set('showFirst', true);
        $this.set('firstClue', element.hint[0]);
        $this.set('showMore', element.hint.length >= 2)
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
      if (element.id == $this.cardNumber.toUpperCase()) {
        $this.set('showFirst', true);
        $this.set('secondClue', element.hint[1]);
        $this.set('showMore', element.hint.length >= 3)
        return;
      }
    });
  }

  @action
  thirdHint() {
    var $this = this;
    $this.set('showMore', false)
    this.model.forEach(function (element, i) {
      if (element.id == $this.cardNumber.toUpperCase()) {
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
