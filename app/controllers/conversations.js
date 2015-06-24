import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['users'],
  actions: {
    debug: function() {
      debugger;
    }
  }
});
