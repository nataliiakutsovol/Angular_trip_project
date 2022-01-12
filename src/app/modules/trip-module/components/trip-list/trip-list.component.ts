import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TripState } from 'src/app/core/state/initial-state';
import { selectNewForm } from 'src/app/core/state/trip.selectors';
import { HeaderLables } from './config'

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {

  headerLables = HeaderLables;
  isNewTripOpened$: Observable<Boolean> = this.store.pipe(select(selectNewForm))
  constructor(private store: Store<TripState>,) {}

  ngOnInit(): void {
  }


}
