import * as types from './mutation-types'
import fs from 'fs'

export const readFile = ({ commit }, file) => {
  fs.readFile(file.path, 'utf8', (err, data) => {
    if (err) {
      throw err
    }

    file.data = data

    commit(types.OPEN_FILE, file)
  })
}

export const decrementMain = ({ commit }) => {
  commit(types.DECREMENT_MAIN_COUNTER)
}

export const incrementMain = ({ commit }) => {
  commit(types.INCREMENT_MAIN_COUNTER)
}
