import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minmax'
})
export class MinmaxPipe implements PipeTransform {

  transform(arr, el): unknown {
    if (arr) {
      el.min = arr.indexOf(Math.min(...arr));
      el.max = arr.indexOf(Math.max(...arr));
    }
    return arr;
  }

}
