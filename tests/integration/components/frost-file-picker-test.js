import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'frost-file-picker',
  'Integration: EmberFrostFilePickerComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value')
      // Handle any actions with this.on('myAction', function (val) { ... })

      this.render(hbs`{{frost-file-picker}}`)
      expect(this.$('.frost-file-picker')).to.have.length(1)
    })
  }
)
