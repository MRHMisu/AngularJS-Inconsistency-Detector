/**
 * Created by MisuBeImp on 8/18/2016.
 */
var ProgressBar = require('progress');
var colors = require('colors');

function startProgressBar()
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
            console.log('Application created successfully\n'.green.bold);
            clearInterval(timer);
        }
    }, 100);

}
module.exports.startProgressBar=startProgressBar;


