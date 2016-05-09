import Ember from 'ember'

export default Ember.Controller.extend({
  selectedTab: 'readme',

  actions: {
    validateFile (file) {
      return new Ember.RSVP.Promise((resolve) => {
        if (file != null) {
          this.notifications.addNotification({
            message: 'Selected file of type: ' + file.type,
            type: 'success',
            autoClear: true,
            clearDuration: 2000
          })
          resolve({valid: true})
          return true
        } else {
          this.notifications.addNotification({
            message: 'No file selected',
            type: 'error',
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
      this.notifications.addNotification({
        message: 'Changed filename: ' + file.name,
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
