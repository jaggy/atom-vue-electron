import { ipcRenderer as ipc } from 'electron'

module.exports = {
  mounted () {
    this.bindEvents()
  },

  methods: {
    bindEvents () {
      ipc.on('TOGGLE_TREE', event => this.toggleTree())
      ipc.on('SELECT_PROJECT', event => this.selectProject())
    }
  }
}
