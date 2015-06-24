import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  interestedIn: DS.attr('string'),
  bio: DS.attr('string'),
  picture: DS.attr('string'),
  location: DS.attr('string'),
  matches: DS.hasMany('user', {async: true}),
  conversations: DS.hasMany('conversation', {async: true})
});
