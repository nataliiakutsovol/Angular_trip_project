import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripRoutingModule } from './trip-routing.module';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { HeaderComponent } from './components/header/header.component';
import { TripItemComponent } from './components/trip-list/trip-item/trip-item.component';
import { AddTripItemComponent } from './components/trip-list/add-trip-item/add-trip-item.component';

@NgModule({
  declarations: [
    TripListComponent,
    HeaderComponent,
    TripItemComponent,
    AddTripItemComponent
  ],
  imports: [
    CommonModule,
    TripRoutingModule
  ]
})
export class TripModule { }
