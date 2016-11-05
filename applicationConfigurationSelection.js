
    var chalk = require('chalk');
    var clear = require('clear');
    var figlet = require('figlet');
    var inquirer = require('inquirer');
    var argv = require('minimist')(process.argv.slice(2));
    var enumApplicationTemplate =
    {
        emptyApp: 'Empty MVC Application',
        mvcApp: 'Simple Route MVC Application',
        restApp: 'Simple REST MVC Application'
    }
    function getUserAppChoice() {
        clear();
        console.log(chalk.blue.bold(figlet.textSync('Fantasia', {horizontalLayout: 'full'})));
        var questions = [
            {
                type: 'list',
                name: 'appChoiceName',
                message: chalk.yellow.bold('Select application template:'),
                choices: [chalk.green(enumApplicationTemplate.emptyApp), chalk.green(enumApplicationTemplate.mvcApp), chalk.green(enumApplicationTemplate.restApp)],
                default: 0,
            }
        ];
        inquirer.prompt(questions).then(function (answers) {
            var choice = answers.appChoiceName;
            getChoice(choice);
        });
    }


    function getChoice(choice) {

        var enumApplicationRegExpression =
        {
            emptyApp: /Empty MVC Application/g,
            mvcApp: /Simple Route MVC Application/g,
            restApp: /Simple REST MVC Application/g
        }

        if (enumApplicationRegExpression.emptyApp.exec(choice)) {
            //console.log("OK-->" + choice);
            getSimpleRouteMVCAppConfiguration(choice);
        } else if (enumApplicationRegExpression.mvcApp) {
            //console.log("OK-->" + choice);
            getSimpleRouteMVCAppConfiguration(choice);
        } else if (enumApplicationRegExpression.restApp) {
            getSimpleRouteMVCAppConfiguration(choice);
            //console.log("OK-->" + choice);

        }

    }


    function getSimpleRouteMVCAppConfiguration(applicationType) {
        clear();
        console.log(chalk.blue.bold(figlet.textSync('Fantasia', {horizontalLayout: 'full'})));
        console.log(chalk.red.bold('Selected Application type:'+applicationType));
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
                message: chalk.yellow.bold('Version(1.0.0): ')
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
                message: chalk.yellow.bold('Author: ')
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
        });
    }

    module.exports.getUserAppChoice = getUserAppChoice;







