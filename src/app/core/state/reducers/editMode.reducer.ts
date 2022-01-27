import { TripState } from '../initial-state';

export function newFormReducer(state: TripState, action: any) {
    return {
        ...state,
        isNewTripOpened: action.payload,
    }
}

export function editReducer(state: TripState, action: any) {
    return {
        ...state,
        isEditModeOpened: action.payload,
    }
}