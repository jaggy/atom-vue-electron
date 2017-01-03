import * as types from '../mutation-types'
import Project from 'src/Project'

const state = {
  project: null,
  files: [],
  active: null,
  fuzzyfinder: {
    open: false
  }
}

const mutations = {
  [types.OPEN_PROJECT] (state, path) {
    state.project = new Project(path)
  },

  [types.OPEN_FILE] (state, file) {
    if (!state.files.includes(file)) {
      state.files.push(file)
    }
  },

  [types.ACTIVATE_FILE] (state, file = null) {
    if (!file && state.files.length) {
      file = state.files[0]
    }

    state.active = file
  },

  [types.UPDATE_FILE_LIST] (state, files) {
    state.files = files
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
