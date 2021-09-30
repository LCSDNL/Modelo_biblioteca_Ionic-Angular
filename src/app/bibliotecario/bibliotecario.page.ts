import { AlertController } from '@ionic/angular';
import { Livro } from './../estruturas.service';
import { DadosStorageService } from './../dados-storage.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bibliotecario',
  templateUrl: './bibliotecario.page.html',
  styleUrls: ['./bibliotecario.page.scss'],
})
export class BibliotecarioPage implements OnInit {

  livrosList: Livro[]=[];
  index: number;

  constructor( private dados: DadosStorageService, private router: Router, private alertController: AlertController) {}

  async ngOnInit() {
    this.livrosList= await this.dados.listaLivros;
  }

  async ionViewDidEnter(){
    this.livrosList= await this.dados.listaLivros;
  }

  public editar(index){
    this.dados.ponteiroEditLivro(index);
    this.router.navigate(['/editlivro']);
  }

  public apagar(index){
    this.index=index;
    this.presentAlertConfirm(); //chama os metods de exclusao
  }

  public addLivro(){
    this.router.navigate(['/addlivro']);
  }

//////////////ALERTAS///////////
private async presentAlertConfirm() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirmar!',
    message: '<strong>Deseja excluir este livro?</strong>',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Confirma',
        handler: () => {
          this.livrosList.splice(this.index,1);
          this.dados.livrosAtt(this.livrosList);
        }
      }
    ]
  });

  await alert.present();
}
}
