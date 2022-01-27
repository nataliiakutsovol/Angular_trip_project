import { Component, OnInit } from '@angular/core';
import { TripItemModel } from 'src/app/core/models/trip-item.model';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectDestinations, selectEditMode, selectFilteredTripList, selectOffers } from 'src/app/core/state/trip.selectors';
import { retrievedDestinations, retrievedEditMode, retrievedOffers, retrievedTripList } from 'src/app/core/state/trip.actions';
import AppState from 'src/app/core/models/app-state.model';
import { TripDestinationsModel } from 'src/app/core/models/trip-destinations.model';
import { AllTripOffersModel } from 'src/app/core/models/trip-offers.model';

@Component({
  selector: 'app-trip-item',
  templateUrl: './trip-item.component.html',
  styleUrls: ['./trip-item.component.scss']
})
export class TripItemComponent implements OnInit {
  destinations$: Observable<Array<TripDestinationsModel>> = this.store.pipe(select(selectDestinations));
  offers$: Observable<Array<AllTripOffersModel>> = this.store.pipe(select(selectOffers));
  selectedItemIndex?: number;
  filteredTrips$: Observable<Array<TripItemModel>> = this.store.pipe(select(selectFilteredTripList));
  isEditModeOpened$: Observable<Boolean> = this.store.pipe(select(selectEditMode));

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new retrievedTripList());
    this.store.dispatch(new retrievedDestinations());
    this.store.dispatch(new retrievedOffers());
  }

  openEditMode(i: number) {
    this.store.dispatch(new retrievedEditMode(true));
    this.selectedItemIndex = i;
  }
}
