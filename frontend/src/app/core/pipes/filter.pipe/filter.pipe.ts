import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string, propName: string): any[] {
    return value.filter((str) => {
      return str[propName].toLowerCase().includes(filterString.toLowerCase());
    });
  }
}
