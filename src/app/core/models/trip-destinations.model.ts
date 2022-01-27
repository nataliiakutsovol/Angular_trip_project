import { PictureModel } from "./trip-item.model";

export interface TripDestinationsModel {
    name: string,
    description: string,
    pictures: Array<PictureModel>
}