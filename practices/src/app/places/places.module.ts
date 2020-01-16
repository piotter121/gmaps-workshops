import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesComponent } from './places/places.component';
import { PlacesRoutingModule } from './places-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PlacesComponent],
  imports: [
    CommonModule,
    FormsModule,
    PlacesRoutingModule
  ]
})
export class PlacesModule { }
