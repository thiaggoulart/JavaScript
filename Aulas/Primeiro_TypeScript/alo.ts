let umaPessoa: string;
umaPessoa = 'John Doe';
let outraPessoa = 'Mary Doe';
let hoje = new Date();
/*
document.body.innerHTML = `Alô, ${umaPessoa}!
                            Hoje é ${hoje.toDateString()}`;
*/
document.body.innerHTML = alo(outraPessoa);

function alo(nome: string): string{
    return 'Alô,' + nome;
}
