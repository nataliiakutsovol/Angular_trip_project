import { Component, OnInit } from '@angular/core';
import { TripItemModel } from 'src/app/core/models/trip-item.model';
import { TripService } from 'src/app/core/services/trip.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TripState } from 'src/app/core/state/initial-state';
import { select, Store } from '@ngrx/store';
import { selectEditMode, selectTripList } from 'src/app/core/state/trip.selectors';
import { retrievedEditMode, retrievedTripList } from 'src/app/core/state/trip.actions';

@Component({
  selector: 'app-trip-item',
  templateUrl: './trip-item.component.html',
  styleUrls: ['./trip-item.component.scss']
})
export class TripItemComponent implements OnInit {

  selectedItemIndex: any;
  tripList$: Observable<TripItemModel[]> = this.store.pipe(select(selectTripList));
  isEditModeOpened$: Observable<Boolean> = this.store.pipe(select(selectEditMode));

  constructor(
    private tripService: TripService,
    private store: Store<TripState>) { }

  ngOnInit(): void {
    this.getPoints();
  }

  getPoints() {
    this.tripService.getAllPoints().pipe(
      map((trips) => trips.sort((a: any, b: any) => { return +new Date(a.date_from) - +new Date(b.date_from) }))
    ).subscribe((trips) => {
      this.store.dispatch(retrievedTripList({ trips }));
    })
  }

  //винести в pipe
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

  openEditMode(i: number) {
    this.store.dispatch(retrievedEditMode({ isEditModeOpened: true }));
    this.selectedItemIndex = i;
  }
}
