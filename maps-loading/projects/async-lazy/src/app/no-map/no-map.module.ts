import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoMapRoutingModule } from './no-map-routing.module';
import { NoMapComponent } from './no-map/no-map.component';


@NgModule({
  declarations: [NoMapComponent],
  imports: [
    CommonModule,
    NoMapRoutingModule
  ]
})
export class NoMapModule { }
