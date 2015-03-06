Meteor.publish('allPlaces', function() {
  return Places.find({});
});
