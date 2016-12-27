let Filetype = require('./Filetype.js');
let path = require('path');
let fs = require('fs');

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
        this.nodes     = this.nodes();
    }

    nodes () {
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
            filetype: Filetype.guess(node),
        };
    }

    _fullPath (node) {
        return this.directory + '/' + node;
    }

    _isDirectory (node) {
        return fs.lstatSync(node).isDirectory();
    }
}

module.exports = Project;
