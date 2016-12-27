<template>
    <nav class="tab-view">
        <ul class="tab-list">
            <li class="tab-item"
                v-for="file in files">
                <a class="tab-item__link" href="#"
                   :class="{ 
                       'tab-item__link--active': file === active_file 
                   }"
                   @click.prevent="select(file)">
                    {{ file.name }}
                </a>
            </li>            
        </ul>
    </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    files: state => state.workspace.files,
    active_file: state => state.workspace.active
  }),

  methods: {
    select (file) {
      this.$store.dispatch('readFile', file)
    }
  }
}
</script>
