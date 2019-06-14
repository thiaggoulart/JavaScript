import {connect} from 'mongoose';
import { AutorRepositorio } from './persistencia/autorRepositorio';
import { ObjectId } from 'bson';

async function main() {
    const url = 'mongodb://localhost:27017/biblioteca';
    try {
        const cliente = await connect(url, { useNewUrlParser: true });
        console.log('Conectado com sucesso');

        /*console.log('Adicionando autores...');
        let a1 = await AutorRepositorio.criar({primeiro_nome: 'John', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a1}`);
        let a2 = await AutorRepositorio.criar({primeiro_nome: 'Mary', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a2}`);
        
        console.log('Buscando autores...');
        let autores = await AutorRepositorio.buscar();
        autores.forEach(autor => console.log(autor));*/

        /*console.log('Buscando autores pelo último nome:');
        let autores = await AutorRepositorio.ultimoNome('Doe');
        autores.forEach(autor => console.log(autor));*/

        /*console.log('Buscando autores pelo primeiro nome:');
        let autores = await AutorRepositorio.primeiroNome('Mary');
        autores.forEach(autor => console.log(autor));*/

        console.log('Alterando último nome:');
        let autores = await AutorRepositorio.alterar(new ObjectId("5d03aac7b1c0391e7c4360d9"),'Goulart');
        console.log(autores);
        

        if (cliente && cliente.connection) {
            cliente.connection.close();
        }
    } catch (erro) {
        console.log(`Erro: ${erro.message}`);
    }
}

main();