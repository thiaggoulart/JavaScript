import * as fs from 'fs';
/*
try{
    fs.writeFileSync('dados.txt','teste');
} catch (error) {
    console.log(`Erro: ${error.name} - ${error.message}`);
}
*/

/*
try{
    fs.writeFile('dados2.txt','mais um',(err) => {
        if(err !== null) {
            throw err;
        }
        console.log('arquivo escrito com sucesso!');
    });
    console.log('continuei a execução...');
} catch (error) {
    console.log(`Erro: ${error.name} - ${error.message}`);
}
*/

/*
fs.readFile('pessoa.json','utf-8',(erro,dados) => {
    if (erro !== null){
        console.log('Erro de leitura de arquivos');
    } else {
        try{
            const obj = JSON.parse(dados);
            console.log(obj);
        } catch {
            console.log('Arquivo Json inválido');
        }
    }
});
*/

function lerArquivoAsync (nomeArq: string): Promise<string>{
    return new Promise((resolve, reject)=>{
        try {
            let dados = fs.readFileSync(nomeArq, 'utf-8');
            resolve(dados);
        } catch(erro) {
            reject(erro);
        }
    });
}

/*
lerArquivoAsync('dado.txt').then(
    dados => console.log(dados),
    erro => console.log(erro)    
);
*/
/*
lerArquivoAsync('dado.txt')
.then(dados => console.log(dados))
.catch(erro => console.log(erro.message));
*/
(async () => {
    try{                 
        let dados = await lerArquivoAsync('dados.txt');
        console.log(dados);
    } catch(erro){
        console.log(erro.message);
    }
})();