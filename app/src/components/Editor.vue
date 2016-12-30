<template>
  <div class="editor" ref="editor">
    <!-- <pre v-if="file"><code>{{ file.data }}</code></pre> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CodeMirror from 'codemirror'

export default {
  computed: mapState({
    file: state => state.workspace.active
  }),

  data () {
    return { codemirror: null }
  },

  mounted () {
    this.codemirror = CodeMirror(this.$refs.editor, {
      theme: 'tomorrow-night-eighties',
      type: 'text',
      keyMap: 'vim'
    })
  },

  methods: {
    refreshEditor (file) {
      if (!file) {
        return this.codemirror.setValue('')
      }

      this.codemirror.setValue(file.data)
      this.codemirror.setOption('type', file.filetype)
    }
  },

  watch: {
    file (file) {
      this.refreshEditor(file)
    }
  }
}
</script>
