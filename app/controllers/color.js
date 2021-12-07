import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ColorController extends Controller {
  colorsList = [
    'grey',
    'blue',
    'turquoise',
    'orange',
    'lime',
    'pink',
    'purple',
    'yellow',
    'red',
    'darkturquoise',
    'lightblue',
  ];
  isCodeError = false;
  isCodeSuccess = false;

  @action
  nextColor(event) {
    var currentColor = event.target.className.match(/box color-(\w+)/)[1];
    event.target.classList.remove('color-' + currentColor);
    var newIndex = this.colorsList.indexOf(currentColor) + 1;
    if (newIndex >= this.colorsList.length) {
      newIndex = 0;
    }
    var newColor = this.colorsList[newIndex];
    event.target.classList.add('color-' + newColor);
  }

  @action
  verifyCode() {
    this.set('isCodeError', false);
    this.set('isCodeSuccess', false);
    var colorResult = [];
    Array.from(document.getElementsByClassName('box')).forEach(function (
      element
    ) {
      colorResult.push(element.className.match(/box color-(\w+)/)[1]);
    });
    var $this = this;
    this.model.answer.forEach(function (element, index) {
      if (element != colorResult[index]) {
        $this.set('isCodeError', true);
        return;
      }
    });
    if (!this.isCodeError) {
      this.set('isCodeSuccess', true);
    }
  }

  @action
  back() {
    this.set('isCodeSuccess', false);
    this.set('isCodeError', false);
    this.replaceRoute('friends');
  }
}
