import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/pessoa';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  pessoa: Pessoa = new Pessoa ('John Doe',20);

  constructor() { }

  get dados(){
    return JSON.stringify(this.pessoa);
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Formulário submetido!");
  }
}
