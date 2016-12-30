import { ipcRenderer as ipc } from 'electron'

function bindEvents () {
  ipc.on('TOGGLE_TREE', () => {
    this.$store.commit('TOGGLE_TREE')
  })
}

module.exports = {
  mounted () {
    this.bindEvents()
  },

  methods: {
    bindEvents
  }
}
