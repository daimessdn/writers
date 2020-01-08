var http = require('http');
var fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    const readStream = fs.createReadStream('./static/index.html');
    response.writeHead(200, {'Content-type' : 'text/html'});

    readStream.pipe(response);
    }
);

server.listen(port, () => {
    console.log(`Server is running on port 3000 on your browser.`);
});
