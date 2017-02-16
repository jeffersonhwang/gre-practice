import Ember from 'ember';

export default Ember.Controller.extend({
  selectedPracticeType: null,
  actions: {
    onSelectPracticeType(type) {
      let pType = this.get('store').findRecord('practiceType', type);
      this.set('selectedPracticeType', pType);
    },
    onSectionChanged(section) {
      console.log(section);
      this.set('selectedSection', section);
    },
    onTimingChanged(timing) {
      this.set('selectedTiming', timing);
    },
    submitPractice() {
      console.log('submitting!');

      const practiceSession = {
        numberOfProblems: 6,
        section: this.get('selectedSection'),
        timing: this.get('selectedTiming'),
        practiceType: this.get('selectedPracticeType.type')
      };

      let self = this;
      let practiceSessionRecord = this.get('store').createRecord('practiceSession', practiceSession);
      practiceSessionRecord.save()
        .then( (session) => self.transitionToRoute('practice.session', session.id) );
    }
  }
});
