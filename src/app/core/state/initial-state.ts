import { TripDestinationsModel } from "../models/trip-destinations.model";
import { TripItemModel } from "../models/trip-item.model";
import { TripOffersModel } from "../models/trip-offers.model";


export interface TripState {
    trips: TripItemModel[],
    destinations: TripDestinationsModel[],
    offers: TripOffersModel[],
}

export const initialTripState: TripState = {
    trips: [],
    destinations: [],
    offers: [],
}