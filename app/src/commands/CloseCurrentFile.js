module.exports = {
  methods: {
    closeCurrentFile () {
      this.$store.dispatch('closeFile', this.$store.state.workspace.active)
    }
  }
}
