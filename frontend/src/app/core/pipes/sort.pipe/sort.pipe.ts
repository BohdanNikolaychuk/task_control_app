import { Pipe, PipeTransform } from '@angular/core';
import { IDashBoard } from './../../interface/IDashBoard';
import { IBoard } from 'src/app/core/interface/IBoard';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: IDashBoard[] | IBoard[], args: string[]): any {
    const sortField = args[0];
    const sortDirection = args[1];

    let multiplier = 1;

    if (sortDirection === 'desc') {
      multiplier = -1;
    }

    if (sortField === 'createdAt') {
      value.sort((a: any, b: any) => {
        if (a.createdAt > b.createdAt) {
          return -1;
        } else if (a.createdAt < b.createdAt) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      value.sort((a: IDashBoard | IBoard, b: IDashBoard | IBoard) => {
        if (a[sortField] < b[sortField]) {
          return -1 * multiplier;
        } else if (a[sortField] > b[sortField]) {
          return 1 * multiplier;
        } else {
          return 0;
        }
      });
    }

    return value;
  }
}
