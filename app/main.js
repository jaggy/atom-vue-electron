// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import Vue from 'vue';

Vue.use(require('vuex'));
Vue.use(require('vue-router'));

Vue.component('sidebar', require('./components/Sidebar.vue'));

const app = new Vue({
    router: require('./routes.js'),
    store:  require('./store.js'),

    data: Atom
});

app.$mount('.app');
