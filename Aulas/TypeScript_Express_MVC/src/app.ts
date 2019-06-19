import express from 'express';
import * as aloRotas from './alo.rotas'

const app = express();
app.use('/', aloRotas.router);

export default app;