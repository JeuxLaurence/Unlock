import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class MachinesController extends Controller {
  @action
  fetchMachine() {
    var $this = this;
    this.model.forEach(function (element, i) {
      if (element.id == $this.cardNumber) {
        $this.transitionToRoute(element.type);
        return;
      }
    });
    if (!this.showFirst) {
      this.set('isErrorNumber', true);
    }
  }

  @action
  back() {
    this.cardNumber = null;
    this.set('isErrorNumber', false);
    this.replaceRoute('friends');
  }
}
