import { DadosStorageService } from './../dados-storage.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  login: string;
  senha: string;
  constructor(private storage: Storage, private dados: DadosStorageService) {

  }



  async ngOnInit(){
   await this.storage.create();
  }

  ionViewWillEnter(){
    this.login=undefined;
    this.senha=undefined;
  }

  public logar(){
    this.dados.login(this.login, this.senha);
  }

}
