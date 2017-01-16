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
      let practiceSession = this.get('store').createRecord('practiceSession', {
        creationDate: new Date(),
        lastModified: new Date(),
        sessionStats: {
          numberOfQuestions: 10,
          section: this.get('selectedPracticeType.type')
        }
      });

      var self = this;
      practiceSession.save()
        .then(function(session) {
          console.log('made it!');
          console.log(session.id);
          self.transitionToRoute('practice.session', session.id);
        });
    }
  }
});
