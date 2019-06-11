import * as fs from 'fs';
import {Cofrinho, Moeda} from './entidades';
import {promises} from 'fs'

const fsp = promises; 

export function salvarCofre( cofre: Cofrinho, nomeArq: string): void {
    const json = JSON.stringify(cofre);
    fs.writeFile(nomeArq,json, erro => {
        if(erro) {
            throw erro;
        }
    });
}

/*export function lerCofre(nomeArq: string, callback: (erro: Error|null, dados?: Cofrinho) => void): void{
    return fs.readFile(nomeArq,'utf-8', (erro, dados) => {
        if (erro){
               callback(erro);
        }
        try{
            const obj = JSON.parse(dados);
            const cofre = new Cofrinho ();
            for(let i=0; i<obj._moedas.length; i++) {
                cofre.adicionar(new Moeda(obj._moedas[i]._valor,obj._moedas[i]._nome))
            }
        } catch (e){
            callback (e)
        }
    });
} errado pq não é async*/

export async function lerCofreAsync(nomeArq: string): Promise<Cofrinho> {
    return fsp.readFile(nomeArq, 'utf-8')
    .then(
        dados => JSON.parse(dados)
    )
    .then(
        obj => {
            const cofre = new Cofrinho ();
            for(let i=0; i<obj.moedas.length; i++) {
                cofre.adicionar(new Moeda(obj.moedas[i]._valor, obj.moedas[i]._nome));
            }
            return cofre;
        }
    );
}      

export async function lerCofreAsyncAwait (nomeArq:string): Promise<Cofrinho> {
    const dados = await fsp.readFile(nomeArq, 'utf-8');
    try {
        const obj = JSON.parse(dados);
        const cofre = new Cofrinho ();
            for(let i=0; i<obj.moedas.length; i++) {
                cofre.adicionar(new Moeda(obj.moedas[i]._valor, obj.moedas[i]._nome));
            }
            return cofre;
    } catch (erro) {
        throw erro;
    }
}