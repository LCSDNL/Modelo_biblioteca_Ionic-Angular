import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DadosStorageService } from '../dados-storage.service';
import { Livro } from '../estruturas.service';

@Component({
  selector: 'app-leitor',
  templateUrl: './leitor.page.html',
  styleUrls: ['./leitor.page.scss'],
})
export class LeitorPage implements OnInit {

  livrosList: Livro[]=[];


  constructor( private dados: DadosStorageService, private router: Router, private alertController: AlertController) {}

  async ngOnInit() {
    this.livrosList= await this.dados.listaLivros;
  }

  async ionViewDidEnter(){
    this.livrosList= await this.dados.listaLivros;
  }

  public exibeInfo(index){
    this.dados.ponteiroEditLivro(index);
    this.router.navigate(['/infolivro']);
  }

  public logout(){
    this.router.navigate(['/']);
  }
}
