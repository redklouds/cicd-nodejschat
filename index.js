var express = require("express");
var app = express();
var port = 5000;
var os = require('os');
//settings for view
app.set('views', __dirname + '/templates');
app.set('view engine', "pug");
app.engine('pug', require('pug').__express);

//routes
app.get("/", function(req, res){
    console.log("we have a new connection..");
    res.render("page",{hostName: os.hostname()});//just like render_template('page.html') in python
});

app.get("/hello",function(req, res){
	res.render("hello", {title: 'hey', message:'this is the hello route'});
});





//set up a static folder(like flask to send static front end webpages or files)
app.use(express.static(__dirname + '/public')); // the __dirnam states the current root directory
//access with lydanny.com:port/fileInpublic folder
//so lydanny.com:5000/chat.js server the chat js file if we want other files or
//diret have have that here
app.use(express.static(__dirname + '/static')); //open up PUBLIC access to
//this directory.



var io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection', function(socket){
	console.log('new connection...');
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
