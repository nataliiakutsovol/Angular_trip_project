import { TripOffersModel } from "./trip-item.model";


export interface AllTripOffersModel {
    offers: Array<TripOffersModel>;
    type: string;
}