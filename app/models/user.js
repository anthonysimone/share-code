import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  auth_id: DS.attr('string'),
  timestamp: DS.attr('number')
});