<template>
  <main class="app"
        :class="{
          'tree-view-open': tree.open
        }">
    <tree-view></tree-view>

    <workspace></workspace>
  </main>
</template>

<script>
import store from 'src/vuex/store'
import { mapState } from 'vuex'

export default {
  store,

  mixins: [
    require('commands/OpenProject.js'),
    require('commands/ToggleTreeView.js'),
    require('commands/BindEvents.js')
  ],

  computed: mapState({
    tree: state => state['tree-view']
  }),

  created () {
    this.openProject('/Users/jaggy/code/atom')
  }
}
</script>

<style lang="scss" src="sass/app.scss"></style>
