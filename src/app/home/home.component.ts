import { Component, Input, OnInit } from '@angular/core';
import { alunos } from '../model/aluno'

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor!: number;
  exibeTabela:  boolean = false;

  listaAlunos: alunos[] = [
    { nome: 'Camila', idade: 27, email: 'camila.taruma@gmail.com', curso: 'Ciencia da Computacao' },
    { nome: 'ana', idade: 25, email: 'ana@gmail.com', curso: 'Analise e desenvolvimento de sistemas' },
    { nome: 'bath', idade: 31, email: 'bath2@gmail.com', curso: 'Engenharia da computacao' },
    { nome: 'Paula', idade: 45, email: 'paula@gmail.com', curso: 'Sistemas da informacao' }
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela(){
    this.exibeTabela = true;
  }

}