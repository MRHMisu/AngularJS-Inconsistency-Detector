/**
 * Created by MisuBeImp on 8/18/2016.
 */

var chalk = require('chalk');
var figlet = require('figlet');

var progressBar=require('./projgressBar.js');
var lineReader = require('readline').createInterface(process.stdin, process.stdout);
var promptsProperties = ['name', 'version', 'description','author','license','github'];
var index = 0;
var package = {};

var applicationProperties=['Application Name','Version(1.0.0)','Description','Author','License','Git Repository'];

var getUserInput = function() {
    lineReader.setPrompt(chalk.red.bold('>> '+applicationProperties[index] + ': '));
    lineReader.prompt();
    index++;
};

console.log(chalk.blue(figlet.textSync('Fantasia', { horizontalLayout: 'full' })));
getUserInput();
lineReader.on('line', function(line) {
    package[promptsProperties[index - 1]] = line;
    if(index === promptsProperties.length) {
        return lineReader.close();
    }
    getUserInput();
}).on('close', function() {
        require('fs').writeFileSync('info.json', JSON.stringify(package));
        progressBar.startProgressBar();
        //console.log('File Saved.');
        //process.exit(0);
});