import Ember from 'ember';

export default Ember.Controller.extend({
  selectedPracticeType: null,
  actions: {
    onSelectPracticeType(type) {
      let pType = this.get('store').findRecord('practiceType', type);
      this.set('selectedPracticeType', pType);
    },
    onSectionChanged(section) {
      this.set('selectedSection', section);
    },
    onTimingChanged(timing) {
      this.set('selectedTiming', timing);
    },
    submitPractice() {
      console.log('submitting!');

      const practiceSession = {
        creationDate: new Date(),
        lastModified: new Date(),
        numberOfProblems: 10,
        section: this.get('selectedSection'),
        timing: this.get('selectedTiming'),
        practiceType: this.get('selectedPracticeType.type'),
      };
      let practiceSessionRecord = this.get('store').createRecord('practiceSession', practiceSession);

      var self = this;
      practiceSessionRecord.save()
        .then( (session) => self.transitionToRoute('practice.session.problem.index', session.id) );
    }
  }
});
