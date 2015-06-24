import Ember from "ember";

var NewUserController = {
  actions: {
    likePerson: function() {
      var newLike = this.store.find('user', this.get('person_id'));
      var user = this.store.find('user', this.get('user_id'));
      user.matches.push(newLike);
      user.save();

      this.transitionToRoute('/');
    }
  }
};

export default Ember.Controller.extend(NewUserController);
