const http = require('http');

http.createServer((Request, Response) => {
        Response.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Juan Ramon',
            edad: '34',
            url: Request.url
        };

        Response.write(JSON.stringify(salida));

        Response.end();
    })
    .listen(8080);

console.log('Escuchando el Puerto 8080');