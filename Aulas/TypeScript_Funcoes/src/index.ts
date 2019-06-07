function area(r: number): number {
    return Math.PI * r**2;
}

function circunferencia(r: number) {
    return 2 * Math.PI * r;
}

console.log(area(4.5));
console.log(circunferencia(4.5));

function potencia(base: number, expoente: number = 2): number {
    let resultado= 1;
    for (let cont= 0; cont< expoente; cont++) {
        resultado*= base;
    }
    return resultado;
}

function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
console.log(buildName('a','b','c','d'));

const somar = function(x:number, y:number):number {
    return x+y;
}

console.log(somar(1,1));

const mult = (x:number, y:number) => x*y;
console.log(mult(2,4));

function multiplicar(fator: number): (n: number) => number {
    return (numero => numero * fator);
}

console.log(multiplicar(3)(4));

let palavras: string[] = ['a','b'];
console.log(palavras.pop());
console.log(palavras.pop());
console.log(palavras.pop()); //retorna undefined 