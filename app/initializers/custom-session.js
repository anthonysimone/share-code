import Ember from 'ember';
import Session from 'ember-simple-auth/services/session';

export default {  
  name: "current-user",
  before: "ember-simple-auth",
  initialize: function(container) {
    Session.reopen({
      foo: "bar",
      setCurrentUser: function() {
        var id = this.get("data.authenticated.uid");
        var self = this;
        if (!Ember.isEmpty(id)) {
          console.log(id);
          return container.lookup("store:main").query("user", {orderBy: "auth_id", equalTo: id, limiToFirst: 1}).then(function(user) {
            console.log(user.content.length);
            self.set("currentUser", user.get('firstObject'));
          });
        }
      }.observes("data.authenticated.uid")
    });
  }
};