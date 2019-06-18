//import express = require('express');
import express from 'express';

const app = express();
 
//Habilitar um middleware
app.use(consoleLogger);


app.get('/', (request, response) => {
  response.send('Alô, Mundo!');
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Express na porta ${PORT}`);
});

//Introduzir o exemplo de um middleware
function consoleLogger(request: express.Request, response: express.Response, next: express.NextFunction) {
  console.log(`${request.method} ${request.path}`);
  next();
}