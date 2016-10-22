/**
 * Created by MisuBeImp on 8/23/2016.
 */
/**
 * Goes through the given directory to return all files and folders recursively
 * @author Ash Blue ash@blueashes.com
 * @example getFilesRecursive('./folder/sub-folder');
 * @requires Must include the file system module native to NodeJS, ex. var fs = require('fs');
 * @param {string} folder Folder location to search through
 * @returns {object} Nested tree of the found files
 */
var fs = require('fs');

var folder = __dirname;
console.log(folder);

getFilesRecursive(folder);
function getFilesRecursive(folder) {
    var fileContents = fs.readdirSync(folder),
        fileTree = [],
        stats;

    fileContents.forEach(function (fileName) {
        stats = fs.lstatSync(folder + '/' + fileName);

        if (stats.isDirectory()) {
            fileTree.push({
                name: fileName,
                children: getFilesRecursive(folder + '/' + fileName)
            });
        } else {
            fileTree.push({
                name: fileName
            });
        }
    });

    for (var i = 0; i < fileTree.length; i++) {
        var controllerRegExpression = /(.*).controller.js/g;
        if (controllerRegExpression.exec(fileTree[i].name)) {
            var file = fileTree[i].name;
            console.log(file);

        }


    }
    //return fileTree;


};