import * as types from 'src/vuex/mutation-types'
import { ipcRenderer as ipc } from 'electron'

module.exports = {
  mounted () {
    this.bindEvents()
  },

  methods: {
    bindEvents () {
      ipc.on(types.TOGGLE_TREE, event => this.toggleTree())
      ipc.on(types.OPEN_PROJECT, (event, path) => this.openProject(path))
    }
  }
}
