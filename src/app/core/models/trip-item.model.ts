export interface TipListModel {
    points: Array<TripItemModel>;
}

export interface TripItemModel {
    base_price?: number;
    date_from?: string;
    date_to?: string;
    destination?: TripDestinationModel;
    id?: string;
    is_favorite?: boolean;
    offers?: Array<TripOffersModel>;
    type?: string;
}

export interface TripOffersModel {
    title: string, 
    price: number
}

export interface TripDestinationModel {
    description: string;
    name: string;
    pictures: Array<PictureModel>;

}

export interface PictureModel {
    description: string;
    src: string;
}