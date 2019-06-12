import {MongoClient, Db, Cursor} from 'mongodb';

async function Main() {
    const url = 'mongodb://localhost:27017/teste';
    try{
        const cliente: MongoClient = await MongoClient.connect(url, {useNewUrlParser:true});
        console.log('Conectado com sucesso!');
        const banco: Db = cliente.db('teste');

        //inserir documento
        /*const umaPessoa = {nome: 'Teste', idade:22};
        const resultIns = await banco.collection('pessoas').insertOne(umaPessoa);
        console.log(`Inserido: ${resultIns.insertedId}`);*/

        //Consultar documentos
        /*const cursor: Cursor = banco. collection('pessoas').find({idade:{$gt:25}});
        while(await cursor.hasNext()){
            const documento = await cursor.next();
            console.log(documento.nome);
        }*/

        //Alterar documento
        /*const resultAlt = await banco.collection('pessoas').updateOne({nome:'Teste'},{$set:{idade:50}});
        console.log(`Alteração: ${resultAlt.modifiedCount}`);*/

        //Deletar documento
        const resultRem = await banco.collection('pessoas').deleteOne({nome:'Teste'});
        console.log(`Remoção:${resultRem.deletedCount}`);
        

        await cliente.close();
    } catch (erro) {
        console.log('Erro de acesso ao BD: ');
        console.log(erro);
    }
}

Main()