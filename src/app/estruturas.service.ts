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
  reserva: number;
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
  reservado: number;
  constructor(id: number, nome: string){
    this.id=id;
    this.nome=nome;
    this.reservado=0;
  }
}
