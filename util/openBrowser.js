/**
 * Created by MisuBeImp on 8/18/2016.
 */


var server=require('./server.js');
server.getServer();
var opener = require('opener');
opener('http://localhost:7777');


