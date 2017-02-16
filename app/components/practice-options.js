import Ember from 'ember';

export default Ember.Component.extend({
  timing: null,
  section: null,
  didReceiveAttrs() {
    this.set('timing', null);
    this.set('section', null);
  },
  changed(value) {
    console.log(value);
  },
  actions: {
    changed(value) {
      console.log(value);
    },
    sectionChanged(value) {
      console.log(value);
    },
    timingChanged(value) {
      console.log(value);
    }
  }
});
