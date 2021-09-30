import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfolivroPageRoutingModule } from './infolivro-routing.module';

import { InfolivroPage } from './infolivro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfolivroPageRoutingModule
  ],
  declarations: [InfolivroPage]
})
export class InfolivroPageModule {}
