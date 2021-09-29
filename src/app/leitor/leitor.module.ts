import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeitorPageRoutingModule } from './leitor-routing.module';

import { LeitorPage } from './leitor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeitorPageRoutingModule
  ],
  declarations: [LeitorPage]
})
export class LeitorPageModule {}
