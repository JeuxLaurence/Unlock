import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MachinesController extends Controller {
  isErrorNumber = false;
  @service('global') globalService;

  @action
  fetchMachine() {
    this.isSuccess = false;
    var $this = this;
    this.model.forEach(function (element, i) {
      if (element.id == $this.cardNumber && element.mode == $this.globalService.currentUnlock) {
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
    this.replaceRoute(this.globalService.currentUnlock);
  }
}
