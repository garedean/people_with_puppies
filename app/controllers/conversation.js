import Ember from 'ember';

export default Ember.ArrayController.extend({
    needs: ['user', 'users'],

    actions: {
      addConversation: function() {

        var newMessage = this.store.createRecord('message', {
          body: this.get('body')
        });
        newMessage.save();

        var newConversation = this.store.createRecord('conversation');
        newConversation.get('messages').pushObject(newMessage);
        // newConversation.messages.pushObject(newMessage);
        newConversation.save();

        //
        // var conversationData = {
        //   // name: this.get('name'),
        //   body: this.get('body')
        // };



        // newConversationModel.messages.pushObject(conversationData);
        // newConversationModel.save();



        this.setProperties({
          messageTo: '',
          body: ''
        });


        var firstUser = this.get('controllers.user.model');
        firstUser.get('conversations').pushObject(newConversation);
        // this.get('model').reload();
        firstUser.save();

  //

        // var secondUserName = this.get('messageTo');
var secondUserId = this.model.get('recipient_id'); //this doesn't work obviously
debugger;
        var secondUser = this.store.find('user', { id: secondUserId });
        // var secondUser2 = this.store.find('user', "-Jsbvs12QPglBJ_wNjhk");

  // debugger;
        secondUser.get('conversations').pushObject(newConversation);
        // this.get('model').reload();
        secondUser.save();

        this.transitionTo('user', firstUser.id);
      }
    }

  // }
});
