import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import AppState from 'src/app/core/models/app-state.model';
import { TripItemModel } from 'src/app/core/models/trip-item.model';
import { retrievedFilterEverythingTripList, 
  retrievedFilterFutureTripList, 
  retrievedFilterPastTripList, 
  retrivedNewForm } 
from 'src/app/core/state/trip.actions';
import { selectFilteredTripList } from 'src/app/core/state/trip.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  filteredTrips$: Observable<Array<TripItemModel>> = this.store.pipe(select(selectFilteredTripList));
  constructor(private store: Store<AppState>,) { }

  ngOnInit(): void {
  }

  openEditForm() {
    this.store.dispatch(new retrivedNewForm(true));
  }

  addPastFilter() {
    this.store.dispatch(new retrievedFilterPastTripList())
  }

  addFutureFilter() {
    this.store.dispatch(new retrievedFilterFutureTripList())
  }

  addEverythingFilter() {
    this.store.dispatch(new retrievedFilterEverythingTripList())
  }
}