import { Component, OnInit } from '@angular/core';
import { Locker, LockerStatus } from '../locker.type';
import { LockerService } from '../locker.service';
import { LockerReservationService } from '../locker-reservation.service';

@Component({
  selector: 'app-locker-page',
  templateUrl: './locker-page.component.html',
  styleUrls: ['./locker-page.component.less'],
})
export class LockerPageComponent implements OnInit {
  lockers: Locker[] | undefined;
  reservedLocker: Locker | undefined;

  constructor(
    private lockerService: LockerService,
    private lockerReservationService: LockerReservationService,
  ) {}

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
      this.lockers = this.lockerReservationService.markReserved(lockers);
      this.reservedLocker = this.lockers.find(
        (locker) => locker.status === LockerStatus.RESERVED,
      );
    });
  }
}
