let path = require('path');

class Filetype
{
    constructor () {
        this.reference = {
            'Gulpfile.js': 'gulp',
            'gulpfile.js': 'gulp',
            '.gitignore':  'git',
            'md':  'markdown',
            'artisan':  'laravel',
            'TODO':  'todo',
            'yarn.lock':  'javascript',
            'js': 'javascript',
        }
    }

    guess (filename) {
        let keys = Object
            .keys(this.reference)
            .filter(file => filename.includes(file));

        if (keys.length) {
            return this.reference[keys[0]];
        }

        return this._extension(filename);
    }

    _extension (node) {
        return path.extname(node).substring(1);
    }
}

module.exports = new Filetype;
