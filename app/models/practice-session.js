import DS from 'ember-data';

// date: new Date(2016, 12, 12, 16, 45, 0, 0),
// sessionStats: {
//   numberOfQuestions: 4,
//   section: 'Verbal',
//   questions: ['id1', 'id2']
// }

export default DS.Model.extend({
  // profile: DS.belongsTo('profile'),
  creationDate: DS.attr('date'),
  lastModified: DS.attr('date'),
  problemIds: DS.attr(),
  section: DS.attr('string'),
  timing: DS.attr('string'),
  numberOfProblems: DS.attr('number'),
  practiceType: DS.attr(),
  problemStats: DS.attr(),//DS.hasMany('problem-stat')
  isComplete: DS.attr('boolean')
});

// summary
/*
practice session:
...
problemSummary: {
  problemStats: [{
    difficultyLevel,
    
}]
}


 */
