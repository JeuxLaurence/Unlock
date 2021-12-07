import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { cancel, later, next } from '@ember/runloop';

export default class FriendsController extends Controller {
  @tracked time = 3600; //[OPTIONS]length of the game (in seconds)
  runner = null;

  @action
  startGame() {
    next(this, function () {
      this.runner = this._tick();
    });
  }

  @action
  addPenality() {
    this.set('time', this.time - 60); //[OPTIONS]number of seconds for penality
  }

  _tick() {
    return later(
      this,
      function () {
        this.time = this.time - 1;
        if (this.time <= 0) {
          this.set('expiredTimer', true);
          this.set('time', 0);
          return;
        }
        this.set('time', this.time);
        this.runner = this._tick();
      },
      1000
    );
  }
}
