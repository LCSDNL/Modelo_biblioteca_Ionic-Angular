import { AlertController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { DadosStorageService } from '../dados-storage.service';
import { Livro } from '../estruturas.service';

@Component({
  selector: 'app-infolivro',
  templateUrl: './infolivro.page.html',
  styleUrls: ['./infolivro.page.scss'],
})
export class InfolivroPage implements OnInit {
  @Input() livro: Livro;
  constructor(private dados: DadosStorageService, private alertController: AlertController) { }

  async ngOnInit() {
    this.livro= await this.dados.retornoEditLivro();
  }

  public reservar(){
    this.reservaConfirm();
  }

  private async reservaConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar!',
      message: '<strong>Deseja reservar este livro?</strong>',
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
             this.dados.reservaLivro(this.livro);
          }
        }
      ]
    });

    await alert.present();
  }
}
