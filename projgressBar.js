/**
 * Created by MisuBeImp on 8/18/2016.
 */
var ProgressBar = require('progress');
var chalk = require('chalk');
//var bar = new ProgressBar(':bar', { total: 20 });
var timer = setInterval(function () {
    bar.tick();
    if (bar.complete) {
        console.log('Application created successfully\n');
        clearInterval(timer);
    }
}, 100);


var bar = new ProgressBar(chalk.green.bold(' creating application [:bar] :percent :etas'), {
    complete: '=',
    incomplete: ' ',
    width:35,
    total:50
});