import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let problemId = params.practice.session.problem.problem_id;
    let sessionId = params.practice.session.sessionId;
    // return this.get('store').findRecord('practiceSession', sessionId)
    //   .then((session) => {
    //     store.findRecord('problem', problemId)
    //       .then((problem) => );
    // });
  }
});

/* When reviewing a problem, we want to get 3 things:
   1) The problem
   2) The user's answer/problem stats
   3) The problem explanation (and correct answer)
*/
