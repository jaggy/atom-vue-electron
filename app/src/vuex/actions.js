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
  })
}

export const openProject = ({ commit }, path) => {
  commit(types.CLEAR_ALL_FILES)
  commit(types.OPEN_PROJECT, path)
}
