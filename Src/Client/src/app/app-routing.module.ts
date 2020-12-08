import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPlaceComponent } from './places/edit-place/edit-place.component';
import { PlacesComponent } from './places/places.component';

const routes: Routes = [
  { path: '', redirectTo: '/places', pathMatch: 'full' },
  {
    path: 'places',
    component: PlacesComponent,
  },
  {
    path: 'places/new',
    component: EditPlaceComponent,
  },
  {
    path: 'appartments/:id/edit',
    component: EditPlaceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
