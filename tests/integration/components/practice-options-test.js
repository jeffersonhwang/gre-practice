import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('practice-options', 'Integration | Component | practice options', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  let practiceType = Ember.Object.create({
      type: 'Quick',
      options: {
        sections: ['Quantative', 'Verbal']
      }
  });

  this.set('practiceType', practiceType);

  this.render(hbs`{{practice-options options=this.practiceType.options}}`);

  let sectionOptions = this.$('.section-options > input[type="radio"]');
  console.log(sectionOptions);
  assert.equal(sectionOptions.length, 2);
  assert.equal(sectionOptions[0].value, 'Quantative');
  assert.equal(sectionOptions[1].value, 'Verbal');
});
