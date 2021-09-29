import { Livro } from './../estruturas.service';
import { DadosStorageService } from './../dados-storage.service';
import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bibliotecario',
  templateUrl: './bibliotecario.page.html',
  styleUrls: ['./bibliotecario.page.scss'],
})
export class BibliotecarioPage implements OnInit {

  livrosList: Livro[]=[];

  constructor( private dados: DadosStorageService, private router: Router) {}

  async ngOnInit() {
    this.livrosList= await this.dados.getLivros();

  }

  public editar(){}

  public apagar(ind){
    this.livrosList.splice(ind,1);
    this.dados.attList(this.livrosList);
  }




}
