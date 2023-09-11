import { Injectable } from '@angular/core';
import { Locker, LockerStatus } from './locker.type';

@Injectable({
  providedIn: 'root',
})
export class LockerReservationService {
  constructor() {}

  markReserved(lockers: Locker[]): Locker[] {
    let reservedLockerIndex = -1;
    let lastBusyLocker = -1;
    for (let index = lockers.length - 1; index >= 0; index--) {
      if (lockers[index].status === LockerStatus.BUSY) {
        lastBusyLocker = index;
        break;
      }
    }

    if (lastBusyLocker !== -1 && lastBusyLocker + 2 < lockers.length) {
      reservedLockerIndex = lastBusyLocker + 2;
    }

    if (reservedLockerIndex === -1) {
      reservedLockerIndex = lockers.findIndex(
        (locker) => locker.status === LockerStatus.FREE,
      );
    }

    return lockers.map((locker, index) => ({
      ...locker,
      status:
        index === reservedLockerIndex ? LockerStatus.RESERVED : locker.status,
    }));
  }
}
