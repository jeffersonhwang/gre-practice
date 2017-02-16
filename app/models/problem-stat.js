import DS from 'ember-data';

export default DS.Model.extend({
  practiceSession: DS.belongsTo('practice-session'),
  problemId: DS.attr('string'),
  yourAnswer: DS.attr('string'),
  isCorrect: DS.attr('boolean'),
  difficultyLevel: DS.attr('string'),
  percentCorrect: DS.attr(),
  sectionType: DS.attr('string'),
  questionType: DS.attr('string')
});
