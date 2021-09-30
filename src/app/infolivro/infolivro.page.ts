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
  constructor(private dados: DadosStorageService) { }

  async ngOnInit() {
    this.livro= await this.dados.retornoEditLivro();
  }


}
