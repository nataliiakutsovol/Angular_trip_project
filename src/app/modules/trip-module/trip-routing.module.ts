import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TripListComponent } from './components/trip-list/trip-list.component';

const routes: Routes = [
    { path: '',
      component: TripListComponent,
      children: [
        {
          path: '',
          component: HeaderComponent
        },
      ]
    }
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TripRoutingModule { }
  