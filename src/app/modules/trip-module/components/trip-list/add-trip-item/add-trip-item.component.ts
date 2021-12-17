import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TripService } from 'src/app/core/services/trip.service';
import { Store, select } from '@ngrx/store';
import { selectOffers, selectDestinations } from 'src/app/core/state/trip.selectors';
import { retrievedDestinations, retrievedOffers } from 'src/app/core/state/trip.actions';
import { Observable } from 'rxjs';
import { TripState } from 'src/app/core/state/initial-state';
import { TripDestinationsModel } from 'src/app/core/models/trip-destinations.model';
import { TripOffersModel } from 'src/app/core/models/trip-offers.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-trip-item',
  templateUrl: './add-trip-item.component.html',
  styleUrls: ['./add-trip-item.component.scss']
})
export class AddTripItemComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<FormGroup>();
  tripForm!: FormGroup;
  selectedType: any;
  selectedDestination: any;

  destinations$: Observable<TripDestinationsModel[]> = this.store.pipe(select(selectDestinations))
  offers$: Observable<TripOffersModel[]> = this.store.pipe(select(selectOffers))

  constructor(
    private tripService: TripService,
    private store: Store<TripState>,
    private formBuilder: FormBuilder,) {  }

  ngOnInit(): void {
    this.getDestignations();
    this.getOffers();
    this.initForm();
  }

  getDestignations() {
    this.tripService.getAllDestinations().subscribe((destinations) => {
      this.store.dispatch(retrievedDestinations({ destinations }));
    })
  }

  getOffers() {
    this.tripService.getAllOffers().subscribe((offers) => {
      this.store.dispatch(retrievedOffers({ offers }));
      this.selectType();
    })
  }

  initForm() {
    this.tripForm = this.formBuilder.group({
      tripType: 'bus',
      tripDestination: ''
    })
  }

  selectType(): void {
    const val = this.tripForm.controls.tripType.value
    this.offers$.pipe(
      map(res => res.filter(i => i.type === val))
    ).subscribe(res => this.selectedType = res)
  }

  selectDestination(): void {
    const val = this.tripForm.controls.tripDestination.value
    this.destinations$.pipe(
      map(res => res.filter(i => i.name === val))
    ).subscribe(res => this.selectedDestination = res)
    console.log(this.selectedDestination)
  }

  getIcon(type: any) {
    return './../../../../../assets/img/png/' + type + '.png';
  }
}
