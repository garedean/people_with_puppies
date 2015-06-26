import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('welcome', {path: '/'});
  this.route('index', {path: '/home'});
  this.resource('users');
  this.resource('users/new', {path: '/new-user'});
  this.resource('user', {path: '/users/:user_id'});
  this.resource('match', {path: '/users/:user_id/match'});
  this.route('conversation');
});

export default Router;
