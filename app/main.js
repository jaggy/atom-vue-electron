// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
let Vue = require('vue');

const app = new Vue({
    data: { title: 'Atom Vue' }
});

app.$mount('.app');
