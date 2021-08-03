import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/core/services/trip.service';
import { TripItemModel } from 'src/app/core/models/trip-item.model'

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {

  tripItems: Array<TripItemModel> = [];
  constructor(private tripService: TripService) {}

  ngOnInit(): void {
    this.getPoints();
  }

  getPoints() {
    this.tripService.getAllPoints().subscribe(res => {
      this.tripItems = res
      console.log(res)
    })
  }
}
