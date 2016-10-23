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
call();

function call() {
    var folder = __dirname;
    folder = folder + '/' + 'controllers';
    var fileTree = getFilesRecursive(folder);
    console.log(fileTree.length);
    for (var i = 0; i < fileTree.length; i++) {
        var controllerRegExpression = /(.*).controller.js/g;
        if (controllerRegExpression.exec(fileTree[i].fileName)) {
            var file = fileTree[i].fileName;
            console.log(file);

        }

    }
}


function getFilesRecursive(folder) {
    var fileContents = fs.readdirSync(folder);
    var files = [];
    var fileTree = [];
    var stats;
    fileContents.forEach(function (fileName) {
        stats = fs.lstatSync(folder + '/' + fileName);
        if (stats.isDirectory()) {
            fileTree.push({
                name: fileName,
                children: getFilesRecursive(folder + '/' + fileName)
            });
        } else {
            fs.readFile(folder + '//' + fileName, 'utf8', readData);
            function readData(error, data) {
                if (error) {
                    return console.log(error);
                }
                // console.log("Read OK");
                //console.log(data);
                files.push({fileName: fileName,fileContent: data});
            }
        }
    });

    return files;


};