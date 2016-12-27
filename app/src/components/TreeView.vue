<template>
  <aside class="tree-view">
    <nav class="project">
      <h2 class="tree-view__header project__name">
        <a href="#">{{ project.name }}</a>
      </h2>

      <ul class="project__nodes node-list">
        <li class="node-item"
          v-for="node in project.nodes">
          <a class="node-item__link" href="#"
             :class="[ 
               icon(node),
               { 
                  'icon-folder': node.is_directory,
                  'node-item__link--active': node === active_file
               }
             ]"
             @click="select(node)">
            <label class="node-item__name">{{ node.name }}</label>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    project: state => state.workspace.project,
    active_file: state => state.workspace.active
  }),

  methods: {
    icon (node) {
      if (!node.filetype) {
        return null
      }

      return `icon-${node.filetype}`
    },

    select (node) {
      if (node.is_directory) {
        return console.error(`expand directory ${node.path}`)
      }

      this.$store.dispatch('readFile', node)
    }
  }
}
</script>
