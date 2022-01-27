import { TripDestinationsModel } from "../models/trip-destinations.model";
import { TripItemModel } from "../models/trip-item.model";
import { AllTripOffersModel } from "../models/trip-offers.model";


export interface TripState {
    trips: Array<TripItemModel>,
    filteredTrips: Array<TripItemModel>,
    destinations: Array<TripDestinationsModel>,
    offers: Array<AllTripOffersModel>,
    isNewTripOpened: boolean,
    isEditModeOpened: boolean,
}

export const initialTripState: TripState = {
    trips: [],
    filteredTrips: [],
    destinations: [],
    offers: [],
    isNewTripOpened: false,
    isEditModeOpened: false,
}