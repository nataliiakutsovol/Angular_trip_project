import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TripDestinationsModel } from '../models/trip-destinations.model';
import { TripItemModel  } from '../models/trip-item.model';
import { TripOffersModel } from '../models/trip-offers.model';

@Injectable({
  providedIn: 'root'
})

export class TripService {
  server_api = environment.server

  constructor(private http: HttpClient) { }

  getAllPoints(): Observable<TripItemModel[]> {
    return this.http.get<TripItemModel[]>(`${this.server_api}/points`);
  }

  getAllDestinations(): Observable<TripDestinationsModel[]> {
    return this.http.get<TripDestinationsModel[]>(`${this.server_api}/destinations`);
  }

  getAllOffers(): Observable<TripOffersModel[]> {
    return this.http.get<TripOffersModel[]>(`${this.server_api}/offers`);
  }

  updateTripItem(pointId: number, body: any): Observable<any> {
    return this.http.put<any>(`${this.server_api}/points/:${pointId}`, body)
  }
}
