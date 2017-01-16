import DS from 'ember-data';

// date: new Date(2016, 12, 12, 16, 45, 0, 0),
// sessionStats: {
//   numberOfQuestions: 4,
//   section: 'Verbal',
//   questions: ['id1', 'id2']
// }

export default DS.Model.extend({
  creationDate: DS.attr('date'),
  lastModified: DS.attr('date'),
  sessionStats: DS.attr()
});
