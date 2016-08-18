/**
 * Created by MisuBeImp on 8/18/2016.
 */
var ProgressBar = require('progress');
var chalk = require('chalk');
function startProgressBar()
{
    var progressBar = new ProgressBar(chalk.red.bold('Creating application [:bar] :percent :etas'), {
        complete: '=',
        incomplete: ' ',
        width:35,
        total:50
    });
    var timer = setInterval(function () {
        progressBar.tick();
        if (progressBar.complete) {
            console.log(chalk.green.bold('Application created successfully\n'));
            clearInterval(timer);
        }
    }, 100);

}
module.exports.startProgressBar=startProgressBar;


