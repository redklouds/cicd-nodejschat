var express = require("express");
var app = express();
var port = 3700;

//settings for view
app.set('views', __dirname + '/templates');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);

//routes
app.get("/", function(req, res){
    res.send("it works!" + req);
});



//set up a static folder(like flask to send static front end webpages or files)
app.use(express.static(__dirname + '/public')); // the __dirnam states the current root directory




var io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection', function(socket){
	socket.emit('message', {message: "welcome to the chat"});
	socket.on('send', function(data){
		io.sockets.emit('message',data);
	});
});
/*
//main server entry 
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

*/
