import {} from 'mongoose';
import {EmprestimoModel} from './emprestimoModel';
import {Emprestimo} from '../entidades/emprestimo';

export class EmprestimoRepositorio{
    static async criar(emprestimo:Emprestimo): Promise<Emprestimo> {
        return EmprestimoModel.create(emprestimo);
    }

    static async buscar(): Promise<Emprestimo[]>{
        return EmprestimoModel.find().exec();
    }
}