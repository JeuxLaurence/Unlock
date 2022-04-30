import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class MemoireController extends Controller {

  memoryCardList = [
    'AM1-782fc21c5489f33c572994822be647f1.jpg',
    'AM2-5a2cd1e5595cb6aea5755269bfdd3200.jpg',
    'AM3-d11c647c4a9f5c58dc195b21e52f0f64.jpg',
    'AM4-1123403a3afa79d1fd75897d43f45664.jpg',
    'AM5-33ab583db896bf0a5f528dd289eb82be.jpg',
    'AM1-782fc21c5489f33c572994822be647f1.jpg',
    'AM2-5a2cd1e5595cb6aea5755269bfdd3200.jpg',
    'AM3-d11c647c4a9f5c58dc195b21e52f0f64.jpg',
    'AM4-1123403a3afa79d1fd75897d43f45664.jpg',
    'AM5-33ab583db896bf0a5f528dd289eb82be.jpg'
  ];

  init() {
    super.init(...arguments)
    for (let i = this.memoryCardList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.memoryCardList[i], this.memoryCardList[j]] = [this.memoryCardList[j], this.memoryCardList[i]];
    }
  }

  @action
  revealCard(event) {
    this.set('isCodeError', false);
    this.set('isCodeSuccess', false);
    if( event.target.classList.contains('hidden-memory') == false) {
      event.target.classList.add('hidden-memory');
      return;
    } 
    if( document.querySelectorAll('.memory_box:not(.hidden-memory):not(.empty-memory)').length == 0) {
      event.target.classList.remove('hidden-memory');
    } else if(document.querySelectorAll('.memory_box:not(.hidden-memory):not(.empty-memory)').length == 1) {
       event.target.classList.remove('hidden-memory');
       this.verifyPair();
    } else {
      event.target.classList.add('hidden-memory');
    }
  }

  @action
  verifyPair() {
    var items = document.querySelectorAll('.memory_box:not(.hidden-memory):not(.empty-memory)');
    if( items.length != 2) {
      return;
    }
    if (items[0].src == items[1].src) {
      items[0].classList.add('empty-memory')
      items[1].classList.add('empty-memory')
    }
    if( document.getElementsByClassName('empty-memory').length == 10) {
      this.set('isCodeSuccess', true);
    }
  }

  @action
  back() {
    this.set('isCodeSuccess', false);
    this.set('isCodeError', false);
    this.replaceRoute('harry');
  }
}
