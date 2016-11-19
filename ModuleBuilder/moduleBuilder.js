module.exports.createModule = createModule;
var fileSystem = require('fs');
var progressBar = require('./projgressBar.js');
var helper = require('./FindDirectory.js');


function createModule() {
    var moduleOption = process.argv[2];
    var moduleName = process.argv[3];
    var additionalOption = process.argv[4];
    var baseURL = process.argv[5];
    if (moduleOption) {
        console.log(moduleOption);
        if (moduleName) {
            console.log(moduleName);
            console.log("command accepted");
            if (moduleOption === '-c') {
                progressBar.startProgressBar("Controller", 50);
                createController(moduleName);
            } else if (moduleOption === '-d') {
                progressBar.startProgressBar("Directive", 50);
                createDirective(moduleName);
            } else if (moduleOption === '-f') {
                progressBar.startProgressBar("Factory", 50);
                createFactory(moduleName);
            } else if (moduleOption === '-s') {
                progressBar.startProgressBar("Service", 50);
                createService(moduleName);
            } else if (moduleOption === '-rs') {
                if (additionalOption === '-u') {
                    if (baseURL) {
                        progressBar.startProgressBar("Rest Service", 80);
                        createRESTService(moduleName, baseURL);
                    } else {
                        console.log("must have the the base url");
                    }

                } else {
                    console.log("must have the the base url option");
                }

            }
            else if (moduleOption === '-v') {
                progressBar.startProgressBar("View", 50);

            }
        } else {
            console.log("must have the module option");
        }
    } else {
        console.log("must have the module name");
    }
}
function createController(name) {
    fileSystem.readFile(helper.getCurrentDirectoryBase()+'/ModuleBuilder/template/controller.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        var updatedDate = getUpdateData(data, name);
        fileSystem.writeFile(name.toLowerCase() + '.controller.js', updatedDate, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }

        function getUpdateData(data, name) {
            name = name.toLowerCase();
            var updatedList = data.replace(/controllerName/g, name + 'Controller');
            return updatedList;
        }
    }
}

function createRESTService(name, baseURL) {
    fileSystem.readFile('template/rest-service.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        var updatedDate = getUpdateData(data, name);
        fileSystem.writeFile(helper.getCurrentDirectoryBase() + '/' + name.toLowerCase() + '.rest.service.js', updatedDate, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }

        function getUpdateData(data, name) {
            var updatedList = data.replace(/serviceName/g, name.toLowerCase() + 'RestService');
            updatedList = updatedList.replace(/XXX/g, name);
            updatedList = updatedList.replace(/BASEURL/g, baseURL);
            return updatedList;
        }
    }
}
function createDirective(name) {
    fileSystem.readFile('template/directive.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        var updatedDate = getUpdateData(data, name);
        fileSystem.writeFile(helper.getCurrentDirectoryBase() + '/' + name.toLowerCase() + '.directive.js', updatedDate, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }

        function getUpdateData(data, name) {
            name = name.toLowerCase();
            var updatedList = data.replace(/directiveName/g, name);
            return updatedList;
        }
    }
}

function createService(name) {
    fileSystem.readFile('template/service.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        var updatedDate = getUpdateData(data, name);
        fileSystem.writeFile(helper.getCurrentDirectoryBase() + '/' + name.toLowerCase() + '.service.js', updatedDate, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }

        function getUpdateData(data, name) {
            name = name.toLowerCase();
            var updatedList = data.replace(/serviceName/g, name + 'Service');
            return updatedList;
        }
    }
}
function createFactory(name) {
    fileSystem.readFile('template/factory.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        var updatedDate = getUpdateData(data, name);
        fileSystem.writeFile(helper.getCurrentDirectoryBase() + '/' + name.toLowerCase() + '.factory.js', updatedDate, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }

        function getUpdateData(data, name) {
            name = name.toLowerCase();
            var updatedList = data.replace(/factoryName/g, name + 'Factory');
            return updatedList;
        }
    }
}