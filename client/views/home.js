Template.home.helpers({
  myAppVariable: function() {
    return Session.get('myAppVariable');
  }
});

Template.home.events({
  /* jshint unused: false */
  'click .x-my-button': function(event, template) {
    Session.set('myAppVariable', Math.floor(Math.random() * 101));
  }
});
