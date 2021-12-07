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
  this.route('color', { path: '/color/:cardnumber' });
  this.route('number', { path: '/number/:cardnumber' });
});
