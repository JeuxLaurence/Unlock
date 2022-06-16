import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SouvenirController extends Controller {
  @service('global') globalService;

  selectedShoot = null;

  @action
  verify() {
    this.set('isMachineError', false);
    this.set('isMachineSuccess', false);
    if (this.answer1.toUpperCase() == '12' && this.answer2.toUpperCase() == '32' && this.answer3.toUpperCase() == '76') {
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
