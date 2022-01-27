import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offerType'
})
export class OfferTypePipe implements PipeTransform {

  transform(item: any) {
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
}
