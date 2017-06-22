var http = require('http');
var fs = require('fs');
var url = require('url');

getServer();
function getServer()
{
    var portNumber =7777;
    createServer(portNumber);
}

function createServer(portNumber){
    http.createServer( function (request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        fs.readFile(pathname.substr(1), function (err, data) {
            if (err) {
                console.log(err);

                response.writeHead(404, {'Content-Type': 'text/html'});
            }else{
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data.toString());
            }
            response.end();
        });
    }).listen(portNumber);
        console.log('Server running at localhost:'+portNumber+'/');
    }




