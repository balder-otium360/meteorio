MochaWeb?.testOnly ->
  expect = chai.expect
  describe 'a group of tests', ->
    it 'should respect equality', ->
      expect(5).to.equal 5
