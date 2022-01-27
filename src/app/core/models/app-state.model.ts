import { TripState } from './../state/initial-state';

export default interface AppState {
    trip: TripState;
}



// StoreModule.forRoot({
//     trip: InitReducer
//   }, {}),