import * as types from './mutation-types'
import fs from 'fs'

export const openFile = ({ commit }, file) => {
  fs.readFile(file.path, 'utf8', (err, data) => {
    if (err) {
      throw err
    }

    if (!file.data) {
      file.data = data
    }

    commit(types.OPEN_FILE, file)
    commit(types.ACTIVATE_FILE, file)
  })
}

export const closeFile = ({ state, commit }, removedFile) => {
  let { files } = state.workspace

  commit(
    types.UPDATE_FILE_LIST,
    files.filter(file => file !== removedFile)
  )

  commit(types.ACTIVATE_FILE, null)
}

export const openProject = ({ commit }, path) => {
  commit(types.CLEAR_ALL_FILES)
  commit(types.OPEN_PROJECT, path)
}
