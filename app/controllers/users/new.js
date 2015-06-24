import Ember from "ember";

var NewUserController = {
  actions: {
    save: function() {
      var newUser = this.store.createRecord('user', {
        name: this.get('user_name')
      });
      newUser.save();
      //
      // this.set('author', '');
      // this.set('text', '');
      // this.set('description', '');

      this.transitionToRoute('/');
    }
  }
};

export default Ember.Controller.extend(NewUserController);
