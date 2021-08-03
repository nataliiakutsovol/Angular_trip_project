import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripRoutingModule } from './trip-routing.module';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    TripListComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TripRoutingModule
  ]
})
export class TripModule { }
