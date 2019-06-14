import {} from 'mongoose';
import {emprestimoModel} from '.emprestimoModel';
import {Emprestimo} from '../entidades/emprestimo';
import {LivroModel} from './livroModel';
import { Livro } from '../entidades/livro';
import { EmprestimoModel } from './emprestimoModel';

export class EmprestimoRepositorio{
    static async criar(emprestimo:Emprestimo): Promise<Emprestimo> {
        return EmprestimoModel.create(emprestimo);
    }

    static async buscar(): Promise<Livro[]>{
        return LivroModel.find().populate('autores', AutorModel).exec();
    }
    
    static async buscarPorAutor(id: ObjectId): Promise<Livro[]>{
        return LivroModel.find().populate('autores', AutorModel).where('autores').equals(id);
    }
}