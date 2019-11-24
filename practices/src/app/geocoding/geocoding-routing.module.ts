import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeocodingComponent } from './geocoding.component';

const routes: Routes = [{ path: '', component: GeocodingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeocodingRoutingModule { }
