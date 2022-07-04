import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class GenericController extends Controller {
  @service('global') globalService;

  @action
  verify() {
    this.set('isMachineError', false);
    this.set('isMachineSuccess', false);
    if( this.model.answerType == 'single') {
      if (this.answer.toUpperCase() == this.model.answer.toUpperCase()) {
        this.set('isMachineSuccess', true);
      } else {
        this.set('isMachineError', true);
      }
    } else if( this.model.answerType == 'two') {
      if( this.model.answer[0].toUpperCase() == this.answer.toUpperCase() && this.model.answer[1].toUpperCase() == this.answer2.toUpperCase()) {
        this.set('isMachineSuccess', true);
      } else {
        this.set('isMachineError', true);
      }
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
