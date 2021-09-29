import { Livro } from './../estruturas.service';
import { DadosStorageService } from './../dados-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editlivro',
  templateUrl: './editlivro.page.html',
  styleUrls: ['./editlivro.page.scss'],
})
export class EditlivroPage implements OnInit {
  livro: Livro;
  constructor(private dados: DadosStorageService) { }

  async ngOnInit() {
    this.livro= await this.dados.retornoEditLivro();
  }


  public salvar(){
    this.dados.salvaLivroEdit(this.livro);
  }
}
