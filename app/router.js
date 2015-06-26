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
  this.resource('match', {path: '/users/:user_id/match'});
  this.resource('user', {path: '/users/:user_id'}, function() {
    this.resource('conversation', {path: '/conversation/:recipient_id'});
  });

  // this.resource('users', function() {
  //   this.resource('user', {path:'/:user_id'}, function() {
  //     this.resource('conversations', function() {
  //       this.route('recipient', {path: '/:recipient_id'}, function() {
  //         this.route('new');
  //       });
  //     });
  //   });
  // });
});

export default Router;
