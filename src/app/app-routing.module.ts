import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikeComponentComponent } from './Components/bike-component/bike-component.component';
import { HomeComponent } from './Components/home/home.component';
import { ViewRegistrationComponent } from './Components/view-registration/view-registration.component';

const routes: Routes = [
  {
    path : 'bike',
    component: BikeComponentComponent
  },
  {
    path : 'bike/view/:id',
    component: ViewRegistrationComponent
  },
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
