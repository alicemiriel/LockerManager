import { Pipe, PipeTransform } from '@angular/core';
import { LockerStatus } from '../../../locker.type';

@Pipe({
  name: 'lockerStatus',
})
export class LockerStatusPipe implements PipeTransform {
  transform(value: LockerStatus | undefined): unknown {
    if (!value) {
      return '';
    }
    switch (value) {
      case LockerStatus.BUSY:
        return 'Busy';
      case LockerStatus.RESERVED:
        return 'Current Reserved Locker';
      case LockerStatus.FREE:
        return 'Free';
    }
  }
}
