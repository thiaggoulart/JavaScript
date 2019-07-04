import { somar, binaryStringToNumber, somarAsync } from './funcoes';

describe('somar ', ()=>{
    test('somar 1+2 é igual a 3', () => {
        expect(somar(1,2)).toBe(3);
    });

    it.skip('somar 0+1 é igual a 1', ()=> {
        expect(somar(0,1)).toEqual(1);
    });
    
    test.each([[0,1,1],[1,2,3],[-1,1,0],[1,-1,0]])('somar %i + %i é igual a %i',(x: number, y: number, z: number) => {
        expect(somar(x,y)).toBe(z);
    });
});

describe('binaryStringToNumber', () => {
    test.each([['0',0],['00',0],['1',1],['01',1]])('%s binário é %i inteiro',(bin, int) => {
        expect(binaryStringToNumber(bin as string)).toBe(int);
    });

    test('abc gera exceção', () => {
        //expect(binaryStringToNumber('abc')).toThrow(new Error('Número binário inválido.'));  precisa ser dentro de uma função
        expect(()=> {
            binaryStringToNumber('abc');
        }).toThrow(Error);
    });
});

describe('Teste somarAsync', () => {
    test.skip('async 1+2 é igual a 3', () => {
        //expect(somarAsync(1,3)).toBe(3); não esperou o resutado
        /*return somarAsync(1,2).then(res => {
            expect(res).toBe(3);
        }); não é concentualmente correto*/ 
        return expect(somarAsync(1,2)).resolves.toBe(3); // assim tá ok
    });
    
    test('async 1+2 é igual a 3', async() => {
        const res = await somarAsync(1,2);
        expect(res).toBe(3);
    }); //assim também pode usar
});
