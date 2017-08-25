/* global Blob */
import {assert, expect} from 'chai'
import Ember from 'ember'
const {$} = Ember
import {$hook, initialize as initializeHook} from 'ember-hook'
import {setupComponentTest} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {afterEach, beforeEach, describe, it} from 'mocha'
import sinon from 'sinon'

/**
 * Create a new file with the given content and options
 * @param {array} content for Blob constructor
 * @param {object} options for Blob constructor
 * @returns {blob} the new file
 */
function createFile (content = ['test'], options = {type: 'text/plain'}) {
  const file = new Blob(content, options)
  file.name = content[0] + '.txt'

  return file
}

/**
 * Trigger change event with file
 * @param {array} content for Blob constructor
 * @param {object} options for Blob constructor
 */
function uploadFileHelper (content, options) {
  const file = createFile(content, options)
  const event = $.Event('change')
  event.target = {
    files: [file]
  }
  $('input').trigger(event)
}

describe('Integration/ Component / frost-file-picker', function () {
  setupComponentTest('frost-file-picker', {
    integration: true
  })

  let sandbox
  beforeEach(function () {
    initializeHook()
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
        {{frost-file-picker hook='my-picker'}}
      `)
    })

    it('should render properly', function () {
      expect($hook('my-picker')).to.have.length(1)
    })

    it('should accept all files', function () {
      expect($('input').attr('accept')).to.equal('*')
    })

    describe('when uploading a file', function () {
      beforeEach(function () {
        $('input').on('change', function (e) {
          assert.equal(e.target.files[0].size, 4, 'has a size of 4')
          assert.equal(e.target.files[0].type, 'text/plain', 'has a type of text/plain')
          assert.equal(e.target.files[0].name, 'test.txt', 'has the correct name')
        })
      })

      it('should render properly', function () {
        uploadFileHelper(['test'])
      })

      afterEach(function () {
        $('input').off('change')
      })
    })
  })

  describe('when placeholderText is given', function () {
    beforeEach(function () {
      this.render(hbs`
        {{frost-file-picker
          hook='my-picker'
          placeholderText=text
        }}
      `)
    })

    it('should use the provided placeholder text', function () {
      expect($hook('my-picker-input').attr('placeholder')).to.eql('Custom placeholder')
    })
  })

  describe('when accept is given', function () {
    beforeEach(function () {
      this.render(hbs`
        {{frost-file-picker
          accept='png'
        }}
      `)
    })

    it('should accept that file extension', function () {
      expect($('input').attr('accept')).to.equal('png')
    })
  })

  describe('when validateDrag is given', function () {
    beforeEach(function () {
      this.render(hbs`
        {{frost-file-picker
          hook='my-picker'
          validateDrag=validateDragStub
        }}
      `)
    })

    describe('when dragenter is triggered', function () {
      let e
      beforeEach(function () {
        e = $.Event('dragenter')
        $hook('my-picker').trigger(e)
      })

      it('should call validateDrag with the event', function () {
        expect(this.get('validateDragStub').lastCall.args).to.be.eql([e])
      })
    })

    describe('when dragover is triggered', function () {
      let e
      beforeEach(function () {
        e = $.Event('dragover')
        $hook('my-picker').trigger(e)
      })

      it('should call validateDrag with the event', function () {
        expect(this.get('validateDragStub').lastCall.args).to.be.eql([e])
      })
    })
  })
})
