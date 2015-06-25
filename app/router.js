import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.resource('users', function() {
    this.resource('user', {path:'/:user_id'}, function() {
      this.resource('conversations', function() {
        this.route('recipient', {path: '/:recipient_id'}, function() {
          this.route('new');
        });
      });
    });
  });
});

export default Router;
