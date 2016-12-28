let Filetype = require('./Filetype.js')
let path = require('path')
let fs = require('fs')

class Project
{
  constructor (directory) {
    this.directory = directory
    this.name = path.basename(directory)
    this.nodes = this.nodes()
  }

  nodes () {
    let nodes = fs
      .readdirSync(this.directory)
      .filter(node => !node.startsWith('.'))
      .map(node => this._newNode(node))

    return this._sortByDirectory(nodes)
  }

  _newNode (node) {
    let fullpath = this._fullPath(node)

    return {
      name: node,
      path: fullpath,
      is_directory: this._isDirectory(fullpath),
      filetype: Filetype.guess(node)
    }
  }

  _sortByDirectory (array) {
    return array
      .filter(node => node.is_directory)
      .concat(array.filter(node => !node.is_directory))
  }

  _fullPath (node) {
    return this.directory + '/' + node
  }

  _isDirectory (node) {
    return fs.lstatSync(node).isDirectory()
  }
}

module.exports = Project
