import * as fs from 'fs';
import {Moeda} from './entidades';
import {Cofrinho} from './entidades';


/*try{
    fs.writeFile('dados2.txt','mais um',(err) => {
        if(err !== null) {
            throw err;
        }
        console.log('arquivo escrito com sucesso!');
    });
    console.log('continuei a execução...');
} catch (error) {
    console.log(`Erro: ${error.name} - ${error.message}`);
}*/


/*(async () => {
    try{                 
        let dados = await lerArquivoAsync('dados.txt');
        console.log(dados);
    } catch(erro){
        console.log(erro.message);
    }
})();*/

async function salvarCofrinho(Cofre: Cofrinho,nomeArq: string): string{
    try{
        let dados = await fs.
    }
}