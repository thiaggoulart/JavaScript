import {} from 'mongoose';
import {LivroModel} from './livroModel';
import { Livro } from '../entidades/livro';
import { AutorModel } from './autorModel';
import { ObjectId } from 'bson';

export class LivroRepositorio{
    static async criar(livro:Livro): Promise<Livro> {
        return LivroModel.create(livro);
    }

    static async buscar(): Promise<Livro[]>{
        return LivroModel.find().populate('autores', AutorModel).exec();
    }
    
    static async buscarPorAutor(id: ObjectId): Promise<Livro[]>{
        return LivroModel.find().populate('autores', AutorModel).where('autores').equals(id);
    }

    static async buscarPorId(id: string): Promise<Livro|null>{
        return LivroModel.findById(id).exec();
    }
}