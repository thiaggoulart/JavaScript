/*1. Escreva um trecho de código para imprimir os números pares definidos 
por um intervalode valores inteiros não-negativos inicioe fim.
Utilize versões com fore while.*/
let inicio: number = 5;
let final: number = 10;
for (let i = inicio; i <= final; i++) {
    if(i%2 == 0){
        console.log(i);
    }
} 

while (inicio <= final) {
    if(inicio%2 == 0){
        console.log(inicio);
    }
    inicio++
}

/*2. Qual o resultado do seguinte bloco de comandos?
Qual a explicação para o resultado?
let i: number= 0;
while (i: != 10) {
    i += 0.2;
} //Não tem fim, pois um número que é float é arrendondando então nunca chega ao 10*/

/*3. Escreva uma função min(x,y)que devolve o menor entre dois números.
Não use funções auxiliares de Math.Utilize corretamente a declaração
de tipos nos parâmetros e no resultado da função.*/
function menor(x:number, y:number): number {
    if(x < y){
        return x;
    }else{
        return y;
    }
}
    console.log(menor(2,1));

/*4. Escreva uma função pow(x,y)que calcula o valor de x^y, ou seja, x elevado a potência y. 
Assuma que os valores de x e y são números inteiros não negativose que x^0=1 
para qualquer valor de x.Apresente uma versão iterativa e uma versão recursiva para a função.
Não utilize o operador **.Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função*/
function iterativa(x:number, y:number): number {
    let i:number = 1;
    while(i < y ){
        i++;
        x = x + x;
    }
    return x;
}

console.log(iterativa(2,5));

function recursiva(x:number, y:number): number {
    if (y != 0) {
        return x * recursiva(x, y - 1);
    } else {
        return 1;
    }
}

console.log(recursiva(2,5));

/*5. Escreva uma função toMaiusculaPrimeira(s) que recebe uma string s(assuma qualquer string não vazia)
e retorna a mesma string com a primeira letra em maiúscula.Utilize corretamente a declaração de tipos
nos parâmetros e no resultado da função.*/

function toMaiusculaPrimeira(s:string):string {
    s = s.substring(0,1).toUpperCase().concat(s.substring(1));
    return s;
}   
    console.log(toMaiusculaPrimeira('quero deixar a primeira letra maiuscula dessa frase'));

/*6. Escreva uma função getMax(arr)que recebe um array de número inteiros e retorna o maior elemento
encontrado no array. Assuma que o array não está vazio.Não utilize funções auxiliares de outros
objetos disponibilizados pelo TypeScript.Utilize corretamente a declaração de tipos nos parâmetros
e no resultado da função.*/
function getMax(array: number[]): number {
    let maior = array[0];
    for (let valor of array){
        if(valor > maior){
            maior = valor;
        }
    }
    return maior;
}

console.log(getMax([1,2,4,2,0]));

/*7. Escreva uma função que, utilizando objetos Map, calcule a frequência de cada número presente em
um determinado array contendo números inteiros.Utilize corretamente a declaração de tipos nos parâmetros
e no resultado da função.*/

function frequencia(array: number[]) : Map<number, number>{ 
    let contagem = new Map<number,number>();
    for (let valor of array){
        if (contagem.has(valor)){
            contagem.set(valor, contagem.get(valor)!+1);
        }else{
            contagem.set(valor,1);
        } 
    }
    return contagem;
}

function frequencia2(array: number[]): Map<number,number> {
    return array.reduce((contagem, valor) =>
    contagem.set(valor, contagem.get(valor)! +1), new Map<number,number>());
} // versão professor

console.log(frequencia([1,2,1,0,4,2]));