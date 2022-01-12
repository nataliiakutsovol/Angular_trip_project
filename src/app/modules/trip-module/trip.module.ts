import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TripRoutingModule } from './trip-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
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
    NgSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    TripRoutingModule
  ]
})
export class TripModule { }
