import Ember from 'ember';

let userStats = {
  name: 'Jefferson Hwang',
  testDate: '02/26/2017',
  scoreEstimate: {
    verbal: 163,
    quantative: 163
  },
  scoreGoal: {
    verbal: 163,
    quantative: 168
  },
  problemStats: {
    verbal: {
      totalAnswered: 50,
      totalProblems: 867,
      percentCorrect: 0.80
    },
    quantative: {
      totalAnswered: 50,
      totalProblems: 500,
      percentCorrect: 0.75
    }
  },
  practiceSessionHistory: [{
      date: '01/01/017',
      type: 'Timed',
      percentCorrect: 0.5,
      totalProblems: 10
  }, {
      date: '01/02/017',
      type: 'Untimed',
      percentCorrect: 1,
      totalProblems: 1
  }, {
      date: '01/02/017',
      type: 'Timed',
      percentCorrect: 0.7,
      totalProblems: 10
  }, {
      date: '01/04/017',
      type: 'Timed',
      percentCorrect: 0.9,
      totalProblems: 20
  },
  ]
};

export default Ember.Route.extend({
  model() {
    return userStats;
  }
});
