module.exports.startProgressBar = startProgressBar;
var ProgressBar = require('progress');
var colors = require('colors');

function startProgressBar(moduleType, tickInmiliSeconds) {
    var stringColour = ('Creating ' + moduleType + '[:bar] :percent :etas').red.bold;
    var progressBar = new ProgressBar(stringColour, {
        complete: '=',
        incomplete: ' ',
        width: 35,
        total: 50
    });
    var timer = setInterval(function () {
        progressBar.tick();
        if (progressBar.complete) {
            console.log((moduleType + ' has created successfully\n').green.bold);
            clearInterval(timer);
        }
    }, tickInmiliSeconds);

}

