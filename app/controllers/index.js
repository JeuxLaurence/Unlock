import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
  @service('global') globalService;

  @action
  setUnlock(unlockChosen) {
    this.globalService.setCurrent(unlockChosen)
    this.replaceRoute(this.globalService.currentUnlock);
  }
}
