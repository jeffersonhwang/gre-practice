import Ember from 'ember';

export default Ember.Route.extend({
  problems: [],

  beforeModel(transition) {
    let practiceSessionId = transition.params["practice.session"].session_id;
    if (practiceSessionId) {
      let store = this.get('store');
      var self = this;
      return store.findRecord('practiceSession', practiceSessionId)
        .then((session) => {
          let sessionData = session.data;
          return store.findAll('problem', { excludeIds: sessionData.problemIds, criteria: sessionData.practiceType.options })
            .then( (response) => self.set('problems', response.toArray()) )
            .catch( (reason) => console.log('Error: ' + reason) );
        })
        .catch(() => self.transitionTo('practice')); // TODO: Eventually transition to a 404 page
    }
  },
  model() {
    console.log('model');
    console.log(this.get('problems'));
    return this.get('problems');
  }
});
