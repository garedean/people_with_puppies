import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['users'],

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

      debugger;
      firstUser.get('conversation').pushObject(newConversation);
      this.get('model').reload();
      this.transitionTo('conversation');
    }
  }
});
