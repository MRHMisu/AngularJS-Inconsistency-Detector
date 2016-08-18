/**
 * Created by MisuBeImp on 8/18/2016.
 */
var lineReader = require('readline').createInterface(process.stdin, process.stdout);
var promptsProperties = ['applicationName', 'version', 'author'];
var index = 0;
var data = {};

var applicationProperties=['Application Name','Version','Author'];


var getUserInput = function() {
    lineReader.setPrompt(applicationProperties[index] + '> ');
    lineReader.prompt();
    index++;
};

getUserInput();

lineReader.on('line', function(line) {
    data[promptsProperties[index - 1]] = line;
    if(index === promptsProperties.length) {
        return lineReader.close();
    }
    getUserInput();
}).on('close', function() {
    if(data[0]=="")
    {
        require('fs').writeFileSync('info.json', JSON.stringify(data));
        console.log('File Saved.');
        process.exit(0);
    }
    console.log("Invalid Input")
});