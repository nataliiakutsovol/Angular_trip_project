import { TripDestinationsModel } from "./trip-destinations.model";

export interface TripItemModel {
    base_price?: number;
    date_from?: string;
    date_to?: string;
    destination: TripDestinationsModel;
    id?: string;
    is_favorite?: boolean;
    offers?: Array<TripOffersModel>;
    type?: string;
}

export interface TripOffersModel {
    title: string, 
    price: number
}

export interface PictureModel {
    description: string;
    src: string;
}