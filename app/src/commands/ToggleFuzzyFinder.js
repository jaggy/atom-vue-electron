import * as types from 'src/vuex/mutation-types'

module.exports = {
  methods: {
    toggleFuzzyFinder () {
      this.$store.commit(types.TOGGLE_FUZZY_FINDER)
    }
  }
}
