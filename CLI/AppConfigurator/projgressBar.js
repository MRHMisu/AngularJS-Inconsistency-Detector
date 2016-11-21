module.exports.startProgressBar=startProgressBar;
var ProgressBar = require('progress');
var colors = require('colors');

function startProgressBar(appName,tickInmiliSeconds)
{
    var stringColour='Creating application [:bar] :percent :etas'.blue.bold;
    var progressBar = new ProgressBar(stringColour, {
        complete: '=',
        incomplete: ' ',
        width:35,
        total:50
    });
    var timer = setInterval(function () {
        progressBar.tick();
        if (progressBar.complete) {
            console.log((appName + ' application has created successfully\n').green.bold);
            clearInterval(timer);
        }
    },tickInmiliSeconds);

}
