import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NesController extends Controller {
  @service('global') globalService;

  init() {
    super.init(...arguments)
    var $this = this
    Ember.run.scheduleOnce('afterRender', this, function () {
      $this.initView()
    });
  }

  @action
  initView() {
    for(var i = 1; i <= 5; i++) {
      for(var j = 1; j <= 5; j++) {
        var initialState = 1 + Math.floor(Math.random() * 2)
        var className = 'case' + i + j
        var element = document.getElementsByClassName(className)
        if( element.length > 0 && initialState == 1) {
          element[0].classList.remove('d-none')
        }
        if( element.length > 1 && initialState == 2) {
          element[0].classList.remove('d-none')
          element[1].classList.remove('d-none')
        }
      }
    }
  }

  @action
  cardClicked(event) {
    if( event.target.classList.contains('cases') ) {
      event.target.classList.add('d-none')
    } else {
      var column = "0";
      if( event.layerX < event.target.width / 5) {
        column = "1";
      } else if( event.layerX < event.target.width / 5 * 2) {
        column = "2";
      } else if( event.layerX < event.target.width / 5 * 3) {
        column = "3";
      } else if( event.layerX < event.target.width / 5 * 4) {
        column = "4";
      } else if( event.layerX < event.target.width / 5 * 5) {
        column = "5";
      }

      var row = "0";
      if( event.layerY < event.target.height / 5) {
        row = "1";
      } else if( event.layerY < event.target.height / 4 * 2) {
        row = "2";
      } else if( event.layerY < event.target.height / 4 * 3) {
        row = "3";
      } else if( event.layerY < event.target.height / 4 * 4) {
        row = "4";
      }
      var cases = document.getElementsByClassName('case' + row + column)
      cases[0].classList.remove('d-none')
      cases[1].classList.remove('d-none')
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