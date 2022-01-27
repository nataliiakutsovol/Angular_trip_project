import { Injectable } from '@angular/core';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { TripService } from 'src/app/core/services/trip.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { 
    addNewTrip,
    addNewTripSuccess,
    deleteTrip,
    deleteTripSuccess,
    editTrip,
    editTripSuccess,
    retrievedDestinations, 
    retrievedDestinationsSucceess, 
    retrievedOffers, 
    retrievedOffersSuccess,
    retrievedTripList, 
    retrievedTripListSucceess,
    TripActions } from 'src/app/core/state/trip.actions';
import { of } from 'rxjs';

@Injectable()
export class TripEffects {

    @Effect() getTripList$ = this.actions$.pipe(
        ofType<retrievedTripList>(TripActions.GET_ALL_TRIPS),
        mergeMap(() => this.tripService.getAllPoints().pipe(
            map(trips => { return new retrievedTripListSucceess(trips) }),
            catchError(error => of(error))
          )
        ),
    )

    @Effect() getAllDestinations$ = this.actions$.pipe(
        ofType<retrievedDestinations>(TripActions.GET_ALL_DESTINATIONS),
        mergeMap(() => this.tripService.getAllDestinations().pipe(
            map(destinations => { return new retrievedDestinationsSucceess(destinations) }),
            catchError(error => of(error))
        ))
    )

    @Effect() getAllOffers$ = this.actions$.pipe(
        ofType<retrievedOffers>(TripActions.GET_ALL_OFFERS),
        mergeMap(() => this.tripService.getAllOffers().pipe(
            map(offers => { return new retrievedOffersSuccess(offers) }),
            catchError(error => of(error))
        ))
    )

    @Effect() deleteTripItem$ = this.actions$.pipe(
        ofType<deleteTrip>(TripActions.DELETE_TRIP),
        mergeMap((data) => this.tripService.deleteTripItem(data.payload).pipe(
            map(() => { return new deleteTripSuccess() }),
            catchError(error => of(error))
        ))
    )

    @Effect() createTrip$ = this.actions$.pipe(
        ofType<addNewTrip>(TripActions.ADD_NEW_TRIP),
        mergeMap((data) => this.tripService.createTripItem(data.payload).pipe(
            map(data => { return new addNewTripSuccess(data) }),
            catchError(error => of(error))
        ))
    )

    @Effect() editTrip$ = this.actions$.pipe(
        ofType<editTrip>(TripActions.EDIT_TRIP),
        switchMap((data) => this.tripService.updateTripItem(data.payload, data.pointId).pipe(
            map(data => { return new editTripSuccess(data) }),
            catchError(error => of(error))
        ))
    )

  constructor(
    private actions$: Actions,
    private tripService: TripService
  ) { }
}