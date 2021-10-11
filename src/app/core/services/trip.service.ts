import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TripDestinationsModel } from '../models/trip-destinations.model';
import { TripItemModel  } from '../models/trip-item.model';

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

  getAllOffers() {
    return this.http.get(`${this.server_api}/offers`);
  }
}
