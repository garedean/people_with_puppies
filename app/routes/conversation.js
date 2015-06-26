import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // debugger;
    // var myConversation = "";
    var myConversation = this.store.find('conversation', { users: params.user_id});
// this.store.find('conversation', { users: params.user_id}).then(function(convIn){myConversation = convIn;})
    // myConversation.then(function(){return myConversation;});
    return myConversation;
  }
});
