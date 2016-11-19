module.exports.createModule = createModule;
var fileSystem = require('fs');
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
                createController(moduleName);
            } else if (moduleOption === '-d') {
                createDirective(moduleName);
            } else if (moduleOption === '-f') {
                createFactory(moduleName);
            } else if (moduleOption === '-s') {
                createService(moduleName);
            } else if (moduleOption === '-rs') {
                if (additionalOption === '-u') {
                    if (baseURL) {
                        createRESTService(moduleName,baseURL);
                    } else {
                        console.log("must have the the base url");
                    }

                } else {
                    console.log("must have the the base url option");
                }

            }
            else if (moduleOption === '-v') {

            }
        } else {
            console.log("must have the module option");
        }
    } else {
        console.log("must have the module name");
    }
}


function createRESTService(name, baseURL) {
    fileSystem.readFile('template/rest-service.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        var updatedDate = getUpdateData(data, name);
        fileSystem.writeFile(__dirname + '/' + name.toLowerCase() + '.rest.service.js', updatedDate, 'utf8', writeData);
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
        fileSystem.writeFile(__dirname + '/' + name.toLowerCase() + '.directive.js', updatedDate, 'utf8', writeData);
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

function createController(name) {
    fileSystem.readFile('template/controller.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        var updatedDate = getUpdateData(data, name);
        fileSystem.writeFile(__dirname + '/' + name.toLowerCase() + '.controller.js', updatedDate, 'utf8', writeData);
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
function createService(name) {
    fileSystem.readFile('template/service.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        var updatedDate = getUpdateData(data, name);
        fileSystem.writeFile(__dirname + '/' + name.toLowerCase() + '.service.js', updatedDate, 'utf8', writeData);
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
        fileSystem.writeFile(__dirname + '/' + name.toLowerCase() + '.factory.js', updatedDate, 'utf8', writeData);
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