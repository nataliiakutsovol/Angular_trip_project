import { TripState } from '../initial-state';

export function filteredPastReducer(state: TripState) {
    let filteredTrips = [...state.trips];
    let trips = filteredTrips.filter((trip: any) => { return new Date(trip.date_from) < new Date() })
    return {
        ...state,
        filteredTrips: [...trips],
    }
}

export function filteredFutureReducer(state: TripState) {
    let filteredTrips = [...state.trips];
    let trips = filteredTrips.filter((trip: any) => { return new Date(trip.date_from) > new Date() })
    return {
        ...state,
        filteredTrips: [...trips],
    }
}

export function filteredEverythingReducer(state: TripState) {
    let filteredTrips = [...state.trips];
    let trips = filteredTrips.filter((trip: any) => { { return new Date(trip.date_from) < new Date() || new Date(trip.date_from) > new Date() } })
    return {
        ...state,
        filteredTrips: [...trips],
    }
}