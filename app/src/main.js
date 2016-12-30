import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'

import App from './App'

Vue.use(Electron)
Vue.use(Resource)
Vue.config.debug = true

require('electron').remote.globalShortcut.unregisterAll()

require('../node_modules/codemirror/mode/javascript/javascript.js')
require('../node_modules/codemirror/mode/php/php.js')
require('../node_modules/codemirror/mode/markdown/markdown.js')
require('../node_modules/codemirror/keymap/vim.js')

Vue.component('tree-view', require('components/TreeView'))
Vue.component('workspace', require('components/Workspace'))
Vue.component('node-list', require('components/NodeList'))
Vue.component('node-item', require('components/NodeItem'))

/* eslint-disable no-new */
new Vue({
  ...App
}).$mount('#app')
