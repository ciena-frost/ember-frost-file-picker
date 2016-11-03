import Ember from 'ember'

export default Ember.Controller.extend({
  notifications: Ember.inject.service('notification-messages'),

  selectedTab: 'readme',

  actions: {
    validateFile (file) {
      return new Ember.RSVP.Promise((resolve) => {
        if (file != null) {
          this.get('notifications').success('Selected file of type: ' + file.type, {
            autoClear: true,
            clearDuration: 2000
          })
          resolve({valid: true})
          return true
        } else {
          this.get('notifications').error('No file selected', {
            autoClear: true,
            clearDuration: 2000
          })
          resolve({valid: false})
          return false
        }
      })
    },

    onChangeHandler (attrs) {
      var file = attrs.value
      this.get('notifications').success('Changed filename: ' + file.name, {
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
