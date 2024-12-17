const http = require('http');
const hostname = process.env.NODE_ENV !== 'production' ? 'localhost' : 'localhost';

const port = 3000;
const requestHandler = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('Hello, world!\n');
};

const server = http.createServer(requestHandler);
server.listen(port, hostname, () => {
    console.log(`Server berjalan pada http://${hostname}:${port}/`);
})


