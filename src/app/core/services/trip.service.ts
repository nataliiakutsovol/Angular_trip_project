import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TripDestinationsModel } from '../models/trip-destinations.model';
import { TripItemModel  } from '../models/trip-item.model';
import { AllTripOffersModel } from '../models/trip-offers.model';

@Injectable({
  providedIn: 'root'
})

export class TripService {
  server_api = environment.server

  constructor(private http: HttpClient) { }

  getAllPoints(): Observable<Array<TripItemModel>> {
    return this.http.get<Array<TripItemModel>>(`${this.server_api}/points`);
  }

  getAllDestinations(): Observable<Array<TripDestinationsModel>> {
    return this.http.get<Array<TripDestinationsModel>>(`${this.server_api}/destinations`);
  }

  getAllOffers(): Observable<Array<AllTripOffersModel>> {
    return this.http.get<Array<AllTripOffersModel>>(`${this.server_api}/offers`);
  }

  createTripItem(body: TripItemModel): Observable<TripItemModel> {
    return this.http.post<TripItemModel>(`${this.server_api}/points`, body)
  }

  updateTripItem(body: TripItemModel, pointId: string): Observable<TripItemModel> {
    return this.http.put<TripItemModel>(`${this.server_api}/points/${pointId}`, body)
  }

  deleteTripItem(pointId: string) {
    return this.http.delete(`${this.server_api}/points/${pointId}`)
  }
}
