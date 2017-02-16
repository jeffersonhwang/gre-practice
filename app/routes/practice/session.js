import Ember from 'ember';

export default Ember.Route.extend({
  problems: [],
  curProblemIndex: 0,
  practiceSessionId: null,
  answer: null,
  isSummary: false,
  beforeModel(transition) {
    // saves the session id
    let practiceSessionId = parseInt(transition.params["practice.session"].session_id);
    this.set('practiceSessionId', practiceSessionId);

    if (practiceSessionId) {
      let store = this.get('store');
      var self = this;
      return store.findRecord('practiceSession', parseInt(practiceSessionId))
        .then((response) => {
          let sessionData = response.data;
          return store.findAll('problem', { criteria: sessionData.practiceType.options })
            .then( (response) => self.set('problems', response.toArray()))
            .catch( (reason) => console.log('Error: ' + reason) );
        })
        .catch(() => self.transitionTo('practice')); // TODO: Eventually transition to a 404 page
    }
  },
  model() {
    return this.get('problems')[this.get('curProblemIndex')];
  },
  resetController(controller, isExiting, transition) {
    if (isExiting) {
      this.set('problems', []);
      this.set('curProblemIndex', 0);
      this.set('practiceSessionId', null);
      this.set('answer', null);
      this.set('isSummary', false);
    }
  },
  actions: {
    setAnswer(answer) {
      this.set('answer', answer);
    },
    submitAnswer() {
      let answer = this.get('answer');
      let currentProblem = this.get('problems')[this.get('curProblemIndex')];
      let isCorrect = answer == currentProblem.answer;

      var self = this;
      this.get('store').findRecord('practiceSession', parseInt(this.get('practiceSessionId')))
          .then((response) => {
            let problemStats = response.get('problemStats');
            problemStats.forEach(function(pStat) {
              if (pStat.problemId == currentProblem.id) {
                console.log(answer);
                Ember.set(pStat, 'yourAnswer', answer);
                Ember.set(pStat, 'isCorrect', isCorrect);
              }
            });
            response.save().then(() => {
              let nextProblemIndex = self.get('curProblemIndex') + 1;
              if (nextProblemIndex < self.get('problems').length) {
                self.set('curProblemIndex', nextProblemIndex);
                self.set('controller.model', self.get('problems')[self.get('curProblemIndex')]);
                // reset answer
                self.set('controller.answer', null);
              }
            }).catch((err) => {
              console.log(err);
            });
      });
    },
    endPractice() {
      var self = this;
      this.get('store').findRecord('practiceSession', parseInt(this.get('practiceSessionId')))
        .then((res) => {
          let practiceSession = res.data;
          practiceSession.isComplete = true;
          res.save().then(() => self.transitionTo('practice.session.summary', self.get('practiceSessionId')));
      });
    }
  }
});
