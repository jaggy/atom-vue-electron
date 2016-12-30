<template>
    <nav class="tab-view">
        <ul class="tab-list">
            <li class="tab-item"
                :class="{
                    'tab-item--active': file === active_file
                }"
                v-for="file in files">
                <a class="tab-item__close close-button" href="#"
                   @click.prevent="close(file)"></a>

                <a class="tab-item__link" href="#"
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
      this.$store.dispatch('openFile', file)
    },

    close (file) {
      this.$store.dispatch('closeFile', file)
    }
  }
}
</script>
