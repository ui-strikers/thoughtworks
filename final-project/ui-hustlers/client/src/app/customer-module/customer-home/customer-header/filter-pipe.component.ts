import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customerNameFilter'
})
export class SearchPipe implements PipeTransform {

  
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.firstName.toLocaleLowerCase().includes(args)) || (val.firstName.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}