import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  // submitter: DS.attr('string'),
  resources: DS.belongsTo('resource'),
  timestamp: DS.attr('number')
});