const {globalShortcut} = require('electron').remote

module.exports = {
  mounted () {
    this.bindKeyboardShortcuts()
  },

  methods: {
    bindKeyboardShortcuts () {
      globalShortcut.register('CommandOrControl+o', () => this.selectProject())
    }
  }
}
