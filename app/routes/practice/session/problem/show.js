import Ember from 'ember';

export default Ember.Route.extend({
  model(params, transition) {
    console.log(params);
    console.log(transition);
    return this.get('store').findRecord('problem', params.problem_id);
  }
});
