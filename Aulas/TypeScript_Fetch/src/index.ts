import fetch, {Response, Request} from 'node-fetch';

interface Post {
    id?: number,
    userId: number,
    title: string,
    body: string
}

async function Main() {
        const urlBase = 'https://jsonplaceholder.typicode.com';
        try{
        /*
        //Realizar um GET
        let resposta: Response = await fetch(`${urlBase}/posts`);
        if (resposta.ok){
            let post: Post[] = await resposta.json();
            posts.forEach(p => console.log(p.title));
        }else {
            console.log(`GET sem sucesso: ${resposta.status} ${resposta.statusText}`)
        }
        */
        /*
        //Realizar um GET
        let resposta: Response = await fetch(`${urlBase}/posts/1000`);
        if (resposta.ok){
            let post: Post = await resposta.json();
            console.log(post);
        }else {
            console.log(`GET sem sucesso: ${resposta.status} ${resposta.statusText}`);
        }
        */
       /*
        //Realizar um POST
        let post:Post = {
            title: "Um Super Post",
            body: "Um texto muito legal",
            userId: 1
        };
        let resposta: Response = await fetch(`${urlBase}/posts`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });
        if (resposta.ok){
            let post: Post = await resposta.json();
            console.log(post);
        }else {
            console.log(`GET sem sucesso: ${resposta.status} ${resposta.statusText}`);
        }
        */
        //Realizar DELETE
        let resposta: Response = await fetch(`${urlBase}/posts/1`, {
            method: "DELETE"
        });
        console.log(`${resposta.status} ${resposta.statusText}`);
    }catch(erro){
        console.log(`Erro:`);
        console.log(erro);
    }
}

Main();