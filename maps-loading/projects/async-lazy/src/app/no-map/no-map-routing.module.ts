import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoMapComponent } from './no-map/no-map.component';


const routes: Routes = [
  {
    path: '',
    component: NoMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoMapRoutingModule { }
