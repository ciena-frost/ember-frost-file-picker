/*global capture, $, Blob */
import {expect, assert} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach, afterEach} from 'mocha'
import sinon from 'sinon'

describeComponent(
  'frost-file-picker',
  'Integration: EmberFrostFilePickerComponent',
  {
    integration: true
  },
  function () {
    let sandbox, validateDragStub
    beforeEach(function () {
      sandbox = sinon.sandbox.create()
      validateDragStub = sandbox.stub()
    })
    afterEach(function () {
      sandbox.restore()
    })

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

    it('shows custom placeholder text', function () {
      this.set('text', 'Custom placeholder')
      this.render(hbs`{{frost-file-picker placeholderText=text}}`)
      expect(this.$('.frost-text input').attr('placeholder')).to.eql('Custom placeholder')
    })

    it('calls validateDrag on dragEnter and passes it the event', function () {
      this.set('validateDragStub', validateDragStub)
      this.render(hbs`{{frost-file-picker validateDrag=validateDragStub}}`)
      const e = $.Event('dragenter')
      this.$('.frost-file-picker').trigger(e)
      expect(this.get('validateDragStub').lastCall.args).to.eql([e])
    })

    it('calls validateDrag on dragOver and passes it the event', function () {
      this.set('validateDragStub', validateDragStub)
      this.render(hbs`{{frost-file-picker validateDrag=validateDragStub}}`)
      const e = $.Event('dragover')
      this.$('.frost-file-picker').trigger(e)
      expect(this.get('validateDragStub').lastCall.args).to.eql([e])
    })
  }
)
