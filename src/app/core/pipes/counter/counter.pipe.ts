import { Pipe, PipeTransform } from '@angular/core';
import { TripItemModel } from '../../models/trip-item.model';

@Pipe({
  name: 'counter'
})
export class CounterPipe implements PipeTransform {

  transform(trips: any): number {
    return Array.from(trips.map((trip: TripItemModel) => trip.base_price)).reduce((a: number, b: any) => a + b, 0);
  }
}
