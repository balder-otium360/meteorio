Router.route '/places',
  data: ->
    places: Places.find(
      {},
      sort: name: 1
    )

Router.route '/places/:id',
  name: 'place.detail'
  data: ->
    Places.findOne(
      _id: new Mongo.ObjectID(@params.id)
    )
