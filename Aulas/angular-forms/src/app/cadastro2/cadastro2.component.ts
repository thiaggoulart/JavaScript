import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pessoa } from 'src/pessoa';

@Component({
  selector: 'app-cadastro2',
  templateUrl: './cadastro2.component.html',
  styleUrls: ['./cadastro2.component.css']
})
export class Cadastro2Component implements OnInit {
  pessoa = new Pessoa('John Doe',20);
  cadastro = new FormGroup({
    nome: new FormControl(this.pessoa.nome,[Validators.required, Validators.maxLength(60)]),
    idade: new FormControl(this.pessoa.idade, [Validators.required, Validators.minLength(1)])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("Formulário Submetido");
  }

get dados(){
  return JSON.stringify(this.pessoa);
}

}
