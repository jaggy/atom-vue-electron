let path = require('path')

class Filetype
{
  constructor () {
    this.reference = {
      'LICENSE.md': 'license',
      'license.md': 'license',
      'md': 'markdown',
      'TODO': 'todo',
      'log': 'default',

      '.env': 'settings',

      'Gulpfile.js': 'gulp',
      'gulpfile.js': 'gulp',
      'node_modules': 'npm',
      '.gitignore': 'git',
      '.gitattributes': 'git',

      'ico': 'image',
      'icns': 'image',

      'artisan': 'php',
      'composer.lock': 'php',
      'yarn.lock': 'javascript',
      'js': 'javascript'
    }
  }

  guess (filename) {
    let keys = Object
      .keys(this.reference)
      .filter(file => filename.includes(file))

    if (keys.length) {
      return this.reference[keys[0]]
    }

    return this._extension(filename)
  }

  _extension (node) {
    return path.extname(node).substring(1)
  }
}

module.exports = new Filetype()
