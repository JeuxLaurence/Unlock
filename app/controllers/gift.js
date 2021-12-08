import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class GiftController extends Controller {

  @action
  verifyMachine() {
  	document.getElementById('empty-gift-row').hidden = true
  	this.set('isCodeSuccess', true);
  }

  @action
  moveImageUp(image, event) {
  	var firstEmpty = document.getElementsByClassName('empty-gift')[0]
  	firstEmpty.classList.remove('empty-gift')
  	firstEmpty.innerHTML = "<img src='assets/images/" + image + ".png' class='gift_box' id='" + image + "'/>"
  	event.target.parentNode.classList.add('empty-choice')
  	event.target.parentNode.innerHTML = null
  	if( document.getElementsByClassName('empty-gift').length == 0) {
  		this.verifyMachine()
  	}
  }

  @action
  moveImageDown(event) {
  	console.log(event.target)
  	var elementToMove = event.target
  	elementToMove.parentNode.classList.add('empty-gift')
  	elementToMove.parentNode.innerHTML = null
  	var firstEmpty = document.getElementsByClassName('empty-choice')[0]
  	firstEmpty.classList.remove('empty-choice')
  	firstEmpty.innerHTML = "<img src='assets/images/" + elementToMove.id + ".png' class='gift_box' />"
  	//TODO rebind onclick once it's back down line
  /*	var firstEmpty = document.getElementsByClassName('empty-choice')[0]
  	firstEmpty.classList.remove('empty-gift')
  	firstEmpty.innerHTML = "<img src='assets/images/" + image + ".png' class='gift_box' />"
  	event.target.parentNode.innerHTML = null
  	if( document.getElementsByClassName('empty-gift').length == 0) {
  		this.verifyMachine()
  	}*/
  }

  @action
  back() {
  	this.set('isCodeSuccess', false);
    this.set('isCodeError', false);
    this.replaceRoute('friends');
  	}
}
