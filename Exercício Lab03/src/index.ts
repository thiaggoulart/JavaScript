/*1. Crie uma classe que represente um Círculo. Esta classe deve possuir
as propriedades de um ponto central (coordenadas x, y) e um tamanho de raio.
Defina métodos para o cálculo da área do círculo e do comprimento da circunferência.
Escreva um bloco de código para testar a implementação do círculo. */
class Circulo {
    
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
console.log(cir.calculaCircunferencia());

/*2. Sejam os seguintes objetos representados em um diagrama de classes UML: 
a) Implemente as classes correspondentes em TypeScript. Você pode implementar
os métodos get apresentados na classe Moeda como: campos somente de leitura,
métodos de acesso ou propriedades de leitura. Utilize uma coleção adequada
para implementar a coleção de moedas na classe Cofrinho.
b) Escreva um bloco de código para testar a implementação.
c) Utilize um código para serializar um objeto Cofrinho em JSON e procure 
entender o formato de string que foi construído.*/
class Moeda {
    
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
console.log(cofre2.calcularTotal());