import Ember from 'ember';

export default Ember.ArrayController.extend({
    needs: ['user', 'users'],

    actions: {
      addConversation: function() {

        var newMessage = this.store.createRecord('message', {
          body: this.get('body')
        });
        var newConversation = this.store.createRecord('conversation');

        newMessage.save().then(function() {
          newConversation.get('messages').pushObject(newMessage);
          newConversation.save();

        });

        this.setProperties({
          messageTo: '',
          body: ''
        });

        var firstUser = this.get('controllers.user.model');
        firstUser.get('conversations').pushObject(newConversation);
        firstUser.save();

  //

        // var secondUserName = this.get('messageTo');
        var secondUserId = this.model.get('recipient_id'); //this doesn't work obviously
debugger;
        var secondUser = this.store.find('user', { id: secondUserId });
        // var secondUser2 = this.store.find('user', "-Jsbvs12QPglBJ_wNjhk");

        secondUser.get('conversations').pushObject(newConversation);
        secondUser.save();

        this.transitionTo('user', firstUser.id);
      }
    }

  // }
});
