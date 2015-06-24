import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.resource('users/new', {path: 'new-user'});
  this.route('user');
  this.resource('users');
  this.resource('match');
  this.route('conversation');
});

export default Router;
