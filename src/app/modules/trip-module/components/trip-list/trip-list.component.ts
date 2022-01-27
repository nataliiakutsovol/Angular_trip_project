import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import AppState from 'src/app/core/models/app-state.model';
import { TripDestinationsModel } from 'src/app/core/models/trip-destinations.model';
import { AllTripOffersModel } from 'src/app/core/models/trip-offers.model';
import { selectDestinations, selectNewForm, selectOffers } from 'src/app/core/state/trip.selectors';
import { HeaderLables } from './config'

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {

  headerLables = HeaderLables;
  isNewTripOpened$: Observable<Boolean> = this.store.pipe(select(selectNewForm))
  destinations$: Observable<Array<TripDestinationsModel>> = this.store.pipe(select(selectDestinations));
  offers$: Observable<Array<AllTripOffersModel>> = this.store.pipe(select(selectOffers));
  
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
  }
}
