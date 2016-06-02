import Ember from 'ember'
import layout from '../templates/components/frost-file-picker'

const {Component, isNone, on, run} = Ember

// Base design from https://github.com/funkensturm/ember-cli-file-picker
export default Component.extend({
  layout: layout,
  classNames: ['frost-file-picker'],
  classNameBindings: ['isDragging:over:'],
  accept: '*',

  initContext: on('didInitAttrs', function () {
    this.addObserver('value', () => {
      if (isNone(this.get('value'))) {
        this.set('file', null)
        this.set('fileName', null)
      }
    })
  }),
  bindChange: on('didInsertElement', function () {
    this.$('.frost-file-select').on('change', run.bind(this, 'filesSelected'))
  }),
  unbindChange: on('willDestroyElement', function () {
    this.$('.frost-file-select').off('change', run.bind(this, 'filesSelected'))
  }),
  fireHandler: function (file) {
    if (typeof this.attrs['onChange'] === 'function') {
      this.attrs['onChange']({
        id: this.get('id'),
        type: 'file',
        value: file
      })
    }
  },
  filesSelected: function (files) {
    if (!(files instanceof window.FileList)) {
      files = files.target.files
    }
    files = [].slice.call(files)
    let self = this
    let name = files.reduce((e, r) => `${e}${r.name}, `, '')
    this.set('fileName', name.slice(0, -2))
    files.forEach((file) => {
      new Promise(function (resolve, reject) {
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
  click: function (event) {
    if (!this.$(event.target).hasClass('frost-file-select')) {
      this.$('.frost-file-select').trigger('click')
    }
  },
  dragOver: function (event) {
    event.preventDefault()
    this.set('isDragging', true)
  },
  dragEnter: function (event) {
    event.preventDefault()
    this.set('isDragging', true)
  },
  dragLeave: function (event) {
    event.preventDefault()
    this.set('isDragging', false)
  },
  drop: function (event) {
    event.preventDefault()
    this.set('isDragging', false)
    this.filesSelected(event.dataTransfer.files)
  }
})
