<template>
  <div>
    <tree-view :project="project"></tree-view>

    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import store from 'src/vuex/store'
import Project from 

Vue.component('tree-view', require('src/components/TreeView.vue'))

export default {
  store,

  data () {
    return {
      project: {
        name: 'test'
      }
    }
  }
}
</script>
