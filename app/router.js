import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('practice', function() {
    this.route('session', { path: '/session/:session_id' }, function() {
      this.route('problem', function() {
        this.route('show', { path:'/:problem_id'});
      });
    });
  });
  this.route('dashboard');
});

export default Router;
