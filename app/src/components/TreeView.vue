<template>
  <aside class="tree-view">
    <nav class="project">
      <h2 class="tree-view__header project__name">
        <a href="#">{{ project.name }}</a>
      </h2>

      <node-list class="project__nodes"
                 :nodes="project.nodes">
      </node-list>
    </nav>
  </aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    project: state => state.workspace.project,
    active_file: state => state.workspace.active
  })
}
</script>
