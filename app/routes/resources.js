import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.find('resource');
  },

  // actions: {
  //   addResource: function() {
  //     const controller = this.controllerFor('resources');

  //     console.log('adding');
  //     console.log(controller);
  //     var newResource = this.store.createRecord('resource', {
  //       title: this.get('title'),
  //       description: this.get('description'),
  //       timestamp: new Date().getTime()
  //     });
  //     newResource.save().then(console.log('saved'));
  //   } 
  // }
});