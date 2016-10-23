/**
 * Created by Misu Be Imp on 10/22/2016.
 */

Filesystem = require('fs');
var controllerFiles = [];
var directiveFiles = [];
var viewFiles = [];
var controllerRegExpression = /(.*).controller.js/g;
var directivesRegExpression = /(.*).directive.js/g;
var viewsRegExpression = /(.*).view.js/g;

var allControllerFile = [];
function findFile(dir) {
    Filesystem.readdirSync(dir).forEach(function (file) {
        var stat;
        stat = Filesystem.statSync("" + dir + "/" + file);
        if (stat.isDirectory()) {
            return findFile("" + dir + "/" + file);
        }
        else if (controllerRegExpression.exec(file)) {
            var data = Filesystem.readFileSync(dir + "//" + file);
            return controllerFiles.push(dir + "//" + file);
        }
    });
};


function readAllFiles(controllerFiles) {

    for (var i = 0; i < controllerFiles.length; i++) {
        data = Filesystem.readFileSync(controllerFiles[i]);
        allControllerFile.push(data.toString());
    }
}

findFile(__dirname);
console.log(controllerFiles);
readAllFiles(controllerFiles)
for (var i = 0; i < allControllerFile.length; i++)
{
    console.log(allControllerFile[i].toString());
}
