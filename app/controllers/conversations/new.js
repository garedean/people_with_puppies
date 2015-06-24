import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['user'],

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
        // name: '',
        body: ''
      });

      // var firstUser = this.store.find('user')

      var firstUser = this.get('controllers.user.model');
      // debugger;
      firstUser.get('conversations').pushObject(newConversation);
      // this.get('model').reload();
      firstUser.save();
      this.transitionTo('user', firstUser.id);
    }
  }
});
