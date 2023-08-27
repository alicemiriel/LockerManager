import { Component, OnInit } from '@angular/core';
import { Locker, LockerStatus } from '../locker.type';
import { LockerService } from '../locker.service';

@Component({
  selector: 'app-locker-page',
  templateUrl: './locker-page.component.html',
  styleUrls: ['./locker-page.component.less'],
})
export class LockerPageComponent implements OnInit {
  lockers: Locker[] | undefined;
  reservedLocker: Locker | undefined;

  constructor(private lockerService: LockerService) {}

  ngOnInit(): void {
    this.getLockers();
  }

  onReserve(): void {
    if (this.reservedLocker) {
      this.lockerService
        .updateLocker({
          ...this.reservedLocker,
          status: LockerStatus.BUSY,
        })
        .subscribe(() => this.getLockers());
    }
  }

  private getLockers() {
    this.lockerService.getLockers().subscribe((lockers) => {
      this.lockers = this.markNextReserved(lockers);
      this.reservedLocker = this.lockers.find(
        (locker) => locker.status === LockerStatus.RESERVED,
      );
    });
  }

  private markNextReserved(lockers: Locker[]) {
    let reservedLockerIndex = -1;
    for (let lockerIndex = 0; lockerIndex < lockers.length; lockerIndex += 2) {
      if (lockers[lockerIndex].status === LockerStatus.FREE) {
        reservedLockerIndex = lockerIndex;
        break;
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
