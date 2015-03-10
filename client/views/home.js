Template.home.helpers({
  myAppVariable: function() {
    return Session.get('myAppVariable');
  }
});

Template.home.events({
  /* jshint unused: false */
  'click [data-ot-mybutton]': function(event, template) {
    Session.set('myAppVariable', Math.floor(Math.random() * 101));
  }
});
