/**
 * Created by Misu Be Imp on 10/24/2016.
 */
Filesystem = require('fs');

var findFile, jsFiles, rootDir;
jsFiles = [];

findFile = function(dir)
{
    Filesystem.readdirSync(dir).forEach(function(file) {
        var stat;
        stat = Filesystem.statSync("" + dir + "/" + file);
        if (stat.isDirectory())
        {
            return findFile("" + dir + "/" + file);
        }
        else if (file.split('.').pop() === 'js')
        {
            return jsFiles.push("" + dir + "/" + file);
        }
    });
};

// test it out on home directory
findFile(__dirname);
console.log(jsFiles);