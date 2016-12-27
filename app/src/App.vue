<template>
  <main class="app">
    <tree-view></tree-view>

    <workspace></workspace>
  </main>
</template>

<script>
import * as types from 'src/vuex/mutation-types'
import store from 'src/vuex/store'
import Project from 'src/Project'

export default {
  store,

  components: {
    'tree-view': require('src/components/TreeView.vue'),
    'workspace': require('src/components/Workspace.vue')
  },

  beforeCreate () {
    this.$store.commit(
      types.OPEN_PROJECT,
      new Project('/Users/jaggy/code/atom')
    )
  }
}
</script>

<style lang="scss" src="./sass/app.scss"></style>
