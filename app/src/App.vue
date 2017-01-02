<template>
  <main class="app"
        :class="{ 'tree-view-open': tree.open }">
    <tree-view v-if="project"></tree-view>

    <workspace></workspace>
  </main>
</template>

<script>
import store from 'src/vuex/store'
import { mapState } from 'vuex'
import * as types from 'src/vuex/mutation-types'

export default {
  store,

  mixins: [
    require('commands/OpenProject.js'),
    require('commands/ToggleTreeView.js'),
    require('commands/CloseCurrentFile.js'),
    require('commands/BindEvents.js')
  ],

  computed: mapState({
    tree: state => state['tree-view'],
    project: state => state.workspace.project,
    active_file: state => state.workspace.active
  }),

  created () {
    if (process.env.NODE_ENV) {
      this.openProject('/Users/jaggy/code/atom')
    } else {
      this.newFile()
    }
  },

  methods: {
    newFile () {
      if (this.active_file || this.project) {
        return
      }

      this.$store.commit(types.OPEN_FILE, { name: 'untitled', data: '', type: 'text' })
      this.$store.commit(types.ACTIVATE_FILE)
    },

    updateTitle (file) {
      let title = 'untitled'

      if (file) {
        title = file.name
      }

      if (this.project) {
        title = `${title} — ${this.project.name}`
      }

      document.title = title
    }
  },

  watch: {
    active_file (file) {
      this.updateTitle(file)
    }
  }
}
</script>

<style lang="scss" src="sass/app.scss"></style>
