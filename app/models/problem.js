import DS from 'ember-data';

export default DS.Model.extend({
  passage: DS.attr('string'),
  answerChoices: DS.attr(),
  sectionType: DS.attr('string'),
  questionType: DS.attr('string'),
  question: DS.attr('string'),
  answer: DS.attr('string'),
  canSelectMultipleAnswers: DS.attr('boolean'),
  difficultyLevel: DS.attr('string'),
  stats: DS.attr()
});
