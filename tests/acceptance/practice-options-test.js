import { test } from 'qunit';
import moduleForAcceptance from 'gre-practice/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | practice options');

test('visiting /practice', function(assert) {
  visit('/practice');

  andThen(function() {
    assert.equal(currentURL(), '/practice');
  });
});

test('on /practice, there are 2 practice types Custom and Quick excluding the first blank option', function(assert) {
  visit('/practice');

  andThen(function() {
    let practiceTypes = find('select.practice-type').children;
    assert.equal(practiceTypes.length, 2);
    assert.equal(practiceTypes[0].text(), 'Custom');
    assert.equal(practiceTypes[1].text(), 'Quick');
  });
});

test('on /practice, user selects practice type Quick, and is presented with 2 options', function(assert) {
  visit('/practice');
  fillIn('select.practice-type', 'Quick');

  andThen(function() {
    assert.equal(find('input[type="radio"]').length, 2);
  });
});

test('on /practice, user selects practice type Quick and Verbal section option, gets list of practice problems ', function(assert) {
  visit('/practice');

});
