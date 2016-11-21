module.exports.createSimpleEmptyApplication = createSimpleEmptyApplication;

var fileSystem = require('fs');
var directoryList = ['style', 'lib', 'images'];

function createSimpleEmptyApplication(appData) {
    var applicationName = appData.name;
    createDirectoryStructure(applicationName, directoryList);
    createFileForDifferentModules(appData);
}

function createDirectoryStructure(appName, driectoryList) {

    if (!fileSystem.existsSync(appName)) {
        fileSystem.mkdirSync(appName);
    }
    for (var i = 0; i < driectoryList.length; i++) {
        if (!fileSystem.existsSync(appName + '/' + driectoryList[i])) {
            fileSystem.mkdirSync(appName + '/' + driectoryList[i]);
        }
    }
}

function createFileForDifferentModules(appData) {
    var appName = appData.name;
    writeDataOnControllerFile(appName);
    addAngularLibraryFile(appName);
    writeServerFile(appName);
    writePackageJSON(appName, appData);
    writeDataOnIndexFile(appName);
}

function writePackageJSON(appName, appData) {
    var json = JSON.stringify(appData);
    fileSystem.writeFile(appName + '/' + 'package.json', json, 'utf8', writeData);
    function writeData(error) {
        if (error) {
            return console.log(error);
        }
    }

}

function writeDataOnControllerFile(appName) {
    fileSystem.readFile(__dirname + '/simple-empty-mvc-app/template/controller.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        var updatedDate = getUpdateData(data, appName);
        fileSystem.writeFile(appName + '/' + appName.toLowerCase() + '.controller.js', updatedDate, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }
        function getUpdateData(data, appName) {
            appName = appName.toLowerCase();
            var updatedList = data.replace(/moduelName/g, appName).replace(/controllerName/g, appName + 'Controller');
            return updatedList;
        }
    }
}

function addAngularLibraryFile(appName) {

    fileSystem.readFile(__dirname + '/resource/angular.js', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        fileSystem.writeFile(appName + '/lib/' + 'angular.js', data, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }
    }


}

function writeDataOnIndexFile(appName) {

    fileSystem.readFile(__dirname + '/simple-empty-mvc-app/template/index.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        var updatedDate = getUpdateData(data, appName);
        fileSystem.writeFile(appName + '/' + 'index.html', updatedDate, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }

        function getUpdateData(data, appName) {
            appName = appName.toLowerCase();
            var updatedList = data.replace(/appName/g, appName);
            return updatedList;
        }
    }

}

function writeServerFile(appName) {

    fileSystem.readFile(__dirname + '/simple-empty-mvc-app/template/server.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        fileSystem.writeFile(appName + '/' + 'server.js', data, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }
    }
}
