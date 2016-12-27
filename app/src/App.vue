<template>
  <main class="app">
    <tree-view></tree-view>

    <workspace></workspace>
  </main>
</template>

<script>
import store from 'src/vuex/store'
const {dialog, globalShortcut} = require('electron').remote

export default {
  store,

  components: {
    'tree-view': require('src/components/TreeView'),
    'workspace': require('src/components/Workspace')
  },

  created () {
    this.openProject('/Users/jaggy/code/atom')
  },

  mounted () {
    globalShortcut.register('CommandOrControl+o', () => {
      let directory = dialog.showOpenDialog({properties: ['openDirectory']})

      if (!directory) {
        return
      }

      this.openProject(directory[0])
    })

    globalShortcut.register('CommandOrControl+s', () => {
      console.log('saving file')
    })

    console.log('registered keybindings')
  },

  methods: {
    openProject (path) {
      this.$store.dispatch('openProject', path)
    }
  }
}
</script>

<style lang="scss" src="./sass/app.scss"></style>
