<template>
  <ul class="node-list">
      <node-item
          v-for="node in nodes" 
          :depth="depth"
          :node="node">
      </node-item> 
  </ul>
</template>

<script>
export default {
  props: {
    nodes: Array,
    depth: {
      type: Number,
      default: 1
    }
  }
}
</script>
