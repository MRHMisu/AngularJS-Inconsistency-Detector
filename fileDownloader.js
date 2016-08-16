var http = require('http');
var fs = require('fs');
function getDownloadedFile(url,fileName)
{
    var file = fs.createWriteStream(fileName);
    var request = http.get(url, function(response) {
        response.pipe(file);
    });
    return file;
}

module.exports.getDownloadedFile=getDownloadedFile;
