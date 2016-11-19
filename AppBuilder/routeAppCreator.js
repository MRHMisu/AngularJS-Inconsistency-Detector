module.exports.createRouteApplication = createRouteApplication;

var fileSystem = require('fs');
var helper = require('./FindDirectory.js');
var directoryList = ['controllers', 'services', 'directives', 'i18n', 'style', 'lib', 'images', 'views', 'factory', 'util',];


function createRouteApplication(appData) {
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

    writeDataOnControllerFile(appName);
    writeDataOnServiceFile(appName);
    writeDataOnConfigurationFile(appName);
    addAngularLibraryFile(appName);
    writeDataOnPartialView(appName);
    writeServerFile(appName);
    writePackageJSON(appName, appData);
    console.log(routeConfigFile);
    if (uiRouter.exec(routeConfigFile)) {
        console.log(routeConfigFile);
        addUIRoutingLibraryFile(appName);
        write_ui_Route_DataOnIndexFile(appName);

    } else if (ngRouter.exec(routeConfigFile)) {
        console.log(routeConfigFile);
        addNGRoutingLibraryFile(appName);
        write_ng_Route_DataOnIndexFile(appName);
    }
    console.log(appName + " Angular application is created successfully");
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
    fileSystem.readFile(__dirname + '/simple-route-mvc-app/template/controller.txt', 'utf8', readData);
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
    fileSystem.readFile(__dirname + '/simple-route-mvc-app/template/service.txt', 'utf8', readData);
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

function writeDataOnConfigurationFile(appName) {
    fileSystem.readFile(__dirname + '/simple-route-mvc-app/template/ui-route.txt', 'utf8', readData);
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

function addUIRoutingLibraryFile(appName) {
    fileSystem.readFile(__dirname + '/resource/angular-ui-router.js', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        fileSystem.writeFile(appName + '/lib/' + 'angular-ui-router.js', data, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }
    }

}

function write_ui_Route_DataOnIndexFile(appName) {

    fileSystem.readFile(__dirname + '/simple-route-mvc-app/template/index-ui-route.txt', 'utf8', readData);
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

function addNGRoutingLibraryFile(appName) {
    fileSystem.readFile(__dirname + '/resource/angular-route.js', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        fileSystem.writeFile(appName + '/lib/' + 'angular-route.js', data, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }
    }

}

function write_ng_Route_DataOnIndexFile(appName) {

    fileSystem.readFile(__dirname + '/simple-route-mvc-app/template/index-ng-route.txt', 'utf8', readData);
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
    fileSystem.readFile(__dirname + '/simple-route-mvc-app/template/view.txt', 'utf8', readData);
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

    fileSystem.readFile(__dirname + '/simple-route-mvc-app/template/server.txt', 'utf8', readData);
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













