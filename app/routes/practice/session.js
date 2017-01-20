import Ember from 'ember';

export default Ember.Route.extend({
  problems: [],

  beforeModel(transition) {
    let practiceSessionId = transition.params["practice.session"].sessionId;
    if (practiceSessionId) {
      let store = this.get('store');
      var self = this;
      return store.findRecord('practiceSession', practiceSessionId)
        .then(function(session) {
          let sessionData = session.data;
          return store.findAll('problem', { excludeIds: sessionData.sessionStats.questions, criteria: sessionData.practiceType.options })
            .then( (response) => self.set('problems', response.toArray()) )
            .catch( (reason) => console.log('Error: ' + reason) );
        });
    }
  },
  model(params, transition) {
    console.log('model');
    console.log(this.get('problems'));
    return this.get('problems');
  }
});
