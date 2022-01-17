import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TripService } from 'src/app/core/services/trip.service';
import { Store, select } from '@ngrx/store';
import { selectOffers, selectDestinations } from 'src/app/core/state/trip.selectors';
import { retrievedDestinations, retrivedNewForm, retrievedEditMode, retrievedOffers, deleteTrip } from 'src/app/core/state/trip.actions';
import { Observable } from 'rxjs';
import { TripState } from 'src/app/core/state/initial-state';
import { TripDestinationsModel } from 'src/app/core/models/trip-destinations.model';
import { TripOffersModel } from 'src/app/core/models/trip-offers.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-trip-item',
  templateUrl: './add-trip-item.component.html',
  styleUrls: ['./add-trip-item.component.scss']
})

export class AddTripItemComponent implements OnInit {

  @Input() selectedItem: any;
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
      this.selectDestination();
    })
  }

  initForm() {
    this.tripForm = this.formBuilder.group({
      type: this.selectedItem ? this.selectedItem.type : 'bus',
      destination: [this.selectedItem ? this.selectedItem.destination.name : 'Rome', Validators.required],
      date_from: [this.selectedItem ? this.selectedItem.date_from : null, Validators.required],
      date_to: [this.selectedItem ? this.selectedItem.date_to : null, Validators.required],
      base_price: [this.selectedItem ? this.selectedItem.base_price : 500, Validators.required],
      offers: [this.selectedItem ? this.selectedItem.offers : []],
      is_favorite: this.selectedItem ? this.selectedItem.is_favorite : false,
    })
  }

  selectType(): void {
    const val = this.tripForm.controls.type.value
    this.offers$.pipe(
      map(res => res.filter(i => i.type === val))
    ).subscribe(res => this.selectedType = res)
  }

  selectDestination(): void {
    const val = this.tripForm.controls.destination.value
    this.destinations$.pipe(
      map(res => res.filter(i => i.name === val))
    ).subscribe(res => this.selectedDestination = res)
  }

  getIcon(type: any) {
    return './../../../../../assets/img/png/' + type + '.png';
  }

  closeEditForm() {
    this.selectedItem 
    ? this.store.dispatch(retrievedEditMode({ isEditModeOpened: false }))
    : this.store.dispatch(retrivedNewForm({ isNewTripOpened: false }));
  }

  createTrip() {
    this.tripService.createTripItem(this.tripForm.value).subscribe();
  }

  updateTrip() {
    this.tripService.updateTripItem(this.selectedItem.id, this.tripForm.value).subscribe();
  }

  deleteTrip() {
    this.tripService.deleteTripItem(this.selectedItem.id).subscribe();
    this.store.dispatch(retrievedEditMode({ isEditModeOpened: false }));
  }

  submit(): void {
    if (this.tripForm.valid) {
      this.onSubmit.emit(this.tripForm.value);
      this.createTrip();
    }
  }
}