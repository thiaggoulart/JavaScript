import {connect, Schema, model} from 'mongoose';

async function Main() {
    try{
        const url = 'mongodb://localhost:27017/testemongoose';
        const cliente = await connect(url,{useNewUrlParser:true});
        console.log('Conectado com sucesso!');
       
        const pessoaEsquema = new Schema({
            nome: {type: String, required: true, minlength: 1, maxlength: 50},
            idade: {type: Number, required: true, minlength: 0}
        });
        const pessoaModelo = model('PessoaModel', pessoaEsquema, 'pessoas');

        if(cliente && cliente.connection) {
            cliente.connection.close();
        }
    } catch(error){
        console.log('Erro: ');
        console.log(error);
    }
}

Main();