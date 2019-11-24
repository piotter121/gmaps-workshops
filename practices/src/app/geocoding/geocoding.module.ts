import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GeocodingRoutingModule } from './geocoding-routing.module';
import { GeocodingComponent } from './geocoding.component';


@NgModule({
  declarations: [GeocodingComponent],
  imports: [
    CommonModule,
    FormsModule,
    GeocodingRoutingModule
  ]
})
export class GeocodingModule { }
