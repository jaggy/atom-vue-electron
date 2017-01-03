let Filetype = require('./Filetype.js')
let path = require('path')
let fs = require('fs')

class Project
{
  constructor (directory) {
    this.directory = directory
    this.name = path.basename(directory)
    this.nodes = this.nodes()
    this.index = this._flatten(this.nodes)
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

    node = {
      name: node,
      path: fullpath,
      is_directory: this._isDirectory(fullpath),
      filetype: Filetype.guess(node)
    }

    node.nodes = this._getChildren(node)

    return node
  }

  _getChildren (node) {
    if (!node.is_directory || node.name === 'node_modules') {
      return []
    }

    return (new Project(node.path)).nodes
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

  _flatten (array) {
    return array.reduce((flat, toFlatten) => {
      return flat.concat(
        toFlatten.is_directory
          ? this._flatten(toFlatten.nodes)
          : toFlatten
      )
    }, [])
  }
}

module.exports = Project
