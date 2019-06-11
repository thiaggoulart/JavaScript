/*1. Retome o exemplo dos objetos Cofrinho e Moeda. Realize as seguintes tarefas:
a) Crie um módulo em um arquivo chamado “entidades”para conter as definições das
classes Cofrinho e Moeda e exporte suas definições.
b) Crie um módulo em um arquivo chamado “persistência” para conter o código de
funções para ler e escrever o conteúdo do Cofrinho em arquivos texto serializados
no formato JSON. Nomeie as funções como salvarCofrinho(Cofrinho,nomeArquivo)
e lerCofrinho(nomeArquivo). Utilize o mecanismo de tratamento de exceções e 
caso encontre uma falha na leitura ou escrita do arquivo, lance um novo tipo de
exceção chamada PersistenciaErro.
c) Crie um arquivo chamado “index.ts” que cria um novo cofre, adiciona diversas
moedas nele, salva um arquivo e depois lê o arquivo e informa no console o 
conteúdo do arquivo.*/

import {Cofrinho, Moeda} from "./entidades";
import{salvarCofre, lerCofre} from "./persistencia";

function main() {
    const cofre = new Cofrinho;
    lerCofre('meuCofrinho.json')
    .then(cofre => console.log(cofre.calcularTotal()))
    .catch(erro => {
        console.log('Erro de escrita do arquivo: ');
        console.log(erro);
    });
}

main();