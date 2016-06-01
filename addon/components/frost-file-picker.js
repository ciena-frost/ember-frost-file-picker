import Ember from 'ember'
import layout from '../templates/components/frost-file-picker'
import _ from 'lodash'

const {Component, isNone, on, run} = Ember

// Base design from https://github.com/funkensturm/ember-cli-file-picker
export default Component.extend({
  layout: layout,
  classNames: ['frost-file-picker'],
  classNameBindings: ['fileName'],
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

  filesSelected: function (files) {
    if (!(files instanceof FileList)) {
      files = event.target.files
    }
    this.set('fileName', null)

    if (typeof(this.attrs['validate']) === 'function') {
      this.attrs['validate'](files[0]).then((result) => {
        if (result.valid) {
          this.set('fileName', files[0].name)
          if (_.isFunction(this.attrs['onChange'])) {
            this.attrs['onChange']({
              id: this.get('id'),
              type: 'file',
              value: files[0]
            })
          }
        }
      })
    } else {
      this.set('fileName', files[0].name)
      if (_.isFunction(this.attrs['onChange'])) {
        this.attrs['onChange']({
          id: this.get('id'),
          type: 'file',
          value: files[0]
        })
      }
    }
  },
  click: function (event) {
    if (!this.$(event.target).hasClass('frost-file-select')) {
      this.$('.frost-file-select').trigger('click')
    }
  },
  dragOver: function (event) {
    event.preventDefault()
    this.$('.background').addClass('over')
  },
  drop: function (event) {
    event.preventDefault()
    this.filesSelected(event.dataTransfer.files)
    this.$('.background').removeClass('over')
  },
  dragEnter: function (event) {
    event.preventDefault()
    this.$('.background').addClass('over')
  },
  dragLeave: function (event) {
    event.preventDefault()
    this.$('.background').removeClass('over')
  }
})
