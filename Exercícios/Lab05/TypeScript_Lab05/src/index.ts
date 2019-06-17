import {connect} from 'mongoose';
import {LivroRepositorio} from './persistencia/livroRepositorio';
import { AutorRepositorio } from './persistencia/autorRepositorio';
import { ObjectId } from 'bson';
import { emprestarLivro } from './persistencia/negocio/negocio';

async function main() {
    const url = 'mongodb://localhost:27017/biblioteca';
    try {
        const cliente = await connect(url, { useNewUrlParser: true });
        console.log('Conectado com sucesso');

        /*console.log('Adicionando autores...');
        let a1 = await AutorRepositorio.criar({primeiro_nome: 'John', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a1}`);
        let a2 = await AutorRepositorio.criar({primeiro_nome: 'Mary', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a2}`);*/
        
        /*console.log('Buscando autores...');
        let autores = await AutorRepositorio.buscar();
        autores.forEach(autor => console.log(autor));*/

        /*console.log('Buscando autores pelo último nome:');
        let autores = await AutorRepositorio.ultimoNome('Doe');
        autores.forEach(autor => console.log(autor));*/

        /*console.log('Buscando autores pelo primeiro nome:');
        let autores = await AutorRepositorio.primeiroNome('Mary');
        autores.forEach(autor => console.log(autor));*/

       /* console.log('Alterando último nome:');
        let autores = await AutorRepositorio.alterar(new ObjectId("5d03aac7b1c0391e7c4360d9"),'Goulart');
        console.log(autores);*/

        /*console.log('Adicionando Livro...');
        let l1 = await LivroRepositorio.criar({
            titulo: 'Node.js com TypeScript',
            autores: [a1,a2]
        });

        let l2 = await LivroRepositorio.criar({
            titulo: 'Outro livro',
            autores: []
        });
        console.log(l2);*/
        
        /*let l3 = await LivroRepositorio.criar({
            titulo: 'Outro livro',
            autores: [{primeiro_nome: 'Eu', ultimo_nome: 'Eu'}]
        });
        console.log(l3);*/

        /*console.log('Buscando livros...');
        let livros = await LivroRepositorio.buscar();
        livros.forEach(l => {
            console.log(`Autores: ${l.autores.map(a => a.primeiro_nome)}`);
        });*/

       /* console.log('Buscando livros...');
        let livros = await LivroRepositorio.buscarPorAutor(new ObjectId("5d03ddd3d9f3311f24d7ad85"));
        livros.forEach(l => {
            console.log(l.titulo);
        });*/

        console.log('Realizar empréstimos...');
        const emprestimo = await emprestarLivro('5d03ddd4d9f3311f24d7ad87');
        console.log(emprestimo);
        

        if (cliente && cliente.connection) {
            cliente.connection.close();
        }
    } catch (erro) {
        console.log(`Erro: ${erro.message}`);
    }
}

main();