import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(
  AuthenticatedRouteMixin, {
  model() {
    //return this.store.find('resource');
  },
  actions: {
    addResource: function(title, description, type, submitter) {
      // var self = this;
      var controller = this.get('controller');
      console.log('adding');
      var newResource = this.store.createRecord('resource', {
        title: title,
        description: description,
        type: type,
        submitter: submitter,
        timestamp: new Date().getTime()
      });
      newResource.save().then(function() {
        console.log('saved');
        controller.set('title', '');
        controller.set('description', '');
        controller.set('type', '');
        controller.set('submitter', '');
      });
    } 
  }
});