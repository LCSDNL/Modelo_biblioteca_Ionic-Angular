import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecarioPageRoutingModule } from './bibliotecario-routing.module';

import { BibliotecarioPage } from './bibliotecario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecarioPageRoutingModule
  ],
  declarations: [BibliotecarioPage]
})
export class BibliotecarioPageModule {}
