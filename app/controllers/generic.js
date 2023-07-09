import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';

export default class GenericController extends Controller {
  @service('global') globalService;

  hints = A()

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
  nextHint() {
    var nextHint = this.model.hints.pop()
    if( nextHint != null ) {
      this.get('hints').pushObject(nextHint)
    }
  }

  @action
  selectColor(event) {
    var bordered = document.getElementsByClassName("border")
    for(let item of bordered) {
      item.classList.remove("border")
      item.classList.remove("border-dark")
    }
    
    event.target.classList.add('border')
    event.target.classList.add('border-dark')
  }

  @action
  verifyColor() {
    this.set('isMachineError', false);
    this.set('isMachineSuccess', false);
    var selected = document.getElementsByClassName("border")
    if( selected != null && selected.length == 1 && selected[0].classList.contains(this.model.answer) ) {
      this.set('isMachineSuccess', true);
    } else {
      this.set('isMachineError', true);
    }
  }

  @action
  verifySelect() {
    this.set('isMachineError', false);
    this.set('isMachineSuccess', false);
    var selectedMonde = document.getElementById('monde-select')
    var selectedTableau = document.getElementById('tableau-select')
    if( selectedMonde.value == this.model.answer[0] && selectedTableau.value == this.model.answer[1]) {
      this.set('isMachineSuccess', true);
    } else {
      this.set('isMachineError', true);
    }
  }

  @action
  verifyColumn() {
    this.set('isMachineError', false);
    this.set('isMachineSuccess', false);
    var selectedSelect = Array.from(document.getElementsByClassName("column-select"))
    var $this = this;
    var isEvery = selectedSelect.every(function(value) { return $this.model.answer.includes(value.value) })
    if( isEvery ) {
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
    this.set('hints', A());
    this.replaceRoute(this.globalService.currentUnlock);
  }
}
