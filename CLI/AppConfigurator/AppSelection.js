module.exports.getUserAppChoice = getUserAppChoice;

var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var inquirer = require('inquirer');
var argv = require('minimist')(process.argv.slice(2));

var configurator=require('./AppConfiguration');
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
        var selection=getChoice(choice);
        configurator.getAppQuestion(selection);
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
        return {name: 'Empty MVC Application', type: 1};
    } else if (enumApplicationRegExpression.mvcApp.exec(choice)) {
        return {name: 'Simple MVC Application', type: 2};
    } else if (enumApplicationRegExpression.restApp.exec(choice)) {
        return {name: 'Simple REST MVC Application', type: 3};
    }

}