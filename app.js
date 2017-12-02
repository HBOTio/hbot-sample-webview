const bodyParser = require('body-parser');
const express = require('express');
const request = require('request');
const app = express();

const BROADCAST_API_TOKEN = "01b5d71e-c2fc-4664-8061-b35451e42c3c"
const ENDPOINT = "https://hbotconnect.unicornonzen.com/api/sendmessage/?accessToken=";

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});

app.get('/', (req, res) => {
	res.sendFile('index.html');
});

app.post('/api/text', (req, res) => {
	const user = req.body.user;
	const message = req.body.message;	
	sendText([user], message);

	res.sendStatus(200);
});



function sendText(users, message) {
	const data = {
		to: users,
		msg_type: "text",
		msg: message
	};

	sendRequest(data);
}

function sendImage(users, image) {
	const data = {
		to: users,
		msg_type: "image",
		msg: image
	};

	sendRequest(data);
}

function sendAudio(users, audio) {
	const data = {
		to: users,
		msg_type: "audio",
		msg: audio
	};

	sendRequest(data);
}

function sendFile(users, file) {
	const data = {
		to: users,
		msg_type: "file",
		msg: file
	};

	sendRequest(data);
}

function sendCarouselSample(users) {
	let carousel = {
		"title": "Title",
		"subtitle": "Subtitle",
		"image_url": "https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-1/p50x50/24174158_745710642297764_706246064037500222_n.png?oh=612a0ee2f96704da402414ff351bc1f3&oe=5A98A944",
		"buttons": [{
				"title": "Open Google",
				"type": "web_url",
				"url": "https://www.google.com",
				"webview_height_ratio": "tall"
			}
		]
	}

	const data = {
		to: users,
		msg_type: "carousel",
		msg: [carousel]
	};

	sendRequest(data);
}

function sendSetAttributesSample(users, attrs) {
	const data = {
		to: users,
		msg_type: "carousel",
		msg: [{
      "attr_name": "abc",
      "attr_value": "123"
    }]
	};

	sendRequest(data);
}

function sendRequest(data) {
	const options = {
		uri: ENDPOINT + BROADCAST_API_TOKEN,
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		json: data
	}
	
	request(options, function(error, response, body) {
		if (!error) {
			console.log("SEND");
		} else {
			console.error("ERROR: " + error);	
		}
	});
}




app.listen(3000, () => console.log('Example webview listening on port 3000!'))
