import Ember from 'ember';

let selectedPracticeType = {};

export default Ember.Controller.extend({
  selectedPracticeType: null,
  actions: {
    onSelectPracticeType(type) {
      let pType = this.get('store').findRecord('practiceType', type);
      this.set('selectedPracticeType', pType);
    },
    submitPractice() {
      console.log('submitting!');
      const selectedPractice = this.get('selectedPracticeType');
      const practiceSession = {
        creationDate: new Date(),
        lastModified: new Date(),
        sessionStats: {
          numberOfQuestions: 10,
          sections: this.get('selectedPracticeType.options.sections')
        },
        practiceType: selectedPractice
      };
      console.log(practiceSession);
      let practiceSessionRecord = this.get('store').createRecord('practiceSession', practiceSession);

      var self = this;
      var store = this.get('store');
      practiceSessionRecord.save()
        .then(function(session) {
          console.log('made it!');
          console.log(session);
          // TODO: Figure out how to push it into the cache
          // store.push({ data: practiceSession });
          console.log('session' + session.id);
          self.transitionToRoute('practice.session', session.id);
        });
    }
  }
});
