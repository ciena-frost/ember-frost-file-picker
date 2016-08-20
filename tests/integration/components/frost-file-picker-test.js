/*global capture, $, Blob */
import {expect, assert} from 'chai'
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
      return capture('Basic-File-Picker', {experimentalSvgs: true})
    })

    it('uploads a file', function () {
      this.render(hbs`{{frost-file-picker }}`)
      function createFile (content = ['test'], options = {}) {
        var file = new Blob(content, {type: 'text/plain'})
        file.name = 'test.txt'

        return file
      }

      function uploadFileHelper (content, options) {
        var file = createFile(content, options)
        var event = $.Event('change')
        event.target = {
          files: [file]
        }
        $('input').trigger(event)
      }
      $('input').on('change', function (e) {
        assert.equal(e.target.files[0].size, 4, 'has a size of 4')
        assert.equal(e.target.files[0].type, 'text/plain', 'has a type of text/plain')
        assert.equal(e.target.files[0].name, 'test.txt', 'has the correct name')
      })

      uploadFileHelper(['test'])

      return capture('File-upload', {experimentalSvgs: true})
    })
  }
)
