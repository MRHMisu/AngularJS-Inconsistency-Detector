module.exports.getUserAppChoice = getUserAppChoice;

var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var inquirer = require('inquirer');
var argv = require('minimist')(process.argv.slice(2));
var enumApplicationTemplate =
{
    emptyApp: 'Empty MVC Application',
    mvcApp: 'Simple MVC Application',
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
        mvcApp: /Simple MVC Application/g,
        restApp: /Simple REST MVC Application/g
    }

    if (enumApplicationRegExpression.emptyApp.exec(choice)) {
        console.log("OK-->" + choice);
        //getSimpleRouteMVCAppConfiguration(choice);
    } else if (enumApplicationRegExpression.mvcApp) {
        console.log("OK-->" + choice);
        //getSimpleRouteMVCAppConfiguration(choice);
    } else if (enumApplicationRegExpression.restApp) {
        //getSimpleRouteMVCAppConfiguration(choice);
        console.log("OK-->" + choice);

    }

}