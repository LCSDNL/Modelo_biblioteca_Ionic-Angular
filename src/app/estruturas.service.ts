import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstruturasService {

  constructor() { }
}

export class Usuario{
  id: number;
  nome: string;
  login: string;
  senha: string;
  seguranca: number; // 0= leitores ;  1= bibliotecarios
  reserva: Livro;
  constructor(id: number, nome: string, login: string, senha: string, seguranca: number){
    this.id=id;
    this.nome=nome;
    this.login=login;
    this.senha=senha;
    this.seguranca=seguranca;
    this.reserva=null;
  }
}

export class Livro{
  id: number;
  nome: string;
  autor: string;
  tipo: string;
  ano: number;
  reservado: number; //0=disponvel 1=reservado 2=emprestado
  constructor(id: number, nome: string, autor: string, tipo: string, ano: number, reserva: number){
    this.id=id;
    this.nome=nome;
    this.autor=autor;
    this.tipo=tipo;
    this.ano=ano;
    this.reservado=reserva;
  }
}
