import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter'
})
export class CounterPipe implements PipeTransform {

  transform(trips: any): number {
    return Array.from(trips.map((trip: any) => trip.base_price)).reduce((a: number, b: any) => a + b, 0);
  }
}
