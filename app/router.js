import EmberRouter from '@ember/routing/router';
import config from 'unlock/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('friends');
  this.route('hints');
  this.route('codes');
  this.route('color');
  this.route('machines');
  this.route('question');
  this.route('gift');
  this.route('aeroport');
  this.route('football');
  this.route('card');
  this.route('avion');
});
