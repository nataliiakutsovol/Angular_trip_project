import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/core/services/trip.service';
import { Store, select } from '@ngrx/store';
import { selectOffers, selectDestinations } from 'src/app/core/state/trip.selectors';
import { retrievedDestinations, retrievedOffers } from 'src/app/core/state/trip.actions';
import { Observable } from 'rxjs';
import { TripState } from 'src/app/core/state/initial-state';
import { TripDestinationsModel } from 'src/app/core/models/trip-destinations.model';
import { TripOffersModel } from 'src/app/core/models/trip-offers.model';

@Component({
  selector: 'app-add-trip-item',
  templateUrl: './add-trip-item.component.html',
  styleUrls: ['./add-trip-item.component.scss']
})
export class AddTripItemComponent implements OnInit {

  destinations$: Observable<TripDestinationsModel[]> = this.store.pipe(select(selectDestinations))
  offers$: Observable<TripOffersModel[]> = this.store.pipe(select(selectOffers))

  constructor(
    private tripService: TripService,
    private store: Store<TripState>) { }

  ngOnInit(): void {
    this.getDestignations();
    this.getOffers();
  }

  getDestignations() {
    this.tripService.getAllDestinations().subscribe((destinations) => {
      this.store.dispatch(retrievedDestinations({ destinations }));
    })
  }

  getOffers() {
    this.tripService.getAllOffers().subscribe((offers) => {
      this.store.dispatch(retrievedOffers({ offers }));
    })
  }
}
