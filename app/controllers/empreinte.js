import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EmpreinteController extends Controller {
  @service('global') globalService;

  selectedShoot = null;

  @action
  verify() {
    this.set('isMachineError', false);
    this.set('isMachineSuccess', false);
    if (this.answer.toUpperCase() == 'E') {
      this.set('isMachineSuccess', true);
    } else {
      this.set('isMachineError', true);
    }
  }

  @action
  back() {
    this.set('isMachineError', false);
    this.set('isMachineSuccess', false);
    this.set('answer', null);
    this.replaceRoute(this.globalService.currentUnlock);
  }
}
