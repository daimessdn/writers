const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
	const readStream = fs.createReadStream('./static/index.html');

	response.writeHead(200, {'Content-type': 'text/html'});
	readStream.pipe(response);

	// response.write('Hello world from Nodejs!');
	// response.end();
});

server.listen(port, () =>{
	console.log('Server is running at port' + port + ' on your browser...');	
});
