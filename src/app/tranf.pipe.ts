import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tranf'
})
export class TranfPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value +"***";
  }

}