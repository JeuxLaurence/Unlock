import Service from '@ember/service';

export default class Global extends Service {
  currentUnlock = "";

  setCurrent(unlock) {
  	this.currentUnlock = unlock;
  }
};