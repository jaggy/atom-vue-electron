import * as types from '../mutation-types'
import Project from 'src/Project'

const state = {
  project: null,
  files: [],
  active: null
}

const mutations = {
  [types.OPEN_PROJECT] (state, path) {
    state.project = new Project(path)
  },

  [types.OPEN_FILE] (state, file) {
    if (!state.files.includes(file)) {
      state.files.unshift(file)
    }

    state.active = file
  },

  [types.CLEAR_ALL_FILES] (state) {
    state.files = []
    state.active = null
  }
}

export default {
  state,
  mutations
}
