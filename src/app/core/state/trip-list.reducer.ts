import { createReducer, on } from '@ngrx/store';
import { retrievedTripList, retrievedDestinations, retrievedOffers, retrievedEditMode, retrivedNewForm } from './trip.actions';
import { initialTripState } from './initial-state';

export const tripsReducer = createReducer(
    initialTripState.trips,
    on(retrievedTripList, (state, { trips }) => [...trips])
)

export const destinationsReducer = createReducer(
    initialTripState.destinations,
    on(retrievedDestinations, (state, { destinations }) => [...destinations])
)

export const offersReducer = createReducer(
    initialTripState.offers,
    on(retrievedOffers, (state, { offers }) => [...offers])
)

export const newFormReducer = createReducer(
    initialTripState.isNewTripOpened,
    on(retrivedNewForm, (state, { isNewTripOpened }) => isNewTripOpened)
)

export const editReducer = createReducer(
    initialTripState.isEditModeOpened,
    on(retrievedEditMode, (state, { isEditModeOpened }) => isEditModeOpened)
)