window.onload = function(){
	var message = [];
	var socket = io.connect('http://localhost:3700');//establish the socket IO connection with server
	//var field = document.getElementById("field");
	var field = document.getElementsByClassName("field")[0];
	//var sendButton = document.getElementById("send");
	var sendButton = document.getElementsByClassName("send")[0];
	var content = document.getElementById("content");

	socket.on('message', function(data) {
		if(data.message){
			message.push(data.message);
			var html = '';
			for(var i=0; i < message.length; i++){
				html += message[i] + '<br />';
			}
			content.innerHTML = html;
		}else{
			console.log("There's a problem: %s", data);
		}
	});

	sendButton.onclick = function() {
		var text = field.value;
		socket.emit('send', {message:text });
	
	};
}
