import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('reading-comprehension', 'Integration | Component | reading comprehension', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{reading-comprehension}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#reading-comprehension}}
      template block text
    {{/reading-comprehension}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
