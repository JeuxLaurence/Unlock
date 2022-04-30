import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class HagridController extends Controller {
  selectedShoot = null;

  @action
  verify() {
    this.set('isMachineError', false);
    this.set('isMachineSuccess', false);
    if (this.answer.toUpperCase() == 'D') {
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
    this.replaceRoute('harry');
  }
}
