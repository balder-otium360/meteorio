Template.places.helpers({
  places: function() {
    return Places.find({}, {sort: { name: 1}});
  }
});
