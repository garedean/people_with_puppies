import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('users/new');
  this.route('user');
  this.resource('conversation', function() {
    this.route('new');
  });
});

export default Router;
