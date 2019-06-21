import{Request, Response, Router} from 'express';
import * as controlador from '../controladores/livros.controlador'

export const router = Router();
export const path = '/livros';

router.get('',controlador.getLivros);
router.get('/:id',controlador.getLivros);