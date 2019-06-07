class Pessoa {
    nome: string;
    idade: number;

    constructor(n:string, i:number) {
        this.nome = n;
        this.idade = i;
    }
}/*

let p1: Pessoa;
p1 = new Pessoa('John Doe', 22);
console.log(p1);
p1.idade = 30;
console.log(p1);

class PessoaV2{
    readonly nome: string;
    readonly idade: number;

    constructor(n:string, i:number) {
        this.nome = n;
        this.idade = i;
    }
}

let p2: PessoaV2;
p2 = new PessoaV2('John Doe', 22);
//p2.idade = 30;
console.log(p2);

class PessoaV3 {
    constructor(
        private nome: string,
        private _idade: number
    ){
    }

    toString(): string {
        return `[nome=${this.nome}, idade=${this._idade}]`;
    }

    getNome(): string {
        return this.nome;
    }

    get idade(): number {
        return this._idade;
    }

    set idade(n: number) {
        this._idade = n;
    }
}

let p3 = new PessoaV3('John Doe', 22);
console.log(p3.toString());
console.log(p3.getNome());
p3.idade = 30;
console.log(p3.idade);

//TypeScript tem "tipo estruturais"
let umaPessoa: Pessoa = new Pessoa('John Doe', 22);
let outraPessoa: PessoaV2 = umaPessoa;
console.log(outraPessoa);

class Produto {
    constructor(
        private _nome: string,
        private _preco: number
    ){}
    get nome(): string {
        return this._nome;
    }
    get preco(): number {
        return this._preco;
    }
    set preco(p:number) {
        this._preco = p;
    }
    toString(): string {
        return `[nome =${this._nome}, preço=${this._preco}]`;
    }
}

class ProdutoPerecivel extends Produto {
    constructor(
        nome: string,
        preco: number,
        private _dataValidade: Date
        ){
            super(nome,preco);
        }
        get dataValidade(): string {
            return this._dataValidade.toLocaleDateString();
        }
        toString(): string {
            return super.toString() + `[dataValidade=${this._dataValidade.toLocaleDateString()}]`
        }
}

let prod1 = new Produto ('prod1', 1.99);
console.log(prod1);
console.log(prod1.toString());
let prod2 = new ProdutoPerecivel('prod2', 100, new Date(2019,12,31));
console.log(prod2);
console.log(prod2.toString());

abstract class FiguraBidimensional {
    constructor(
        private _centrox: number,
        private _centroy: number
    ){}

    get x(): number {
        return this._centrox;
    }

    get y(): number {
        return this._centroy;
    }

    abstract area(): number;
}

class Circulo extends FiguraBidimensional {
    constructor(
        centrox: number,
        centroy: number,
        private _raio: number){
            super(centrox, centroy);
        }
    
    get raio(): number{
        return this._raio;
    }

    area(): number {
       return Math.PI * this._raio ** 2;
    }
}

let fig1: FiguraBidimensional = new Circulo(1,1,3);
console.log(fig1);
console.log(fig1.area());
console.log(fig1.x);
console.log((<Circulo>fig1).raio);

let  pessoa = {
    nome: 'john Doe',
    idade: 22
};

let {nome, idade} = pessoa;
console.log(nome);
console.log(idade);

let {x,y} = fig1;
console.log(x);
console.log(y);

interface Desenhavel {
    x: number,
    y: number
}

function desenhar(d: Desenhavel) {
    console.log(`x=${d.x} y=${d.y}`);
}

desenhar(fig1);

interface Predicado <T> {
    (item:T) : boolean;
}

function filtrar<T>(array:T[], filtro: Predicado<T>):T[] {
    let resultado:T[] = [];
    for (let i=0; i <array.length; i++){
        if(filtro(array[i])){
            resultado.push(array[i]);
        }
    }
    return resultado;
}

console.log(filtrar([0,10,1,3,2], i =>i%2===0));*/

let umaPessoa = new Pessoa('John Doe', 22);
let json = JSON.stringify(umaPessoa);
console.log(json);
let jsonstring = '{"nome":"John Doe", "idade": 22}';
let obj = JSON.parse(jsonstring);
console.log(obj);