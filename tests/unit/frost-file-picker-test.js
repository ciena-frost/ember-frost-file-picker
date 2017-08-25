import {expect} from 'chai'
import {setupComponentTest} from 'ember-mocha'
import {helpers} from 'ember-prop-types'
import {beforeEach, describe, it} from 'mocha'
const {validatePropTypes} = helpers

describe('Unit / Component / frost-file-picker /', function () {
  setupComponentTest('frost-file-picker', {unit: true})

  let component
  beforeEach(function () {
    component = this.subject({accept: '*'})
  })

  describe('`proptypes` validation', function () {
    it('should have valid `proptypes` declaration', function () {
      expect(function () {
        validatePropTypes(component)
      }).not.to.throw()
    })
  })
})
