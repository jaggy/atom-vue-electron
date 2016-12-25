let fs = require('fs');

class Project
{
    constructor (directory) {
        this.directory = directory;
        this.name      = this.name();
        this.files     = this.files();
    }

    name () {
        let segments = this.directory.split('/');

        return segments[segments.length - 1];
    }

    files () {
        let filenames = fs.readdirSync(this.directory);
        let groups = [];

        let files = filenames
            .filter(filename => ! filename.startsWith('.'))
            .map(filename => {
                let file = this._fullPath(filename);

                return {
                    name: filename,
                    path: file,
                    is_directory: this._isDirectory(file),
                };
            })

        return files
            .filter(file => file.is_directory)
            .concat(
                files.filter(file => ! file.is_directory)
            )
    }

    _sortByName(a, b) {
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
            return 1;
        }

        if (a.name.toUpperCase() < b.name.toUpperCase()) {
            return -1;
        }

        return 0;
    }

    _fullPath (file) {
        return this.directory + '/' + file;
    }

    _isDirectory (file) {
        return fs.lstatSync(file).isDirectory();
    }
}

module.exports = Project;
