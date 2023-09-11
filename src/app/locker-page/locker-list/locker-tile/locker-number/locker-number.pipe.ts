import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lockerNumber',
})
export class LockerNumberPipe implements PipeTransform {
  transform(value: number | undefined): string {
    if (!value) {
      return '#-';
    }
    return `#${value}`;
  }
}
