import { Action, createAction, props } from '@ngrx/store';
import { TripDestinationsModel } from '../models/trip-destinations.model';
import { TripItemModel } from '../models/trip-item.model';
import { AllTripOffersModel } from '../models/trip-offers.model';

export enum TripActions {
    GET_ALL_TRIPS = '[GET] Get all trips',
    GET_ALL_TRIPS_SUCCESS = '[GET] Get all trips success',
    GET_ALL_DESTINATIONS = '[GET] Get all destinations',
    GET_ALL_DESTINATIONS_SUCCESS = '[GET] Get all destinations success',
    GET_ALL_OFFERS = '[GET] Get all offers',
    GET_ALL_OFFERS_SUCCESS = '[GET] Get all offers success',
    DELETE_TRIP = '[DELETE] Delete trip',
    DELETE_TRIP_SUCCESS = '[DELETE] Delete trip success',
    ADD_NEW_TRIP = '[POST] Add trip',
    ADD_NEW_TRIP_SUCCESS = '[POST] Add trip success',
    EDIT_TRIP = '[PUT] Edit trip',
    EDIT_TRIP_SUCCESS = '[PUT] Edit trip success',
    TRIPS_FILTER_PAST = 'FilterPast trips',
    TRIPS_FILTER_FUTURE = 'FilterFuture trips',
    TRIPS_FILTER_EVERYTHING = 'FilterEverything trips',
    OPEN_EDIT_MODE = 'open edit mode',
    OPEN_NEW_TRIP_FORM = 'open new trip form'
}

export type TripActionList = 
    retrievedTripList | 
    retrievedDestinations |
    retrievedOffers |
    retrievedTripListSucceess |
    retrievedDestinationsSucceess |
    retrievedOffersSuccess |
    deleteTrip |
    deleteTripSuccess |
    addNewTrip |
    addNewTripSuccess |
    editTrip |
    editTripSuccess |
    retrievedFilterPastTripList |
    retrievedFilterFutureTripList |
    retrievedFilterEverythingTripList |
    retrivedNewForm |
    retrievedEditMode;

export class retrievedTripList implements Action {
    readonly type = TripActions.GET_ALL_TRIPS;
}

export class retrievedTripListSucceess implements Action {
    readonly type = TripActions.GET_ALL_TRIPS_SUCCESS;
    constructor(public payload: Array<TripItemModel>) {}
}

export class retrievedDestinations implements Action {
    readonly type = TripActions.GET_ALL_DESTINATIONS;
}

export class retrievedDestinationsSucceess implements Action {
    readonly type = TripActions.GET_ALL_DESTINATIONS_SUCCESS;
    constructor(public payload: Array<TripDestinationsModel>) {}
}

export class retrievedOffers implements Action {
    readonly type = TripActions.GET_ALL_OFFERS;
}

export class retrievedOffersSuccess implements Action {
    readonly type = TripActions.GET_ALL_OFFERS_SUCCESS;
    constructor(public payload: Array<AllTripOffersModel>) {}
}

export class deleteTrip implements Action {
    readonly type = TripActions.DELETE_TRIP;
    constructor(public payload: string) {}
}

export class deleteTripSuccess implements Action {
    readonly type = TripActions.DELETE_TRIP_SUCCESS;
}

export class addNewTrip implements Action {
    readonly type = TripActions.ADD_NEW_TRIP;
    constructor(public payload: TripItemModel) {}
}

export class addNewTripSuccess implements Action {
    readonly type = TripActions.ADD_NEW_TRIP_SUCCESS;
    constructor(public payload: TripItemModel) {}
}

export class editTrip implements Action {
    readonly type = TripActions.EDIT_TRIP;
    constructor(public payload: TripItemModel, public pointId: string) {}
}

export class editTripSuccess implements Action {
    readonly type = TripActions.EDIT_TRIP_SUCCESS;
    constructor(public payload: TripItemModel) {}
}

export class retrievedFilterPastTripList implements Action {
    readonly type = TripActions.TRIPS_FILTER_PAST;
}

export class retrievedFilterFutureTripList implements Action {
    readonly type = TripActions.TRIPS_FILTER_FUTURE;
}

export class retrievedFilterEverythingTripList implements Action {
    readonly type = TripActions.TRIPS_FILTER_EVERYTHING;
}

export class retrivedNewForm implements Action {
    readonly type = TripActions.OPEN_NEW_TRIP_FORM;
    constructor(public payload: boolean) {}
}

export class retrievedEditMode implements Action{
    readonly type = TripActions.OPEN_EDIT_MODE;
    constructor(public payload: boolean) {}
}