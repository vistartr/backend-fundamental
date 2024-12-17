const http = require('http')

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    
    // const method = request.method;

    //cara yang lebih clean
    const { method } = request;

    if(method === 'GET') {
        //Response ketika get
        response.end('<h1>Hai!</h1>');
    }

    
    if(method === 'POST') {
        //Response ketika post
        response.end('<h1>Hai Bubub Sayang!</h1>');
    }


    if(method === 'PUT') {
        //Response ketika put
        response.end('<h1>Hai Bubub Cinta</h1>');
    }


    if(method === 'DELETE') {
        //Response ketika delete
        response.end('<h1>Hai Bubub Hasian!</h1>');
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
})


