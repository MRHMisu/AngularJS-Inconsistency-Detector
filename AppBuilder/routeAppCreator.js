module.exports.createRouteApplication = createRouteApplication;

var fileSystem = require('fs');
var helper = require('./FindDirectory.js');
driectoryList = ['controllers', 'services', 'directives', 'i18n', 'style', 'lib', 'images', 'views', 'factory', 'util',];
function createRouteApplication() {
    var applicationName = process.argv[2];
    if (applicationName) {
        createDirectoryStructure(applicationName, driectoryList);
        createFileForDifferentModules(applicationName);
        console.log(applicationName + " Angular application is created successfully");
    } else {
        console.log("Application name is not given");
    }
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

function createFileForDifferentModules(appName) {

    var currentPath = helper.getCurrentDirectoryBase();
    console.log(currentPath);
    writeDataOnControllerFile(appName, currentPath);
    writeDataOnServiceFile(appName,currentPath);
    writeDataOnConfigurationFile(appName,currentPath);
    putAngularLibraryFile(appName,currentPath);
    putRoutingLibraryFile(appName,currentPath);
    writeDataOnIndexFile(appName,currentPath);
    writeDataOnPartialView(appName,currentPath);
    //writeServerFile(appName,currentPath);
}

function writeDataOnControllerFile(appName, currentPath) {
    fileSystem.readFile('simple-route-mvc-app/template/controller.txt', 'utf8', readData);
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

function writeDataOnServiceFile(appName, currentPath) {
    fileSystem.readFile('simple-route-mvc-app/template/service.txt', 'utf8', readData);
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


function writeDataOnConfigurationFile(appName, currentPath) {
    fileSystem.readFile('simple-route-mvc-app/template/ui-route.txt', 'utf8', readData);
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
function putAngularLibraryFile(appName, currentPath) {

    fileSystem.readFile('resource/angular.min.js', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        fileSystem.writeFile(appName + '/lib/' + 'angular.min.js', data, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }
    }


}

function putRoutingLibraryFile(appName, currentPath) {
    fileSystem.readFile('resource/angular-ui-router.js', 'utf8', readData);
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


function writeDataOnIndexFile(appName, currentPath) {

    fileSystem.readFile('simple-route-mvc-app/template/index-ui-route.txt', 'utf8', readData);
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

function writeDataOnPartialView(appName, currentPath) {
    fileSystem.readFile('simple-route-mvc-app/template/view.txt', 'utf8', readData);
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

function writeServerFile(appName, currentPath) {

    fileSystem.readFile('template/app/server.txt', 'utf8', readData);
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













