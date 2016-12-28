import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'

import App from './App'

Vue.use(Electron)
Vue.use(Resource)
Vue.config.debug = true

require('electron').remote.globalShortcut.unregisterAll()

/* eslint-disable no-new */
new Vue({
  ...App
}).$mount('#app')
