/* global capture, Blob */
import Ember from 'ember'
const {$} = Ember
import {expect, assert} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {afterEach, beforeEach, describe} from 'mocha'
import sinon from 'sinon'

// FIXME: jsdoc
function createFile (content = ['test'], options = {}) {
  const file = new Blob(content, {type: 'text/plain'})
  file.name = 'test.txt'

  return file
}

// FIXME: jsdoc
function uploadFileHelper (content, options) {
  const file = createFile(content, options)
  const event = $.Event('change')
  event.target = {
    files: [file]
  }
  $('input').trigger(event)
}

describeComponent(
  'frost-file-picker',
  'Integration: EmberFrostFilePickerComponent',
  {
    integration: true
  },
  function () {
    let sandbox
    beforeEach(function () {
      sandbox = sinon.sandbox.create()
      this.setProperties({
        text: 'Custom placeholder',
        validateDragStub: sandbox.stub()
      })
    })

    afterEach(function () {
      sandbox.restore()
    })

    describe('when no properties provided', function () {
      beforeEach(function () {
        this.render(hbs`
          {{frost-file-picker}}
        `)
      })

      it('should render properly', function () {
        expect(this.$('.frost-file-picker')).to.have.length(1)
        return capture('Basic-File-Picker', {experimentalSvgs: true})
      })

      describe('when uploading a file', function () {
        beforeEach(function () {
          $('input').on('change', function (e) {
            assert.equal(e.target.files[0].size, 4, 'has a size of 4')
            assert.equal(e.target.files[0].type, 'text/plain', 'has a type of text/plain')
            assert.equal(e.target.files[0].name, 'test.txt', 'has the correct name')
          })
          uploadFileHelper(['test'])
        })

        it('should render properly', function () {
          return capture('File-upload', {experimentalSvgs: true})
        })
      })
    })

    describe('when placeholderText is given', function () {
      beforeEach(function () {
        this.render(hbs`
          {{frost-file-picker placeholderText=text}}
        `)
      })

      it('should use the provided placeholder text', function () {
        expect(this.$('.frost-text input').attr('placeholder')).to.eql('Custom placeholder')
      })
    })

    describe('when validateDrag is given', function () {
      beforeEach(function () {
        this.render(hbs`
          {{frost-file-picker validateDrag=validateDragStub}}
        `)
      })

      describe('when dragenter is triggered', function () {
        let e
        beforeEach(function () {
          e = $.Event('dragenter')
          this.$('.frost-file-picker').trigger(e)
        })

        it('should call validateDrag with the event', function () {
          expect(this.get('validateDragStub').lastCall.args).to.be.eql([e])
        })
      })

      describe('when dragover is triggered', function () {
        let e
        beforeEach(function () {
          e = $.Event('dragover')
          this.$('.frost-file-picker').trigger(e)
        })

        it('should call validateDrag with the event', function () {
          expect(this.get('validateDragStub').lastCall.args).to.be.eql([e])
        })
      })
    })
  }
)
