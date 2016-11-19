(function () {
    var fileSystem = require('fs');
    directoryList = ['controllers', 'services', 'directives', 'i18n', 'style', 'lib', 'images', 'views', 'factory', 'util',];

    createApp();
    function createApp() {
        var name = process.argv[2];
        if (name != 'undefined' ||name != ''|| name !=null ) {
            createDirectoryStructure(name, driectoryList);
            createFileForDifferentModules(name);
            console.log(name + " Angular application is created successfully");
        }else
        {
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
        writeDataOnControllerFile(appName);
        writeDataOnServiceFile(appName);
        writeDataOnConfigurationFile(appName);
        putAngularLibraryFile(appName);
        putRoutingLibraryFile(appName);
        writeDataOnIndexFile(appName);
        writeDataOnPartialView(appName);
        writeServerFile(appName);
        runServerAndOpenBrowser(appName);
    }

    function writeDataOnControllerFile(appName) {
        fileSystem.readFile('template/app/simple-route-mvc-app/controller.txt', 'utf8', readData);
        function readData(error, data) {
            if (error) {
                return console.log(error);
            }
            var updatedDate = getUpdateData(data, appName);
            fileSystem.writeFile(__dirname + '/' + appName + '/' + 'controllers/' + appName.toLowerCase() + '.controller.js', updatedDate, 'utf8', writeData);
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
	
	function writeDataOnServiceFile(appName)
	{
        fileSystem.readFile('template/app/simple-route-mvc-app/service.txt', 'utf8', readData);
        function readData(error, data) {
            if (error) {
                return console.log(error);
            }
            var updatedDate = getUpdateData(data, appName);
            fileSystem.writeFile(__dirname + '/' + appName + '/' + 'services/' + appName.toLowerCase() + '.service.js', updatedDate, 'utf8', writeData);
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


    function writeDataOnConfigurationFile(appName)
    {
        fileSystem.readFile('template/app/simple-route-mvc-app/ui-route.txt', 'utf8', readData);
        function readData(error, data) {
            if (error) {
                return console.log(error);
            }
            var updatedDate = getUpdateData(data, appName);
            fileSystem.writeFile(__dirname + '/' + appName + '/'+ appName.toLowerCase() + '.config.js', updatedDate, 'utf8', writeData);
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
    function putAngularLibraryFile(appName)
    {

        fileSystem.readFile('template/resource/angular.min.js', 'utf8', readData);
        function readData(error, data) {
            if (error) {
                return console.log(error);
            }
            fileSystem.writeFile(__dirname + '/' + appName + '/lib/'+'angular.min.js', data, 'utf8', writeData);
            function writeData(error) {
                if (error) {
                    return console.log(error);
                }
            }
        }


    }

    function putRoutingLibraryFile(appName)
    {
        fileSystem.readFile('template/resource/angular-ui-router.js', 'utf8', readData);
        function readData(error, data) {
            if (error) {
                return console.log(error);
            }
            fileSystem.writeFile(__dirname + '/' + appName + '/lib/'+'angular-ui-router.js', data, 'utf8', writeData);
            function writeData(error) {
                if (error) {
                    return console.log(error);
                }
            }
        }

    }


    function writeDataOnIndexFile(appName)
    {

        fileSystem.readFile('template/app/simple-route-mvc-app/index-ui-route.txt', 'utf8', readData);
        function readData(error, data) {
            if (error) {
                return console.log(error);
            }
            var updatedDate = getUpdateData(data, appName);
            fileSystem.writeFile(__dirname + '/' + appName + '/'+ 'index.html', updatedDate, 'utf8', writeData);
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

    function writeDataOnPartialView(appName)
    {
        fileSystem.readFile('template/app/simple-route-mvc-app/view.txt', 'utf8', readData);
        function readData(error, data) {
            if (error) {
                return console.log(error);
            }
            fileSystem.writeFile(__dirname + '/' + appName + '/' + 'views/' + appName.toLowerCase() + '.view.html', data, 'utf8', writeData);
            function writeData(error) {
                if (error) {
                    return console.log(error);
                }
            }
        }

    }

    function writeServerFile(appName)
    {

        fileSystem.readFile('template/app/server.txt', 'utf8', readData);
        function readData(error, data) {
            if (error) {
                return console.log(error);
            }
            fileSystem.writeFile(__dirname + '/' + appName+'/'+'server.js', data, 'utf8', writeData);
            function writeData(error) {
                if (error) {
                    return console.log(error);
                }
            }
        }
    }


    function writeDataOnFactoryFile()
    {



    }

    function runServerAndOpenBrowser(appName)
    {
        var serverPath=__dirname + '/' + appName + '/'+'server.bat';
        //var child_process = require('child_process');

        /*child_process.exec(serverPath, function(error, stdout, stderr) {
            console.log(stdout);
        });*/

       /* var execFile = require('child_process').execFile;
        execFile(serverPath,[],function(error, stdout, stderr) {
            // command output is in stdout
        });*/

       /* var exec = require('child_process').exec;
        var cmd = serverPath;

        exec(cmd, function(error, stdout, stderr) {
            // command output is in stdout
            console.log(stdout);
        });*/

       /* const execFile = require('child_process').execFile;
        const child = execFile('http-server',['-d'], function(error, stdout, stderr){
                if (error) {
                    throw error;
                }
                console.log(__dirname);
                console.log(stdout);
    });*/
        /*function run_cmd(cmd, args, callBack ) {
            var exec = require('child_process').exec;
            var child = exec(cmd, args);
            var resp = "";

            child.stdout.on('data', function (buffer) { resp += buffer.toString() });
            child.stdout.on('end', function() { callBack (resp) });
        }

        run_cmd(appName+"/server.bat", [], function(text) { console.log (text) })
        console.log(__dirname);
*/
       /* var opener = require('opener');
        opener("http://localhost:9090/index.html#/home");*/
    }



})();






