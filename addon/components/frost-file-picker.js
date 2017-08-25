import Ember from 'ember'
const {Component, RSVP, isNone, on, run} = Ember
import layout from '../templates/components/frost-file-picker'
import PropTypeMixin, {PropTypes} from 'ember-prop-types'

// Base design from https://github.com/funkensturm/ember-cli-file-picker
export default Component.extend(PropTypeMixin, {
  // == Properties ============================================================

  layout,
  classNames: ['frost-file-picker'],
  classNameBindings: ['isDragging:over:'],

  // == State Properties ======================================================
  propTypes: {
    accept: PropTypes.string,
    hook: PropTypes.string,
    placeholderText: PropTypes.string
  },

  getDefaultProps () {
    return {
      accept: '*',
      hook: 'file-picker',
      placeholderText: 'Drop your file here'
    }
  },

  // == Events ================================================================

  init () {
    this._super(...arguments)
    this.addObserver('value', () => {
      if (isNone(this.get('value'))) {
        this.set('file', null)
        this.set('fileName', null)
      }
    })
  },

  bindChange: on('didInsertElement', function () {
    this._boundedFileSelect = run.bind(this, 'filesSelected')
    this.$('.frost-file-select').on('change', this._boundedFileSelect)
  }),
  unbindChange: on('willDestroyElement', function () {
    this.$('.frost-file-select').off('change', this._boundedFileSelect)
  }),
  // == Functions =============================================================

  _getFiles (files) {
    if (!(files instanceof window.FileList)) {
      files = files.target.files
    }
    return [].slice.call(files)
  },

  _updateFileName (files) {
    const name = files.reduce((e, r) => `${e}${r.name}, `, '')
    this.set('fileName', name.slice(0, -2))
  },

  fireHandler (file) {
    if (typeof this.attrs['onChange'] === 'function') {
      this.attrs['onChange']({
        id: this.get('id'),
        type: 'file',
        value: file
      })
    }
  },

  filesSelected (files) {
    files = this._getFiles(files)
    this._updateFileName(files)

    let self = this
    files.forEach((file) => {
      new RSVP.Promise(function (resolve, reject) {
        if (typeof (self.attrs['validate']) === 'function') {
          self.attrs['validate'](file).then((result) => {
            result.valid ? resolve(file) : reject(result)
          })
        } else {
          try {
            resolve(file)
          } catch (e) {
            reject(e)
          }
        }
      }).then(this.get('fireHandler').bind(this))
        .catch(this.attrs['onError'])
    })
  },

  click (event) {
    if (!this.$(event.target).hasClass('frost-file-select')) {
      this.$('.frost-file-select').trigger('click')
    }
  },

  _setDragging (event, state) {
    event.preventDefault()
    this.set('isDragging', state)
  },

  dragOver (event) {
    if (this.validateDrag && !this.validateDrag(event)) {
      return
    }

    this._setDragging(event, true)
  },

  dragEnter (event) {
    if (this.validateDrag && !this.validateDrag(event)) {
      return
    }

    this._setDragging(event, true)
  },

  dragLeave (event) {
    this._setDragging(event, false)
  },

  drop (event) {
    this._setDragging(event, false)
    this.filesSelected(event.dataTransfer.files)
  }
})
