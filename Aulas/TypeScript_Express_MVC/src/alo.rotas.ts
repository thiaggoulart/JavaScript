import * as aloControlador from "./alo.controlador";
import {Router} from 'express';

export const router = Router();
const path = '/alo';
router.get(path, aloControlador.getAlo);
router.get(`${path}/erro`, aloControlador.getAloErro);
router.get(`${path}/:nome`,aloControlador.getAloComNome);