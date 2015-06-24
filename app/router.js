import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

// Router.map(function() {
//   this.route('index', {path: '/'});
//   this.resource('users/new', {path: 'new-user'});
//   this.route('user');
//   this.resource('users');
//   this.resource('user', {path: 'users/:user_id'}, function() {
//     this.route('match');
//   });
//   //this.resource('match', {path: 'users/:user_id/match'});
//   this.resource('match');
//   this.route('conversation');
// });

Router.map(function() {
  this.route('index', {path: '/'});
  this.resource('users');
  this.resource('users/new', {path: '/new-user'});

  this.resource('user', {path: '/users/:user_id'}, function() {
    //this.route('match');
  });

  this.resource('match', {path: '/users/:user_id/match'});
  this.route('conversation');
});

export default Router;
