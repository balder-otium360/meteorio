Template.Home.helpers
  myAppVariable: ->
    Session.get 'myAppVariable'


Template.Home.events
  # jshint unused: false
  'click [data-ot-mybutton]': (event, template) ->
    Session.set 'myAppVariable', Math.floor(Math.random() * 101)
