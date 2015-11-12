import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('resources', function() {
    this.route('create');
  });
  this.resource('resource', { path: '/resource/:resource_id' }, function() {
    this.route('edit');
  });
  this.route('login');
  this.route('protected');

});

export default Router;
