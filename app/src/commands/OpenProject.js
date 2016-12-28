const {dialog} = require('electron').remote

module.exports = {
  methods: {
    selectProject () {
      let directory = dialog.showOpenDialog({properties: ['openDirectory']})

      if (!directory) {
        return
      }

      this.openProject(directory[0])
    },

    openProject (path) {
      this.$store.dispatch('openProject', path)
    }
  }
}
