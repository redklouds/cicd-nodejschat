window.onload = function(){
	var message = [];
	//var socket = io.connect('http://localhost:5000');//establish the socket IO connection with server
	//var socket = io.connect("http://192.168.99.101:5000")
	var socket = io.connect(window.location.host);
	console.log(window.location.host);
	console.log(socket);
	//var field = document.getElementById("field");
	var field = document.getElementsByClassName("field")[0];
	//var sendButton = document.getElementById("send");
	var sendButton = document.getElementsByClassName("send")[0];
	var content = document.getElementById("content");
    
    //get the name field.
    var name = document.getElementById('name');

	socket.on('message', function(data) {
		if(data.message){
			//push the data obkect to the message queue, this data object
            //has attributes defined such as
            // data.username
            // data.message
            message.push(data);
			var html = '';
			for(var i=0; i < message.length; i++){
                html += '<b>' + (message[i].username ? message[i].username
                :'Server') + ': </b>';
				//html += message[i].username;
                //html += message[i] + '<br />';
                html += message[i].message + "<br />";
                console.log(message[i]);
			}
			content.innerHTML = html;
		}else{
			console.log("There's a problem: %s", data);
		}
        console.log(data.username);
	});

	sendButton.onclick = function() {
        if(name.value == ""){
            //check if name field is empty
            alert("please type your name!");
        }else{
            //var text = field.value;
		    var text = field.value;
		    //socket.emit('send', {message:text });
	        socket.emit('send',{message:text, username: name.value});
            field.value = "";
        }
	};
}
