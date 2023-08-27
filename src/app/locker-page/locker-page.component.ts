import { Component, OnInit } from '@angular/core';
import { Locker, LockerStatus } from '../locker.type';
import { map, Observable } from 'rxjs';
import { LockerService } from '../locker.service';

@Component({
  selector: 'app-locker-page',
  templateUrl: './locker-page.component.html',
  styleUrls: ['./locker-page.component.less'],
})
export class LockerPageComponent implements OnInit {
  lockers!: Observable<Locker[]>;

  constructor(private lockerService: LockerService) {}

  ngOnInit(): void {
    this.lockers = this.lockerService
      .getLockers()
      .pipe(map((lockers) => this.markNextReserved(lockers)));
  }

  onReserve(): void {
    // this.lockers.subscribe(lockers)
    // if (this.hero) {
    //   this.heroService.updateHero(this.hero)
    //     .subscribe(() => this.goBack());
    // }
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
