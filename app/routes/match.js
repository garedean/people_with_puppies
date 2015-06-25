import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var controller = this;
    return this.store.find('user').then(function(users) {

      // Array of String user ids
      var usersArray = [];
      var returnedUser;
      users.map(function(user) {
        usersArray.push(user.get('id'))
      });
      returnedUser = usersArray[Math.floor((Math.random() * (usersArray.length)))];
      return controller.store.find('user', returnedUser);
    });
  }

  // setupController: function(controller, model) {
  //   controller.set('params', this.get('params'));
  //   this._super(controller, model);
  // }
});
