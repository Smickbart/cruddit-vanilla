const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
	if(req.url == "/") {
		res	
		.writeHead(200, {"content-type": "text/html"})
		.end(fs.readFileSync("index.html", "utf8"));
	}
	if(req.url == "/index.js") {
		res
		.writeHead(200, {"content-type": "text/javascript"})
		.end(fs.readFileSync("index.js", "utf8"));
	}
	if(req.url == "/main.css") {
		res
		.writeHead(200, {"content-type": "text/css"})
		.end(fs.readFileSync("main.css", "utf8"));
	}
});

server.listen(3000, (err) => {
	if(err) {
		console.error(err);
	} else {
		console.log("Listening on port 3000.");
	}
});
