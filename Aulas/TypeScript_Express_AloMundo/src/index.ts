//import express = require('express');
import express, { response } from 'express';
import bodyParser from 'body-parser';

const app = express();
 
//Habilitar um middleware
app.use(consoleLogger);
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send('Alô, Mundo!');
});

app.get('/alo/:nome', (request, response) => {
  console.log(request.params);
  response.send(`Alô, ${request.params.nome}`);
});

app.post('/alo',(request,response) => {
  console.log(request.body);
  let {nome} = request.body;
  if(!nome) {
    response.status(400).send('Objeto de requisição inválido');
  }
  response.send(`Alô ${nome}`);
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