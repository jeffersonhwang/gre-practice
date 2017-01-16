import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('practice', function() {
    this.route('session', { path: '/:sessionId' });
  });
  this.route('dashboard');
});

export default Router;
