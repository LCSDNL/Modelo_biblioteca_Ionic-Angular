import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddlivroPageRoutingModule } from './addlivro-routing.module';

import { AddlivroPage } from './addlivro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddlivroPageRoutingModule
  ],
  declarations: [AddlivroPage]
})
export class AddlivroPageModule {}
