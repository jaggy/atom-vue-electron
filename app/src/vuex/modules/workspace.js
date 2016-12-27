import * as types from '../mutation-types'

const state = {
  project: null,
  files: [],
  active: null
}

const mutations = {
  [types.OPEN_PROJECT] (state, project) {
    state.project = project
  },

  [types.OPEN_FILE] (state, file) {
    if (!state.files.includes(file)) {
      state.files.unshift(file)
    }

    state.active = file
  }
}

export default {
  state,
  mutations
}
