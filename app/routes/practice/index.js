import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('practiceType');
  },
  setupController(controller, practiceType) {
    controller.set('model', practiceType);
  }
});
