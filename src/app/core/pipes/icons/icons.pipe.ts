import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icons'
})
export class IconsPipe implements PipeTransform {

  transform<T>(type: T) {
    return './../../../../../assets/img/png/' + type + '.png';
  }
}
