import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SortilegeController extends Controller {
  @service('global') globalService;
  
  isCodeError = false;
  isCodeSuccess = false;

  @action
  verifyCode() {
    this.set('isCodeError', false);
    this.set('isCodeSuccess', false);

    var numberResult = [];
    Array.from(document.getElementsByClassName('number_input')).forEach(
      function (element) {
        numberResult.push(element.value);
      }
    );

    var $this = this;
    var answerIndex;
    var result = this.model.some(function (model_element, model_index) {
      if( model_element.mode != $this.globalService.currentUnlock) {
        return false;
      }
      var allMatch = model_element.answer.every(function (element, index) {
        return element == numberResult[index];
      });
      if (allMatch) {
        answerIndex = model_index;
        return true;
      } else {
        return false;
      }
    });

    if (result) {
      this.set('isCodeSuccess', true);
      this.set('answers', this.model[answerIndex].unlock);
    } else {
      this.set('isCodeError', true);
    }
  }

  @action
  back() {
    this.set('isCodeError', false);
    this.set('isCodeSuccess', false);
    this.replaceRoute(this.globalService.currentUnlock);
  }
}
