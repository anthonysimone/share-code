import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(
  AuthenticatedRouteMixin, {
  model() {
    // @TODO: Calling tag model for convenience, need to figure out a good way to call multiple models
    return this.store.find('tag');
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