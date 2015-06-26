import Ember from "ember";

var MatchController = {
  needs: ['user', 'users'],

  actions: {
    likePerson: function() {
      // JavaScript object. Use example: likedUser.name
      var like = this.store.createRecord('like', {
        user: this.get('controllers.user.model'),
        like: this.get('model')
      });

      var likedUser = this.get('model');
      // Promise object. Use example: loggedInUser.get('name')
      var loggedInUser  = this.get('controllers.user.model');
      loggedInUser.get('likes').pushObject(like);

      likedUser.get('likes').forEach(function(match){
        if (match.get('like.id') === loggedInUser.get('id')) {
          loggedInUser.get('matches').pushObject(likedUser);
          likedUser.get('matches').pushObject(loggedInUser)
        }
      });
      loggedInUser.save();
      likedUser.save();

      this.transitionToRoute('/' + 'users/' + loggedInUser.get('id'));
    }
  }
};

export default Ember.Controller.extend(MatchController);
