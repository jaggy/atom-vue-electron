const { globalShortcut } = require('electron').remote

module.exports = {
  mounted () {
    this.bindKeyboardShortcuts()
  },

  methods: {
    bindKeyboardShortcuts () {
      globalShortcut.register('CommandOrControl+o', () => this.selectProject())
      globalShortcut.register('Control+e', () => this.toggleTree())
    }
  }
}
