<template>
  <li class="node-item"
    :class="{ 'node-item--expanded': expanded }">
    <a class="node-item__link" href="#"
       :class="[
         icon(node),
         {
           'icon-folder': node.is_directory,
           'node-item__link--active': node === active_file
         }
       ]"
       :style="{ paddingLeft: `${depth * 0.75}rem` }"
       @click="select(node)">
      <label class="node-item__name">{{ node.name }}</label>
    </a>

    <node-list class="node-list__children"
               v-if="node.is_directory"
               :depth="depth + 1"
               :nodes="node.nodes">
    </node-list>
  </li>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    node: Object,
    depth: Number
  },

  computed: mapState({
    active_file: state => state.workspace.active
  }),

  data () {
    return { expanded: false }
  },

  methods: {
    icon (node) {
      if (!node.filetype) {
        return null
      }

      return `icon-${node.filetype}`
    },

    select (node) {
      if (node.is_directory) {
        return this.expand()
      }

      this.$store.dispatch('openFile', node)
    },

    expand () {
      this.expanded = !this.expanded
    }
  }
}
</script>
