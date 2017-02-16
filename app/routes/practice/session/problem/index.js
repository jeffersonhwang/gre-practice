import Ember from 'ember';

export default Ember.Route.extend({
  curProblemIndex: 0,
  isTextCompletion: false,
  beforeModel(transition) {
    this.set('sessionId', transition.params['practice'].sessionid);
    this.set('curProblemIndex', 0);
    let self = this;
    return this.get('store')
      .findAll('problem', { ids: transition.params['practice.session'].problemIds })
      .then( (response) => self.set('problems', response.toArray()) );
  },
  model() {
    let curIndex = this.get('curProblemIndex');
    return this.get('problems')[curIndex];
  },
  actions: {
    submitAnswer(answer) {
      this.set('curProblemIndex', this.get('curProblemIndex') + 1);
    },
    endPractice() {
      this.transitionTo('practice.session', this.get('sessionId'));
    }
  }
});
