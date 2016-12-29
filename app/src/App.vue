<template>
  <main class="app">
    <tree-view></tree-view>

    <workspace></workspace>
  </main>
</template>

<script>
import store from 'src/vuex/store'

export default {
  store,

  mixins: [
    require('commands/OpenProject.js'),
    require('commands/BindKeyboardShortcuts.js')
  ],

  created () {
    this.openProject('/Users/jaggy/code/atom')
  }
}
</script>

<style lang="scss" src="sass/app.scss"></style>
