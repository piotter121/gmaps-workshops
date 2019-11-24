import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'geocoding',
    loadChildren: () => import('./geocoding/geocoding.module').then(m => m.GeocodingModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'geocoding'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
