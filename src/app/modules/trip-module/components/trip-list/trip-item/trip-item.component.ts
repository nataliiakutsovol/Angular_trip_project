import { Component, OnInit } from '@angular/core';
import { TripItemModel } from 'src/app/core/models/trip-item.model';
import { TripService } from 'src/app/core/services/trip.service';

@Component({
  selector: 'app-trip-item',
  templateUrl: './trip-item.component.html',
  styleUrls: ['./trip-item.component.scss']
})
export class TripItemComponent implements OnInit {

  tripItems: Array<TripItemModel> = [];
  constructor(private tripService: TripService) { }

  ngOnInit(): void {
    this.getPoints();
    this.getDestignations();
    this.getOffers()
  }

  getPoints() {
    this.tripService.getAllPoints().subscribe(res => {
      this.tripItems = res;
    },
    error => {
      console.warn(error);
    })
  }

  getDestignations() {
    this.tripService.getAllDestinations().subscribe()
  }

  getOffers() {
    this.tripService.getAllOffers().subscribe()
  }

  checkType(item: any) {
    switch(item) {
      case 'check-in':
        item = ''
        break;
      case 'restaurant':
        item = 'in';
        break;
      default:
        item = 'to';
    }
    return item
  }

  getIcon(type: any) {
    return './../../../../../assets/img/png/' + type + '.png';
  }
}
