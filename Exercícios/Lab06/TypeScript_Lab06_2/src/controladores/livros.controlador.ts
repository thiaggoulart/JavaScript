import{Request, Response} from 'express';
import * as negocio from '../negocio/negocio';
import { NextFunction } from 'connect';


export async function getLivros(req: Request, res: Response, next: NextFunction) {
    try{
        const id = req.params.id;
        const livro = await negocio.consultarLivroPorId(id);
        if( livro === null){
            res.status(404).end();
        } else {
            const {titulo, autores} = livro;
            res.json({titulo,autores});
        }
    }catch(error){
        next(error);
    }
}