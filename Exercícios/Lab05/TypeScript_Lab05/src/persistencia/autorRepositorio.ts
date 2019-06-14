import { Autor } from "../entidades/autor";
import { AutorModel } from "./autorModel";
import { DocumentQuery } from "mongoose";
import { ObjectID, ObjectId } from "bson";

export class AutorRepositorio {
    static async criar(autor: Autor): Promise<Autor> {
        let novoAutor = await AutorModel.create(autor);
        return novoAutor.save();
    }

    static async buscar(): Promise<Autor[]> {
        let consulta = AutorModel.find();
        return consulta.exec();
    }

    static async ultimoNome(nome: string): Promise<Autor[]> {
        let consulta = AutorModel.find().where('ultimo_nome').equals(nome);
        return consulta.exec();
    }

    static async primeiroNome(nome: string): Promise<Autor[]> {
        let consulta = AutorModel.find().where('primeiro_nome').equals(nome);
        return consulta.exec();
    }

    static async alterar(id: ObjectId, novoNome: string): Promise<Autor[]> {
        let consulta = AutorModel.updateOne({ _id: id }, { ultimo_nome: novoNome });
        return consulta.exec();
    }
}
