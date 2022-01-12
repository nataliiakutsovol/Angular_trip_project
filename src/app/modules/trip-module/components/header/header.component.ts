import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TripState } from 'src/app/core/state/initial-state';
import { retrivedNewForm } from 'src/app/core/state/trip.actions';
import { selectNewForm } from 'src/app/core/state/trip.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isNewTripOpened$: Observable<Boolean> = this.store.pipe(select(selectNewForm))
  constructor(private store: Store<TripState>,) { }

  ngOnInit(): void {
  }

  openEditForm() {
    this.store.dispatch(retrivedNewForm({ isNewTripOpened: true }));
  }
}
