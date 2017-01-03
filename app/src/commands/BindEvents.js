import events from '../../event-types'
import { ipcRenderer as ipc } from 'electron'

module.exports = {
  mounted () {
    this.bindEvents()
  },

  methods: {
    bindEvents () {
      ipc.on(events.TOGGLE_TREE, event => this.toggleTree())
      ipc.on(events.TOGGLE_FUZZY_FINDER, event => this.toggleFuzzyFinder())
      ipc.on(events.SELECT_PROJECT, event => this.selectProject())
      ipc.on(events.CLOSE_CURRENT_FILE, event => this.closeCurrentFile())
    }
  }
}
