Meteor.publish 'allPlaces', ->
  Places.find {}
