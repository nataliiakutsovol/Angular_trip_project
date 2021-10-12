import { createAction, props } from '@ngrx/store';

export const retrievedTripList = createAction(
    '[Trip List/API] Retrieve Trips Success',
    props<{ trips: any}>()
)

export const retrievedDestinations = createAction(
    '[Destination List/API] Retrieve Destinations Success',
    props<{ destinations: any}>()
)

export const retrievedOffers = createAction(
    '[Offer List/API] Retrieve Offers Success',
    props<{ offers: any}>()
)