import Ember from 'ember';

export default Ember.Component.extend({
  answer: null,
  didReceiveAttrs() {
    //this.super(...arguments);
    this.set('answer', null);
  },
  actions: {
    changed(value) {
      console.log(value);
      this.sendAction('changed', value);
    }
}
});
