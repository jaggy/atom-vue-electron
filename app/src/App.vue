<template>
  <div>
    <tree-view :project="project"></tree-view>

    testing
  </div>
</template>

<script>
import Vue from 'vue'
import store from 'src/vuex/store'
import Project from 'src/Project'

Vue.component('tree-view', require('src/components/TreeView.vue'))

export default {
  store,

  data () {
    return {
      project: new Project('/Users/jaggy/code/atom')
    }
  }
}
</script>
