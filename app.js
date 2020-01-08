const http = require('http');
const fs = require('fs');

const mimetypes = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'text/javascript',
    'png': 'image/png',
    'jpeg': 'image/jpeg',
    'jpg': 'image/jpg'
};

const server = http.createServer((request, response) => {
	const readStream = fs.createReadStream('./static/index.html');

	response.writeHead(200, {'Content-type': 'text/html'});
	readStream.pipe(response);

	// response.write('Hello world from Nodejs!');
	// response.end();
});

server.listen(3000);
console.log('Server is running at http://localhost:3000 on browser...');