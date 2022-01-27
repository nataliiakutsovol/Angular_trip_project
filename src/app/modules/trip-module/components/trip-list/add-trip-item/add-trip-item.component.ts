import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { retrivedNewForm, retrievedEditMode, deleteTrip, addNewTrip, editTrip } from 'src/app/core/state/trip.actions';
import { Observable } from 'rxjs';
import { TripDestinationsModel } from 'src/app/core/models/trip-destinations.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TripItemModel, TripOffersModel } from 'src/app/core/models/trip-item.model';
import { AllTripOffersModel } from 'src/app/core/models/trip-offers.model';
import { selectDestinations, selectOffers } from 'src/app/core/state/trip.selectors';
import { map } from 'rxjs/operators';
import AppState from 'src/app/core/models/app-state.model';


@Component({
  selector: 'app-add-trip-item',
  templateUrl: './add-trip-item.component.html',
  styleUrls: ['./add-trip-item.component.scss']
})

export class AddTripItemComponent implements OnInit {

  @Input() selectedItem?: TripItemModel;
  @Input() destinations?: Array<TripDestinationsModel> | null;
  @Input() offerList?: Array<AllTripOffersModel> | null;
  @Output() onSubmit = new EventEmitter<FormGroup>();
  tripForm!: FormGroup;
  selectedType?: Array<TripOffersModel>;
  selectedOffers?: Array<TripOffersModel> | any;
  selectedDestination?: TripDestinationsModel;
  destinations$: Observable<Array<TripDestinationsModel>> = this.store.pipe(select(selectDestinations));
  offers$: Observable<Array<AllTripOffersModel>> = this.store.pipe(select(selectOffers));

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder) {  }

  ngOnInit(): void {
    this.initForm();
    this.tripForm.patchValue({...this.selectedItem});
    this.selectDestination();
    this.selectOfferType();
  }

  initForm() {
    this.tripForm = this.formBuilder.group({
      type: ['bus'],
      destination: [this.formBuilder.group({
        name: [Validators.required]
      }), Validators.required],
      date_from: [Validators.required],
      date_to: [ Validators.required],
      base_price: [500, Validators.required],
      offers: [[]],
      is_favorite: false
    })
  }

  selectOfferType(): void {
    const val = this.tripForm.controls.type.value;
    this.selectedOffers, this.selectedType = this.offerList?.find(i => i.type === val)?.offers;
  }

  selectDestination(): void {
    const val = this.tripForm.controls.destination.value.name
      ? this.tripForm.controls.destination.value.name
      : this.tripForm.controls.destination.value;

    this.selectedDestination = this.destinations?.find((i: TripDestinationsModel) => i.name === val);
  }

  selectOffers(offer: TripOffersModel) {
    this.selectedOffers.includes(offer)
    ? this.selectedOffers = this.selectedOffers.filter((item: TripOffersModel) => item !== offer) 
    : this.selectedOffers = [...this.selectedOffers, offer]
  }

  closeEditForm() {
    this.selectedItem
    ? this.store.dispatch(new retrievedEditMode(false))
    : this.store.dispatch(new retrivedNewForm(false));
  }

  createTrip(willBeSent: TripItemModel) {
    this.store.dispatch(new addNewTrip(willBeSent));
    this.store.dispatch(new retrivedNewForm(false));
  }

  updateTrip(willBeSent: TripItemModel) {
    this.store.dispatch(new editTrip(willBeSent, this.selectedItem?.id as string))
    this.store.dispatch(new retrievedEditMode(false));
  }

  removeTrip() {
    this.store.dispatch(new deleteTrip(this.selectedItem?.id as string))
    this.store.dispatch(new retrievedEditMode(false));
  }

  submit(): void {
    if (this.tripForm.valid) {
      const willBeSent = {
        ...this.tripForm.value,
        destination: this.selectedDestination,
        offers: this.selectedOffers,
      }

      this.onSubmit.emit(willBeSent);

      this.selectedItem 
      ? this.updateTrip(willBeSent)
      : this.createTrip(willBeSent)
    }
  }

  equals(a: TripDestinationsModel, b: TripDestinationsModel): boolean{
    return a.name == b.name;
  }
}