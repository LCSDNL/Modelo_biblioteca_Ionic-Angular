import { DadosStorageService } from './../dados-storage.service';
import { Component, Input, OnInit } from '@angular/core';
import { Livro } from '../estruturas.service';

@Component({
  selector: 'app-addlivro',
  templateUrl: './addlivro.page.html',
  styleUrls: ['./addlivro.page.scss'],
})
export class AddlivroPage implements OnInit {
  @Input() livro: Livro;
  constructor(private dados: DadosStorageService) { }

  async ngOnInit() {
    this.livro= new Livro(undefined,
                          undefined,
                          undefined,
                          undefined,
                          undefined,
                          undefined);
  }

  public salvar(){
    this.dados.addLivro(this.livro);
  }
}
