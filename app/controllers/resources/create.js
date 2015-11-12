import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addResource: function() {
      console.log('adding');
      var newResource = this.store.createRecord('resource', {
        title: this.get('title'),
        description: this.get('description'),
        type: this.get('type'),
        submitter: this.get('submitter'),
        timestamp: new Date().getTime()
      });
      newResource.save().then(console.log('saved'));
    } 
  }
});