import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CardController extends Controller {
  @service('global') globalService;
  
  @action
  verify() {
    this.set('isMachineSuccess', true);
    this.set('isMachineError', false);
  }

  @action
  hint() {
    this.set('isMachineError', true);
    this.set('isMachineSuccess', false);
  }

  @action
  back() {
    this.set('isMachineError', false);
    this.set('isMachineSuccess', false);
    this.replaceRoute(this.globalService.currentUnlock);
  }
}
