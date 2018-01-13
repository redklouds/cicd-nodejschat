var express = require("express");
var app = express();
var port = 3700;

//settings for view


app.get("/", function(req, res){
    res.send("it works!" + req);
});

var server = app.listen(port, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log(server.address());
	if(host =="::"){
		host = "localhost";
		console.log("localhost");
	}
	
	console.log("Listening at http://%s:%s", host, port);
	console.log("Press Ctrl+C to exit. . .");
});
