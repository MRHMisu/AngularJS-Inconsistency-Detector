module.exports.createRestApplication = createRestApplication;

var fileSystem = require('fs');
var helper = require('./FindDirectory.js');
var directoryList = ['controllers', 'services', 'directives', 'i18n', 'style', 'lib', 'images', 'views', 'factory', 'util',];


function createRestApplication(appData) {
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
    var routeConfigFile = appData.routeConfigFile.toString();
    var uiRouter = /angular-ui-route/g;
    var ngRouter = /angular-route/g;
    var restApiUrl = appData.restApiUrl;
    var restModel = appData.restModel;
    var libVersion = appData.libVersion;

    writeDataOnControllerFile(appName);
    writeDataOnRESTService(appName, restModel, restApiUrl);
    addAngularLibraryFile(appName, libVersion);
    writeDataOnPartialView(appName);
    writeServerFile(appName);
    writePackageJSON(appName, appData);
    if (uiRouter.exec(routeConfigFile)) {
        writeDataOn_UIRoute_ConfigurationFile(appName);
        addUIRoutingLibraryFile(appName,libVersion);
        write_ui_Route_DataOnIndexFile(appName);
    } else if (ngRouter.exec(routeConfigFile)) {
        writeDataOn_NGRoute_ConfigurationFile(appName);
        addNGRoutingLibraryFile(appName,libVersion);
        write_ng_Route_DataOnIndexFile(appName);
    }
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
    fileSystem.readFile(__dirname + '/simple-rest-mvc-app/template/controller.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        var updatedDate = getUpdateData(data, appName);
        fileSystem.writeFile(appName + '/' + 'controllers/' + appName.toLowerCase() + '.controller.js', updatedDate, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }

        function getUpdateData(data, appName) {
            appName = appName.toLowerCase();
            var updatedList = data.replace(/moduelName/g, appName).replace(/controllerName/g, appName + 'Controller').replace(/serviceName/g, appName + 'Service').replace(/factoryName/g, appName + 'Factory');
            updatedList = updatedList.replace("['serviceName','factoryName']", '[' + appName + 'Service' + ',' + appName + 'Factory' + ']');
            return updatedList;
        }
    }
}

function writeDataOnServiceFile(appName) {
    fileSystem.readFile(__dirname + '/simple-rest-mvc-app/template/rest-service.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        var updatedDate = getUpdateData(data, appName);
        fileSystem.writeFile(appName + '/' + 'services/' + appName.toLowerCase() + '.service.js', updatedDate, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }

        function getUpdateData(data, appName) {
            appName = appName.toLowerCase();
            var updatedList = data.replace('moduelName', appName).replace('serviceName', appName + 'Service');
            return updatedList;
        }
    }

}


function writeDataOnRESTService(appName, restModelName, baseURL) {
    fileSystem.readFile(__dirname + '/simple-rest-mvc-app/template/rest-service.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        var updatedDate = getUpdateData(data, restModelName);
        fileSystem.writeFile(appName + '/' + 'services/' + restModelName.toLowerCase() + '.rest.service.js', updatedDate, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }

        function getUpdateData(data, name) {
            var updatedList = data.replace(/moduelName/g, appName).replace(/serviceName/g, name.toLowerCase() + 'RestService');
            updatedList = updatedList.replace(/XXX/g, name);
            updatedList = updatedList.replace(/BASEURL/g, baseURL);
            return updatedList;
        }
    }
}


function writeDataOn_NGRoute_ConfigurationFile(appName) {
    fileSystem.readFile(__dirname + '/simple-rest-mvc-app/template/ng-route.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        var updatedDate = getUpdateData(data, appName);
        fileSystem.writeFile(appName + '/' + appName.toLowerCase() + '.config.js', updatedDate, 'utf8', writeData);
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
function writeDataOn_UIRoute_ConfigurationFile(appName) {
    fileSystem.readFile(__dirname + '/simple-rest-mvc-app/template/ui-route.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        var updatedDate = getUpdateData(data, appName);
        fileSystem.writeFile(appName + '/' + appName.toLowerCase() + '.config.js', updatedDate, 'utf8', writeData);
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

function addAngularLibraryFile(appName, libVersion) {

    var fileName = "angular.js";
    if (libVersion) {
        fileName = "angular.min.js";
    }
    fileSystem.readFile(__dirname + '/resource/' + fileName, 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        fileSystem.writeFile(appName + '/lib/' + fileName, data, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }
    }


}

function addUIRoutingLibraryFile(appName,libVersion) {
    var fileName = "angular-ui-router.js";
    if (libVersion) {
        fileName = "angular-ui-router.min.js";
    }
    fileSystem.readFile(__dirname + '/resource/'+fileName, 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        fileSystem.writeFile(appName + '/lib/' +fileName, data, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }
    }

}

function write_ui_Route_DataOnIndexFile(appName) {

    fileSystem.readFile(__dirname + '/simple-rest-mvc-app/template/index-ui-route.txt', 'utf8', readData);
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

function addNGRoutingLibraryFile(appName,libVersion) {
    var fileName = "angular-route.js";
    if (libVersion) {
        fileName = "angular-route.min.js";
    }
    fileSystem.readFile(__dirname + '/resource/'+fileName, 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        fileSystem.writeFile(appName + '/lib/' +fileName, data, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }
    }

}

function write_ng_Route_DataOnIndexFile(appName) {

    fileSystem.readFile(__dirname + '/simple-rest-mvc-app/template/index-ng-route.txt', 'utf8', readData);
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

function writeDataOnPartialView(appName) {
    fileSystem.readFile(__dirname + '/simple-rest-mvc-app/template/view.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        fileSystem.writeFile(appName + '/' + 'views/' + appName.toLowerCase() + '.view.html', data, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }
    }

}

function writeServerFile(appName) {

    fileSystem.readFile(__dirname + '/simple-rest-mvc-app/template/server.txt', 'utf8', readData);
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













