import {Document, Schema, model, Model, connect} from 'mongoose';

interface Pessoa {
    nome: string,
    idade: number
}

interface PessoaDocument extends Pessoa, Document {}

const PessoaSchema = new Schema({
    nome: {type: String, required: true, minlength: 1, maxlength: 50},
    idade: {type: Number, required: true, minlength: 0}
});

const PessoaModel: Model<PessoaDocument> 
= model('Pessoa', PessoaSchema, 'pessoas');

async function Main() {
    try{
        const url = 'mongodb://localhost:27017/testemongoose';
        const cliente = await connect(url,{useNewUrlParser:true});
        console.log('Conectado com sucesso!');

        /*
        //Cria linha no banco
        const documento = await PessoaModel.create({nome: 'Novo', idade:10});
        let res = await documento.save();
        console.log(res);

        //Altera idade no banco
        documento.idade = 45;
        res = await documento.save();
        console.log(res);
        */

        //Busca todos os nomes no banco
        const consulta = PessoaModel.find();
        //const resultado = await consulta.lean().exec(); //retorna obj javascript sem processamento
        const resultado = await consulta.exec();
        resultado.forEach(p => console.log(p.nome));

        if(cliente && cliente.connection) {
            cliente.connection.close();
        }
    } catch(error){
        console.log('Erro: ');
        console.log(error);
    }
}

Main();