let fs = require('fs');
let path = require('path');

Array.prototype.sortByDirectory = function () {
    return this
        .filter(node => node.is_directory)
        .concat(this.filter(node => ! node.is_directory))
};

class Project
{
    constructor (directory) {
        this.directory = directory;
        this.name      = path.basename(directory);
        this.files     = this.files();
    }

    files () {
        return fs
            .readdirSync(this.directory)
            .filter(node => ! node.startsWith('.'))
            .map(node => this._newNode(node))
            .sortByDirectory();
    }

    _newNode (node) {
        let fullpath = this._fullPath(node);

        return {
            name: node,
            path: fullpath,
            is_directory: this._isDirectory(node),
            extension: path.extname(node),
        };
    }

    _fullPath (file) {
        return this.directory + '/' + file;
    }

    _isDirectory (file) {
        return fs.lstatSync(file).isDirectory();
    }
}

module.exports = Project;
