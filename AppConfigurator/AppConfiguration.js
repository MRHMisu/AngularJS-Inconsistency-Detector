module.exports.getAppQuestion = getAppQuestion;

var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var inquirer = require('inquirer');
var argv = require('minimist')(process.argv.slice(2));
var progressBar = require('./projgressBar.js');

var routeAppCreator = require('../AppBuilder/routeAppCreator.js');
var restAppCreator= require('../AppBuilder/restAppCreator.js');


function getAppQuestion(selection) {
    if (selection.type === 1) {
        getEmptyMVCApplication(selection);
    } else if (selection.type === 2) {
        getSimpleRouteMVCAppConfiguration(selection);
    } else if (selection.type === 3) {
        getSimpleRestMVCApplication(selection);
    }
}

function getSimpleRouteMVCAppConfiguration(selection) {
    clear();
    console.log(chalk.blue.bold(figlet.textSync('Fantasia', {horizontalLayout: 'full'})));
    console.log(chalk.red.bold('Selected Application type:') + chalk.green.bold(selection.name));
    var questions = [
        {
            type: 'input',
            name: 'name',
            message: chalk.yellow.bold('Application Name : '),
            default: argv._[0],
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return chalk.red.bold('Please enter a name of the application');
                }
            }
        },
        {
            type: 'input',
            name: 'version',
            default: argv._[1] || "1.0.0",
            message: chalk.yellow.bold('Version(1.0.0): '),
            validate: function (value) {
                if (/^\d{1,2}\.\d{1,2}\.\d{1,2}$/.test(value)) {
                    return true;
                } else {
                    return chalk.red.bold('Please enter a valid version number');
                }
            }


        },
        {
            type: 'input',
            name: 'description',
            default: argv._[1] || null,
            message: chalk.yellow.bold('Description: ')
        },
        {
            type: 'input',
            name: 'author',
            default: argv._[1] || null,
            message: chalk.yellow.bold('Author: '),
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return chalk.red.bold('The application must have an author');
                }
            }
        },
        {
            type: 'input',
            name: 'license',
            default: argv._[1] || null,
            message: chalk.yellow.bold('License(ISG): ')
        },
        {
            type: 'input',
            name: 'gitHubRepo',
            default: argv._[1] || null,
            message: chalk.yellow.bold('GitHub Repository: ')
        },
        {
            type: 'list',
            name: 'routeConfigFile',
            message: chalk.yellow.bold('Select Dependencies(route):'),
            choices: [chalk.green('angular-route'), chalk.green('angular-ui-route')],
            default: 0
        }
    ];

    inquirer.prompt(questions).then(function (answers) {
        var data = {
            name: answers.name,
            version: answers.version,
            description: answers.description,
            author: answers.author,
            license: answers.license,
            gitHubRepo: answers.gitHubRepo,
            routeConfigFile: answers.routeConfigFile
        };
        progressBar.startProgressBar(200);
        routeAppCreator.createRouteApplication(data);

    });
}
function getSimpleRestMVCApplication(selection) {
    clear();
    console.log(chalk.blue.bold(figlet.textSync('Fantasia', {horizontalLayout: 'full'})));
    console.log(chalk.red.bold('Selected Application type:') + chalk.green.bold(selection.name));
    var questions = [
        {
            type: 'input',
            name: 'name',
            message: chalk.yellow.bold('Application Name : '),
            default: argv._[0],
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return chalk.red.bold('Please enter a name of the application');
                }
            }
        },
        {
            type: 'input',
            name: 'version',
            default: argv._[1] || "1.0.0",
            message: chalk.yellow.bold('Version(1.0.0): '),
            validate: function (value) {
                if (/^\d{1,2}\.\d{1,2}\.\d{1,2}$/.test(value)) {
                    return true;
                } else {
                    return chalk.red.bold('Please enter a valid version number');
                }
            }


        },
        {
            type: 'input',
            name: 'description',
            default: argv._[1] || null,
            message: chalk.yellow.bold('Description: ')
        },
        {
            type: 'input',
            name: 'author',
            default: argv._[1] || null,
            message: chalk.yellow.bold('Author: '),
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return chalk.red.bold('The application must have an author');
                }
            }
        },
        {
            type: 'input',
            name: 'license',
            default: argv._[1] || null,
            message: chalk.yellow.bold('License(ISG): ')
        },
        {
            type: 'input',
            name: 'gitHubRepo',
            default: argv._[1] || null,
            message: chalk.yellow.bold('GitHub Repository: ')
        },
        {
            type: 'input',
            name: 'restApiUrl',
            default: argv._[1] || null,
            message: chalk.yellow.bold('Rest API URL: '),
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return chalk.red.bold('Must have API URl');
                }
            }
        },
        {
            type: 'input',
            name: 'restModel',
            default: argv._[1] || null,
            message: chalk.yellow.bold('Rest Model Name(at least One): '),
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return chalk.red.bold('Must have Model');
                }
            }
        },
        {
            type: 'list',
            name: 'routeConfigFile',
            message: chalk.yellow.bold('Select Dependencies(route):'),
            choices: [chalk.green('angular-route'), chalk.green('angular-ui-route')],
            default: 0
        }
    ];

    inquirer.prompt(questions).then(function (answers) {
        var data = {
            name: answers.name,
            version: answers.version,
            description: answers.description,
            author: answers.author,
            license: answers.license,
            gitHubRepo: answers.gitHubRepo,
            restModel: answers.restModel,
            restApiUrl: answers.restApiUrl,
            routeConfigFile: answers.routeConfigFile
        };
        console.log(data.restApiUrl);
        console.log(data.restModel);
        progressBar.startProgressBar(200);
        restAppCreator.createRestApplication(data);
    });
}
function getEmptyMVCApplication(selection) {
    clear();
    console.log(chalk.blue.bold(figlet.textSync('Fantasia', {horizontalLayout: 'full'})));
    console.log(chalk.red.bold('Selected Application type:') + chalk.green.bold(selection.name));
    var questions = [
        {
            type: 'input',
            name: 'name',
            message: chalk.yellow.bold('Application Name : '),
            default: argv._[0],
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return chalk.red.bold('Please enter a name of the application');
                }
            }
        },
        {
            type: 'input',
            name: 'version',
            default: argv._[1] || null,
            message: chalk.yellow.bold('Version(1.0.0): '),
            validate: function (value) {
                if (/^\d{1,2}\.\d{1,2}\.\d{1,2}$/.test(value)) {
                    return true;
                } else {
                    return chalk.red.bold('Please enter a valid version number');
                }
            }


        },
        {
            type: 'input',
            name: 'description',
            default: argv._[1] || null,
            message: chalk.yellow.bold('Description: ')
        },
        {
            type: 'input',
            name: 'author',
            default: argv._[1] || null,
            message: chalk.yellow.bold('Author: '),
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return chalk.red.bold('The application must have an author');
                }
            }
        },
        {
            type: 'input',
            name: 'license',
            default: argv._[1] || null,
            message: chalk.yellow.bold('License(ISG): ')
        },
        {
            type: 'input',
            name: 'gitHubRepo',
            default: argv._[1] || null,
            message: chalk.yellow.bold('GitHub Repository: ')
        },
    ];

    inquirer.prompt(questions).then(function (answers) {
        var data = {
            name: answers.name,
            version: answers.version,
            description: answers.description,
            author: answers.author,
            license: answers.license,
            gitHubRepo: answers.gitHubRepo,
        };
        progressBar.startProgressBar(100);
    });

}

