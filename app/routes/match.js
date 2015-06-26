import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var controller = this;

    return this.store.find('user').then(function(users) {
      var randomUserId;
      var allUsers = [];
      var loggedInUserID = params.user_id;
      var excludedIDs = [loggedInUserID];
      var currentUser;

      // Array of user ids as Strings
      var potentialMatches = [];
      var currentMatches = [];
      users.forEach(function(user){
        allUsers.push(user);
      });
      allUsers.map(function(user) {
        if (user.id === loggedInUserID) {
          currentUser = user
        };
      })
      currentUser.get('likes').forEach(function(match){
        currentMatches.push(match)
      });

      currentMatches.forEach(function(match) {
        allUsers.forEach(function(user) {
          if (match.id === user.id) {
            allUsers.splice(allUsers.indexOf(user), 1)
          }
        })
      })

      console.log(allUsers)
      allUsers.forEach(function(user) {
        potentialMatches.push(user.get('id'));
      });

      // Filter out currently logged in user's id
      var potentialMatches = potentialMatches.filter(function(id) {
        return excludedIDs.indexOf(id) === -1;
      });
      randomUserId = potentialMatches[Math.floor((Math.random() * (potentialMatches.length)))];
      return controller.store.find('user', randomUserId);
    });
  }
});



// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   model: function(params) {
//     var controller = this;
//     return this.store.find('user').then(function(users) {
//
//       // Array of String user ids
//       var usersArray = [];
//       var randomUserId;
//
//       users.map(function(user) {
//         usersArray.push(user.get('id'))
//       });
//
//       randomUserId = usersArray[Math.floor((Math.random() * (usersArray.length)))];
//       //return controller.store.find('user', randomUserId);
//       return controller.store.find('user', randomUserId);
//     });
//   }
// });
