(function () {
    var fileSystem = require('fs');
    driectoryList = ['controllers', 'services', 'directives', 'i18n', 'style', 'lib', 'images', 'views', 'factory', 'util',];

    createApp();
    function createApp() {
        var name = process.argv[2];
        if (name != 'undefined') {


            createDirectoryStructure(name, driectoryList);
            createConfigFiles(name);
            createFileForDifferentModules(name);

        }
        console.log(name + " Angular application is created successfully");
    }


    function createConfigFiles(appName) {
        fileSystem.writeFile(__dirname + '/' + appName + '/' + appName + '.config' + '.js', 'nothing', 'utf8', writeDataOnConfigFile);
        fileSystem.writeFile(__dirname + '/' + appName + '/' + appName + '.html', 'nothing', 'utf8', writeDataOnConfigFile);

    }

    function writeDataOnConfigFile(error) {
        if (error) {
            return console.log(error);
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
    }

    function writeDataOnControllerFile(appName) {
        fileSystem.readFile('template/controllerTemplate.txt', 'utf8', readData);
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
                var updatedList = data.replace('moduelName', appName).replace('controllerName', appName + 'Controller').replace('serviceName', appName + 'Service').replace('factoryName', appName + 'Factory');
                updatedList = updatedList.replace("['serviceName','factoryName']", '[' + appName + 'Service' + ',' + appName + 'Factory' + ']');
                return updatedList;
            }
        }
    }
	
	function writeDataOnServiceFile(appName)
	{
        fileSystem.readFile('template/serviceTemplate.txt', 'utf8', readData);
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


    function writeDataOnFactoryFile()
    {



    }
    function writeDataOnIndexFile()
    {



    }

})();






