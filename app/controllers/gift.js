import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class GiftController extends Controller {

  @action
  verifyMachine() {
    var result = document.getElementById('result-box').getElementsByTagName('img')
    var isValid = this.model.answer.every(function (element, index) {
      return result[index].src.includes(element)
    })
    document.getElementById('empty-gift-row').hidden = true
    if( isValid ) {
      this.set('isCodeSuccess', true);
    } else {
      this.set('isCodeError', true);
    }  
  }

  @action
  moveImageUp(event) {
    this.set('isCodeError', false);
    this.set('isCodeSuccess', false);
    document.getElementById('empty-gift-row').hidden = false
  	var firstEmpty = document.getElementsByClassName('empty-gift')[0]
  	firstEmpty.classList.remove('empty-gift')
    event.target.parentNode.classList.add('empty-choice')
    firstEmpty.append(event.target)
  	if( document.getElementsByClassName('empty-gift').length == 0) {
  		this.verifyMachine()
  	}
  }

  @action
  moveImageDown(event) {
    this.set('isCodeError', false);
    this.set('isCodeSuccess', false);
    document.getElementById('empty-gift-row').hidden = false
    var firstEmpty = document.getElementsByClassName('empty-choice')[0]
    firstEmpty.classList.remove('empty-choice')
    event.target.parentNode.classList.add('empty-gift')
    firstEmpty.append(event.target)
  }

  @action
  back() {
  	this.set('isCodeSuccess', false);
    this.set('isCodeError', false);
    this.replaceRoute('friends');
  	}
}
