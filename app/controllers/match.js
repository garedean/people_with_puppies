import Ember from "ember";

var MatchController = {
  needs: ['user', 'users'],

  actions: {
    likePerson: function() {
      // JavaScript object. Use example: likedUser.name
      var likedUser     = this.get('model');

      // Promise object. Use example: loggedInUser.get('name')
      var loggedInUser  = this.get('controllers.user.model');

      loggedInUser.get('matches').pushObject(likedUser);
      loggedInUser.save();

      this.transitionToRoute('/' + 'users/' + loggedInUser.get('id'));
    }
  }
};

export default Ember.Controller.extend(MatchController);
