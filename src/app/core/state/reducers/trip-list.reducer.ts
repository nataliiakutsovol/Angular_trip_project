import { TripItemModel } from '../../models/trip-item.model';
import { TripState } from '../initial-state';

export function tripListReducer (state: TripState, action: any) {
    return {
        ...state,
        trips: [...action.payload],
        filteredTrips: [...action.payload],
    }
}

export function destinationsReducer(state: TripState, action: any) {
    return {
        ...state,
        destinations: [...action.payload],
    }
}

export function offersReducer(state: TripState, action: any) {
    return {
        ...state,
        offers: [...action.payload],
    }
}

export function deleteTripReduces(state: TripState, action: any) {
    let filteredTrips = [...state.filteredTrips];
    let trips = filteredTrips.filter((trip: TripItemModel) => trip.id !== action.payload )
    return {
        ...state,
        trips: [...trips],
        filteredTrips: [...trips],
    }
}

export function createNewTripReduces(state: TripState, action: any) {
    let trips = [...state.filteredTrips, action.payload]
    trips.sort((a: any, b: any) => { return +new Date(a.date_from) - +new Date(b.date_from) })
    return {
        ...state,
        trips: [...trips],
        filteredTrips: [...trips],
    }
}

export function editTripReduces(state: TripState, action: any) {
    //TODO: implement array modification
    let trips = [...state.filteredTrips, action.payload]
    return {
        ...state,
        trips: [...trips],
        filteredTrips: [...trips],
    }
}