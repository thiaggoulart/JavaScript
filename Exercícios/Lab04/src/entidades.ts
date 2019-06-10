export class Moeda {
    
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

export class Cofrinho {
    
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