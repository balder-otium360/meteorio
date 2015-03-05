MochaWeb?.testOnly ->
  expect = chai.expect
  describe 'Server initialization', ->
    it 'should have a Meteor version defined', ->
      expect(Meteor.release).to.exist
