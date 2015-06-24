import DS from 'ember-data';

export default DS.Model.extend({
  messages: DS.hasMany('messages', {async: true}),
  users: DS.hasMany('user', {async: true})
});
