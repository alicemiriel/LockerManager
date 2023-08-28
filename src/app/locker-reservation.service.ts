import { Injectable } from '@angular/core';
import { Locker, LockerStatus } from './locker.type';

@Injectable({
  providedIn: 'root',
})
export class LockerReservationService {
  constructor() {}

  markReserved(lockers: Locker[]): Locker[] {
    let reservedLockerIndex = -1;
    let firstBusyLocker = lockers.findIndex(
      (locker) => locker.status === LockerStatus.BUSY,
    );

    if (firstBusyLocker !== -1) {
      for (
        let lockerIndex = firstBusyLocker;
        lockerIndex < lockers.length;
        lockerIndex += 2
      ) {
        if (lockers[lockerIndex].status === LockerStatus.FREE) {
          reservedLockerIndex = lockerIndex;
          break;
        }
      }
    }
    if (reservedLockerIndex === -1) {
      reservedLockerIndex = lockers.findIndex(
        (locker) => locker.status === LockerStatus.FREE,
      );
    }
    // lockers.
    return lockers.map((locker, index) => ({
      ...locker,
      status:
        index === reservedLockerIndex ? LockerStatus.RESERVED : locker.status,
    }));
  }
}
