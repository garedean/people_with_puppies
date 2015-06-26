import Ember from "ember";

var NewUserController = {
  actions: {
    save: function() {
      var newUser = this.store.createRecord('user', {
        name: this.get('user_name'),
        bio: this.get('user_bio'),
        picture: this.get('user_pic'),
        location: this.get('user_location'),
        interestedIn: this.get('user_interests')
      });
      newUser.save();

      this.set('user_name', '');
      this.set('user_bio', '');
      this.set('user_pic', '');
      this.set('user_location', '');

      this.set('user_interests', '');

      this.transitionToRoute('/');
    }
  }
};

export default Ember.Controller.extend(NewUserController);
