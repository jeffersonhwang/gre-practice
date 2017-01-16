import Ember from 'ember';

export function formatPercent(params) {
  let percent = params * 100;
  return `${percent}%`;
}

export default Ember.Helper.helper(formatPercent);
