import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var allUsers = this.store.find('user');
    return allUsers[0];
    //return this.store.find('user', '-JsanHZB9D4igYRSLgM7');
  }
});
