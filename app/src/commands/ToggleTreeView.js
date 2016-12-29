import * as types from 'src/vuex/mutation-types'

module.exports = {
  methods: {
    toggleTree () {
      this.$store.commit(types.TOGGLE_TREE)
    }
  }
}
