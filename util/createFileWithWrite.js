var fs = require('fs');

function readData(error, data)
{
	if(error) {
        return console.log(error);
    }
	fs.writeFile('controller.js',data,'utf8',writeData("misu"));
	console.log("The file was read!");    
	
}

function writeData(error)
{
	if(error) {
        return console.log(error);
    }
	console.log("The file was written!");
}
 
fs.readFile('template.txt','utf8', readData);	
	
	
	/*
fs.writeFile("text.js",controller, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); */