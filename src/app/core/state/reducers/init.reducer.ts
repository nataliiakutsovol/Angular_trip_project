import { Action } from "@ngrx/store";
import { initialTripState, TripState } from "../initial-state";
import { TripActions } from "../trip.actions";
import { editReducer, newFormReducer } from "./editMode.reducer";
import { filteredEverythingReducer, filteredFutureReducer, filteredPastReducer } from "./filter.reducer";
import { createNewTripReduces, 
    deleteTripReduces, 
    destinationsReducer, 
    editTripReduces,
    offersReducer, 
    tripListReducer } 
from "./trip-list.reducer";

export function InitReducer(
    state: TripState = initialTripState,
    action: Action) {
    switch(action.type) {
        case TripActions.GET_ALL_TRIPS_SUCCESS:
            return tripListReducer(state, action)
        case TripActions.GET_ALL_DESTINATIONS_SUCCESS:
            return destinationsReducer(state, action)
        case TripActions.GET_ALL_OFFERS_SUCCESS:
            return offersReducer(state, action)
        case TripActions.DELETE_TRIP_SUCCESS:
            return deleteTripReduces(state, action)
        case TripActions.ADD_NEW_TRIP_SUCCESS:
            return createNewTripReduces(state, action)
        case TripActions.EDIT_TRIP_SUCCESS:
            return editTripReduces(state, action)
        case TripActions.TRIPS_FILTER_PAST:
            return filteredPastReducer(state)
        case TripActions.TRIPS_FILTER_FUTURE:
            return filteredFutureReducer(state)
        case TripActions.TRIPS_FILTER_EVERYTHING:
            return filteredEverythingReducer(state)
        case TripActions.OPEN_EDIT_MODE:
            return editReducer(state, action)
        case TripActions.OPEN_NEW_TRIP_FORM:
            return newFormReducer(state, action)
        default: 
        return state;
    }
}