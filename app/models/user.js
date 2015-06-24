import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  interestedIn: DS.attr('string'),
  bio: DS.attr('string'),
  picture: DS.attr('string'),
  location: DS.attr('attr'),
  matches: DS.hasMany('user', {async: true}),
  conversation: DS.hasMany('conversation', {async: true})
});
