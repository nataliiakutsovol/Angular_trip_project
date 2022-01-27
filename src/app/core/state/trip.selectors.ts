import { createSelector } from '@ngrx/store';
import AppState from '../models/app-state.model';
import { TripDestinationsModel } from '../models/trip-destinations.model';
import { TripItemModel } from '../models/trip-item.model';
import { AllTripOffersModel } from '../models/trip-offers.model';

export const selectTripList = createSelector(
    (state: AppState ) => state.trip.trips,
    (tripList: Array<TripItemModel>) => tripList
)

export const selectFilteredTripList = createSelector(
    (state: AppState ) => state.trip.filteredTrips,
    (filteredTripsList: Array<TripItemModel>) => filteredTripsList
)

export const selectDestinations = createSelector(
    (state: AppState ) => state.trip.destinations,
    (destinations: Array<TripDestinationsModel>) => destinations
)

export const selectOffers = createSelector(
    (state: AppState ) => state.trip.offers,
    (offers: Array<AllTripOffersModel>) => offers
)

export const selectNewForm = createSelector(
    (state: AppState ) => state.trip.isNewTripOpened,
    (isNewTripOpened: boolean) => isNewTripOpened
)

export const selectEditMode = createSelector(
    (state: AppState ) => state.trip.isEditModeOpened,
    (isEditModeOpened: boolean) => isEditModeOpened
)