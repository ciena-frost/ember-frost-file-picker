import {expect} from 'chai'
import {setupComponentTest} from 'ember-mocha'
import {
  helpers,
  settings as propTypesSettings
} from 'ember-prop-types/mixins/prop-types'
import {afterEach, beforeEach, describe, it} from 'mocha'
const {validatePropTypes} = helpers

describe('Unit / Component / frost-file-picker /', function () {
  setupComponentTest('frost-file-picker', {unit: true})

  let component
  beforeEach(function () {
    component = this.subject({accept: '*'})
  })

  describe('`proptypes` validation', function () {
    let throwErrors

    beforeEach(function () {
      // save our real settings so that we can force validation,
      // in case our environment.js ever decides that such validation should be optional.
      throwErrors = propTypesSettings.throwErrors
      propTypesSettings.throwErrors = true
    })

    afterEach(function () {
      propTypesSettings.throwErrors = throwErrors
    })

    it('should have valid `proptypes` declaration', function () {
      expect(function () {
        validatePropTypes(component)
      }).to.not.throw()
    })
  })
})
