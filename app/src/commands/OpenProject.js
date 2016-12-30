module.exports = {
  methods: {
    openProject (path) {
      this.$store.dispatch('openProject', path)
    }
  }
}
