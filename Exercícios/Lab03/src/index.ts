/*1. Crie uma classe que represente um Círculo. Esta classe deve possuir
as propriedades de um ponto central (coordenadas x, y) e um tamanho de raio.
Defina métodos para o cálculo da área do círculo e do comprimento da circunferência.
Escreva um bloco de código para testar a implementação do círculo. */
/*class Circulo {
    
    constructor(
        private _x: number,
        private _y: number,
        private _raio: number
        ){}

    get x(): number {
        return this._x;
    }
    set x(n: number) {
        this._x =  n;
    }
    get y(): number {
        return this._y;
    }
    set y(n: number) {
         this._y =  n;
    }    
    get raio(): number {
        return this._raio;
    }
    set raio(n: number) {
        this._raio =  n;
    }
    calculaArea():number {
        let area: number;
        area =(Math.PI*(this._raio**2));
        return area;
    }
    calculaCircunferencia():number {
        let circunferencia: number;
        circunferencia =(2*Math.PI*(this._raio**2));
        return circunferencia;
    }
}

let cir = new Circulo (2,4,6);
console.log(cir.calculaArea());
console.log(cir.calculaCircunferencia());*/

/*2. Sejam os seguintes objetos representados em um diagrama de classes UML: 
a) Implemente as classes correspondentes em TypeScript. Você pode implementar
os métodos get apresentados na classe Moeda como: campos somente de leitura,
métodos de acesso ou propriedades de leitura. Utilize uma coleção adequada
para implementar a coleção de moedas na classe Cofrinho.
b) Escreva um bloco de código para testar a implementação.
c) Utilize um código para serializar um objeto Cofrinho em JSON e procure 
entender o formato de string que foi construído.*/
/*class Moeda {
    
    constructor(
        private _valor: number,
        private _nome: string
    ){}

    get valor(): number{
        return this._valor;
    }
    get nome(): string{
        return this._nome;
    }
}

class Cofrinho {
    
    private moedas: Moeda[] = [];
    adicionar(m: Moeda): void {
      this.moedas.push(m); 
    }

    calcularTotal(): number {
        let somador:(x: number, y: Moeda) => number = (soma, moeda) => soma + moeda.valor;
        return this.moedas.reduce(somador, 0);
    }
}

let cofre: Cofrinho = new Cofrinho();
cofre.adicionar(new Moeda(1.0, '1 Real'));
cofre.adicionar(new Moeda(0.5, '50 centavos'));
cofre.adicionar(new Moeda(0.1, '10 centavos'));
console.log(cofre.calcularTotal());
let cofre2 = new Cofrinho();
console.log(cofre2.calcularTotal());*/

/*3. Altere a implementação da classe Cofrinho do exercício anterior para incluir:
• Método que retorna o valor da menor moeda armazenada.
• Método que retorna uma instância da menor moeda armazenada.
• Método que retorna um mapa/dicionário com a frequência (o número de moedas) de cada moeda
existente (1 centavo, 5 centavos, 10 centavos, 25 centavos, 50 centavos, 1 real) no cofrinho.*/

/*class Cofrinho {
    
    private moedas: Moeda[] = [];
    adicionar(m: Moeda): void {
      this.moedas.push(m); 
    }

    calcularTotal(): number {
        let somador:(x: number, y: Moeda) => number = (soma, moeda) => soma + moeda.valor;
        return this.moedas.reduce(somador, 0);
    }

    menorMoeda(): number {
        let menorValor: number = 1;
        for (let i=0; i <this.moedas.length; i++){
            if(this.moedas[i].valor < menorValor){
                menorValor = this.moedas[i].valor
            }
        }
        return menorValor;
    }

    instancia(): Moeda {
        let instancia: Moeda = new Moeda(0, 'Moeda');
        let menorValor: number = 1;
        for (let i=0; i <this.moedas.length; i++){
            if(this.moedas[i].valor < menorValor){
                menorValor = i
            }
        }
        instancia = this.moedas[menorValor];
        return instancia;
    }

    frequencia() : Map<string, number>{ 
        let contagem = new Map<string,number>();
        contagem.set('1 centavo', 0);
        contagem.set('5 centavos', 0);
        contagem.set('10 centavos', 0);
        contagem.set('25 centavos', 0);
        contagem.set('50 centavos', 0);
        contagem.set('1 Real', 0);
        for (let i=0; i <this.moedas.length; i++){
            if (contagem.has(this.moedas[i].nome)){
                contagem.set(this.moedas[i].nome, contagem.get(this.moedas[i].nome)!+1);
            }else{
                contagem.set(this.moedas[i].nome,1);
            } 
        }
        return contagem;
    }
}

let cofre: Cofrinho = new Cofrinho();
cofre.adicionar(new Moeda(1.0, '1 Real'));
cofre.adicionar(new Moeda(0.5, '50 centavos'));
cofre.adicionar(new Moeda(0.1, '10 centavos'));
console.log(cofre.menorMoeda());
console.log(cofre.instancia());
console.log(cofre.frequencia());*/

/* Seja a seguinte hierarquia de herança representada em um diagrama e classes UML:
a)Implemente as classes em TypeScript. Para o cálculo do valor da mensalidade utilizeas seguintes
informações: Esta empresa de seguros cobra uma mensalidade correspondente a 10% do salário se o
cliente tem menos de 60 anos e 15% se o cliente tem 60 anos ou mais, no caso de clientes que são
pessoa física. Para pessoas jurídicas é cobrada uma mensalidade variável, calculada através de
negociações como cliente.
b)Implemente uma classe CadastroClientes para armazenar o cadastro de clientes da empresa de seguros.
Apresente métodos para adicionar um cliente ao cadastro e retornar uma string contendo a listagem de
todos os clientes, mostrando seu nome e o valor da mensalidade a ser paga.*/


abstract class Cliente{
    constructor(private _nome: string){

    }
    
    get nome(): string{
        return this._nome;
    }

    abstract getMensalidade(): number;

}

class ClienteFisico extends Cliente{
    constructor(nome: string, private _idade: number, private _salario: number){
        super(nome);
    }

    get idade(): number{
        return this._idade;
    }

    set idade(idade: number){
        this._idade = idade;
    }

    get salario(): number{
        return this._salario;
    }
    
    set salario(salario: number){
        this._salario = salario;
    }

    getMensalidade(): number{
        if(this._idade < 60){
            return 0.1*this._salario;
        }
        else{
            return 0.15*this._salario;
        }
    }
}

class ClienteJuridico extends Cliente{
    constructor(nome: string, private _mensalidade: number){
        super(nome);
    }

    set mensalidade(mensalidade: number){
        this._mensalidade = mensalidade;
    }

    getMensalidade(): number{
        return this._mensalidade;
    }
}

class CadastroClientes{
    private clientes: Cliente[] = [];

    adicionar(c: Cliente): void{

        this.clientes.push(c);
    }

    imprimirClientes(): void{
        for(let i = 1; i < this.clientes.length; i++){
            console.log(`Nome do cliente: ${this.clientes[i].nome}, Mensalidade:` + this.clientes[i].getMensalidade);
        }
    }
}