import Ember from 'ember';
import Session from 'ember-simple-auth/services/session';

export default {
  name: "current-user",
  before: "ember-simple-auth",
  initialize: function(container) {
//     Session.reopen({

//       setCurrentUser: function() {
//         // let id = this.get('user_id');
//         if (this.get('isAuthenticated')) {
//           return container.lookup('service:store').findRecord('user', {me: ''}).then((user) => {
//             this.set('content.currentUser', user);
//           });
//         }
//       }.observes('isAuthenticated')
//     });
  }
};

// export default {  
//   name: "custom-session",
//   before: "ember-simple-auth",
//   initialize: function(container) {
//     Session.reopen({
//       setCurrentUser: function() {
//         var id = this.get("user_id");
//         var self = this;
//         console.log(id);

//         if (!Ember.isEmpty(id)) {
//           return container.lookup("store:main").find("user", id).then(function(user) {
//             self.set("currentUser", user);
//           });
//         }
//       }.observes("user_id")
//     });
//   }
// };