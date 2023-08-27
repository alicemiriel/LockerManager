import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Locker, LockerStatus } from './locker.type';

@Injectable({
  providedIn: 'root',
})
export class LockersInMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const lockers: Locker[] = [
      { id: 1, number: 1, status: LockerStatus.BUSY },
      { id: 2, number: 2, status: LockerStatus.FREE },
      { id: 3, number: 3, status: LockerStatus.BUSY },
      { id: 4, number: 4, status: LockerStatus.FREE },
      { id: 5, number: 5, status: LockerStatus.FREE },
      { id: 6, number: 6, status: LockerStatus.FREE },
      { id: 7, number: 7, status: LockerStatus.FREE },
      { id: 8, number: 8, status: LockerStatus.FREE },
      { id: 9, number: 9, status: LockerStatus.FREE },
    ];
    return { lockers };
  }
}
