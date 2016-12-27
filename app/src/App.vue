<template>
  <div class="app">
    <tree-view :project="project"></tree-view>
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

<style lang="scss" src="./sass/app.scss"></style>
