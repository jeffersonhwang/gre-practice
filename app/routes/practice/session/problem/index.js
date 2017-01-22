import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    this.set('curProblemIndex', 0);
    let self = this;
    return this.get('store')
      .findAll('problem', { ids: transition.params['practice.session'].problemIds })
      .then( (response) => self.set('problems', response.toArray()) );
  },
  model() {
    let curIndex = this.get('curProblemIndex');
    return this.get('problems')[curIndex];
  }
});
