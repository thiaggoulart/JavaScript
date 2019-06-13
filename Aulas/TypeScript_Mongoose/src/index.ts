import {connect, Schema, model} from 'mongoose';

async function Main() {
    try{
        const url = 'mongodb://localhost:27017/testemongoose';
        const cliente = await connect(url,{useNewUrlParser:true});
        console.log('Conectado com sucesso!');
       
        //Definir Schema e Model
        const pessoaEsquema = new Schema({ //linha do bonco que irá mexer
            nome: {type: String, required: true, minlength: 1, maxlength: 50},
            idade: {type: Number, required: true, minlength: 0}
        });
        const pessoaModelo = model('PessoaModel', pessoaEsquema, 'pessoas'); //contem os métodos do banco

        /*
        //Inserir documento
        const pessoaDocumento = new pessoaModelo({nome: 'John Doe', idade:22});
        const documentoInserido = await pessoaDocumento.save(); //insere um documento no banco
        console.log(`Inserido`);
        console.log(documentoInserido);
        */

        /*
        //Consultar documentos
        //const consulta = pessoaModelo.find(); //consulta todo mundo
        const consulta = pessoaModelo.where('idade').lt(30).sort('idade'); //consulta pessas com idade menor que 30
        const resultado = await consulta.exec();
        console.log(resultado);
        */

        /*
        //Alterar documento
        const documentoPessoa = await pessoaModelo.findById('5d02905a9bbb611fe88afa16').exec();
        console.log(documentoPessoa);
        documentoPessoa!.set('idade',23); //muda idade para 23 *obs: tem que falar para ele que pode ser null
        console.log(documentoPessoa);
        await documentoPessoa!.save();
        */

        //Remover documento
        const documentoPessoa = await pessoaModelo.findById('5d02905a9bbb611fe88afa16');
        await documentoPessoa!.remove(); //remove um documento do banco

        if(cliente && cliente.connection) {
            cliente.connection.close();
        }
    } catch(error){
        console.log('Erro: ');
        console.log(error);
    }
}

Main();