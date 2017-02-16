import Ember from 'ember';

export default Ember.Route.extend({
  practiceSession: null,
  problems: null,
  beforeModel(transition) {
    let sessionController = this.controllerFor('practice.session');
    sessionController.set('isSummary', true);
    let sessionId = transition.params['practice.session'].session_id;
    let self = this;
    this.get('store').findRecord('practiceSession', sessionId) // gets the practice session
      .then((res) => this.set('practiceSession', res.data));
  },
  model(params) {
    return this.get('practiceSession');
  }
});

/*
A session's summary consists of:
1) The problem ids
2) The user's response to the problems
3) Whether the user got it right or not
*/
