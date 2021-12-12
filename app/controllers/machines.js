import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class MachinesController extends Controller {
  isErrorNumber = false;

  @action
  fetchMachine() {
    this.isSuccess = false;
    var $this = this;
    this.model.forEach(function (element, i) {
      if (element.id == $this.cardNumber) {
        $this.isSuccess = true;
        $this.transitionToRoute(element.type);
        return;
      }
    });
    if (!this.isSuccess) {
      this.set('isErrorNumber', true);
    } else {
      this.set('cardNumber', null);
      this.set('isErrorNumber', false);
    }
  }

  @action
  back() {
    this.set('cardNumber', null);
    this.set('isErrorNumber', false);
    this.replaceRoute('friends');
  }
}
