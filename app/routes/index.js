import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    this.store.find('post').then(function(posts) {
      controller.set('content', posts);
    }).catch(function() {
      console.log(arguments);
    });
  }
});
