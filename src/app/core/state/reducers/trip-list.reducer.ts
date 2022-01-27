import { TripItemModel } from '../../models/trip-item.model';
import { TripState } from '../initial-state';

export function tripListReducer (state: TripState, action: any) {
    let trips = [...action.payload].sort((a: any, b: any) => { return +new Date(a.date_from) - +new Date(b.date_from) })
    return {
        ...state,
        trips: [...trips],
        filteredTrips: [...trips],
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
    state.filteredTrips.filter((trip: TripItemModel) => trip.id !== action.payload )
    return {
        ...state,
        trips: [...state.filteredTrips],
        filteredTrips: [...state.filteredTrips],
    }
}

export function createNewTripReduces(state: TripState, action: any) {
    let trips = [...state.filteredTrips, action.payload]
    .sort((a: any, b: any) => { return +new Date(a.date_from) - +new Date(b.date_from) })
    return {
        ...state,
        trips: [...trips],
        filteredTrips: [...trips],
    }
}

export function editTripReduces(state: TripState, action: any) {
    let trips = state.filteredTrips?.filter((item) => item.id !== action.payload.id)
    let sortedTrips = [...trips, action.payload].sort((a: any, b: any) => { return +new Date(a.date_from) - +new Date(b.date_from) })
    return {
        ...state,
        trips: [...sortedTrips],
        filteredTrips: [...sortedTrips],
    }
}