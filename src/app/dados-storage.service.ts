/* eslint-disable max-len */
import { Storage } from '@ionic/storage-angular';
import { Usuario, Livro } from './estruturas.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { errorMonitor } from 'events';


@Injectable({
  providedIn: 'root'
})
export class DadosStorageService {

  listaUsuario: Usuario[]=[];
  logado: Usuario;
  listaLivros: Livro[]=[];
  livroEdita: Livro;
  livroIndex: any;

  constructor(private storage: Storage,private router: Router, private alertController: AlertController, private toast: ToastController) {
    this.storage.create();
    //INICIALIZACAO DOS USUARIOS
    this.listaUsuario.push(new Usuario(0,'Lucas','leitor@email.com','123456',0));
    this.listaUsuario.push(new Usuario(1,'Daniel','bibliotecario@email.com','1234567',1));

    //INICIALIZACAO DOS LIVROS
    this.listaLivros.push(new Livro(1,'Zombies & Cálculo','Colin Adams','Livro',2018, 1));
    this.listaLivros.push(new Livro(2,'Codex Seraphinianus','Luigi Serafini, Umas ervas ai','Enciclopédia',1981, 0));
    this.listaLivros.push(new Livro(3,'Tales Of Demons and Gods','Mad Snail','Novel',2021, 2));

    // SALVAR NO STORAGE
    this.storage.set('users', this.listaUsuario);
    this.storage.set('livros', this.listaLivros);

  }

//////////////TRATAMENTO DE CAMPOS DOS LIVROS/////////////////////////
public confirmaCampos(livro: Livro){
  if(livro.autor!==undefined && livro.nome!==undefined && livro.ano!==undefined && livro.id!==undefined && livro.tipo!==undefined && livro.reservado!==undefined){
      return true;
  }else{this.alertCampoVazio(); return false;}
}

  //////////////////LOGICAS DOS LIVROS//////////////////////////
  public ponteiroEditLivro(index){
    this.livroIndex= index;
    this.livroEdita= this.listaLivros[index];
  }
  public retornoEditLivro(){
    return this.livroEdita;
  }
  public salvaLivroEdit(livro: Livro){
    this.listaLivros[this.livroIndex]=livro;

    this.attList().then(()=>{this.editadoSucc();})
    .catch(()=>console.log(errorMonitor));
  }
  public livrosAtt(livros: Livro[]){
    this.listaLivros=livros;
    this.attList().then(()=>{console.log('lista de livros atualizada');});
  }
  public addLivro(livro: Livro){
    this.listaLivros.push(livro);

    this.attList().then(()=>{this.addSucc();})
    .catch(()=>console.log(errorMonitor));
  }
  public reservaLivro(livro: Livro){
    this.listaLivros[this.livroIndex]=livro;
    if(this.reservaCheck()){
      this.attList().then(()=>{ this.toastReservado();
                                this.router.navigate(['/leitor']);
                                this.logado.reserva=livro;  })
      .catch(()=>console.log(errorMonitor));
    }
}

  /////////////////////LOGICA DO LOGIN////////////////////////
  public login(login: string, senha: string){
    if((login === undefined) ){
      return this.alertEmailVazio();
    }else{
      this.loginCheck(login, senha);
    }
}

/////////////////   PRIVATES   //////////////////
  private async loginCheck(login: string, senha: string){
    const lista: Usuario[] = await this.storage.get('users');

    for (const item of lista) {
      if(item.login===login){
        if(item.senha===senha){

          this.logado=item;
          if(this.logado.seguranca=== 0){return this.router.navigate(['/leitor']);}
          if(this.logado.seguranca=== 1){return this.router.navigate(['/bibliotecario']);}

        }else{return this.alertSenhaInvalida();}
      }
    }return this.alertEmailInvalido();
  }
  private async attList(){
    await this.storage.set('livros', this.listaLivros);
  }
  private  async getLivros(){
    this.listaLivros= await this.storage.get('livros');
  }
  private reservaCheck(){
    if(this.logado.reserva === null){
      this.listaLivros[this.livroIndex].reservado=1;
      return true;
    }else{
        this.alertReservado();
        return false;
    }
  }

  /////////////////    ALERTAS /////////////////////////
  private  async alertEmailVazio() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atenção',
      subHeader: '',
      message: 'Email não informado',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  private  async alertEmailInvalido() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'OPS...',
      subHeader: '',
      message: 'Email Invalido',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  private  async alertSenhaInvalida() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atenção',
      subHeader: '',
      message: 'Senha incorreta',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  private  async editadoSucc(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Tudo certo!',
      subHeader: '',
      message: 'Livro editado com sucesso!',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    await this.getLivros();
    this.router.navigate(['/bibliotecario']);
  }
  private  async addSucc(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Tudo certo!',
      subHeader: '',
      message: 'Livro adicionado com sucesso!',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    await this.getLivros();
    this.router.navigate(['/bibliotecario']);;
  }
  private  async alertCampoVazio() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atenção',
      subHeader: '',
      message: 'Campos vazios',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  private async alertReservado(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atenção',
      subHeader: '',
      message: 'Você ja possui um livro reservado!',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.router.navigate(['/leitor']);
    console.log('onDidDismiss resolved with role', role);
  }


  private async toastReservado() {
    const toast = await this.toast.create({
      message: 'Livro reservado com sucesso!',
      duration: 2000
    });
    toast.present();
  }

}
