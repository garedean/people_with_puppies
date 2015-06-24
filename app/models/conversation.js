import DS from 'ember-data';

export default DS.Model.extend({
  messages: DS.attr(),
  users: DS.hasMany('user', {async: true})
});
