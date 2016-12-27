import * as types from '../mutation-types'

const state = {
  file: null
}

const mutations = {
  [types.READ_FILE] (state, file) {
    state.file = file
  }
}

export default {
  state,
  mutations
}
