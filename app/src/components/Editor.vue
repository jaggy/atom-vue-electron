<template>
  <div class="editor">
      <div class="writer" ref="editor" v-show="isTextBased()"></div>

      <div class="previewer" v-show="!isTextBased()">
          <img alt="" :src="file.path" />
      </div>
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
    },

    isTextBased () {
      return !['jpg', 'png', 'icons', 'ico'].includes(this.file.filetype)
    }
  },

  watch: {
    file (file) {
      this.refreshEditor(file)
    }
  }
}
</script>
