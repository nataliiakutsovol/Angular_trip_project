import { createSelector } from '@ngrx/store';
import { TripDestinationsModel } from '../models/trip-destinations.model';
import { TripItemModel } from '../models/trip-item.model';
import { TripOffersModel } from '../models/trip-offers.model';
import { TripState } from './initial-state';

export const selectTripList = createSelector(
    (state: TripState ) => state.trips,
    (tripList: Array<TripItemModel>) => tripList
)

export const selectDestinations = createSelector(
    (state: TripState ) => state.destinations,
    (destinations: Array<TripDestinationsModel>) => destinations
)

export const selectOffers = createSelector(
    (state: TripState ) => state.offers,
    (offers: Array<TripOffersModel>) => offers
)