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
            extension: this._extension(node),
        };
    }

    _extension (node) {
        return path.extname(node).substring(1);
    }

    _fullPath (node) {
        return this.directory + '/' + node;
    }

    _isDirectory (node) {
        return fs.lstatSync(node).isDirectory();
    }
}

module.exports = Project;
