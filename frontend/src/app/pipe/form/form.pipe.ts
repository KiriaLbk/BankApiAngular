import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'form'
})
export class FormPipe implements PipeTransform {

  transform(arr, value): Array<any> {
    if (value === ''){
      return arr;
    } else{
      if (arr[0].value.name){
        return arr.filter((item) => item.value.name.includes(value));
      }
      return arr;
    }
  }

}
