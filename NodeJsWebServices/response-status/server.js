const http = require('http');


const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;


    const { url, method } = request;

    
    if(url === '/') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Ini adalah homepage</h1>');
        } 
        else {
            response.statusCode = 400;
            response.end(`<h1> halaman tidak dapat diakses dengan method ${method} request</h1>`);
        }    
    }   
    else if(url === '/about') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Ini adalah halaman about</h1>');
        } 
        else if(method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(`<h1>Halo, ${name} ini adalah halaman about</h1>`);
            });

        } 
        else {
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses menggunakan method ${method} request</h1>`);
        }
    }
    else {
        response.statusCode = 404;
        response.end('<h1>Halaman tidak ditemukan</h1>');
    }
}

const port = 5000;
const host = 'localhost';

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
})