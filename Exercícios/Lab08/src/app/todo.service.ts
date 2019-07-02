import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UserService } from './user.service';
import { Todo } from './todo';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private urlBase  = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private http: HttpClient,
    private userServ: UserService
  ) { }

  buscarTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.urlBase).pipe(
      map(res => res || []),
      catchError(this.tratadorErros)
    );
  }

  buscarPorUserId(userId: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.urlBase}/${userId}`).pipe(
      map(res => res || []),
      catchError(this.tratadorErros)
    );
  }

  tratadorErros(erro: HttpErrorResponse) {
    let mensagemErro = '';
    if (erro.error instanceof ErrorEvent) {
      //erro do lado do cliente
      mensagemErro = erro.error.message;
    } else {
      //erro do lado do servidor
      mensagemErro = `Erro status:${erro.status} - mensagem:${erro.message}`;
    }
    return throwError(mensagemErro);
  }
}
