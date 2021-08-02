import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TripService {
  //server_api = environment;

  constructor(private http: HttpClient) { }

  getAllPoints() {
    const point_api = environment.server
    return this.http.get(`${point_api}/points`);
  }
}
