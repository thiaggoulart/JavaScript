import { Emprestimo } from "../../entidades/emprestimo";
import { LivroRepositorio } from "../livroRepositorio";
import { EmprestimoRepositorio } from "../emprestimoRepositorio";

export async function emprestarLivro(idLivro: string): Promise<Emprestimo>{
    const umLivro = await LivroRepositorio.buscarPorId(idLivro);
    if(umLivro!== null){

        let emprestimo: Emprestimo = {
            livro : umLivro,
            dataRetirada : new Date(Date.now()),
            dataEntrega : new Date(Date.now()+7*24*60*60*1000) 
        };
        return await EmprestimoRepositorio.criar(emprestimo)
    } else {
        throw new Error ('Livro não encontrado');
    }
}