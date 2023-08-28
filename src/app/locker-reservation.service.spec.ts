import { TestBed } from '@angular/core/testing';

import { LockerReservationService } from './locker-reservation.service';
import { LockerStatus } from './locker.type';

describe('LockerReservationService', () => {
  let service: LockerReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LockerReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  (
    [
      [
        [
          LockerStatus.BUSY,
          LockerStatus.FREE,
          LockerStatus.BUSY,
          LockerStatus.FREE,
          LockerStatus.FREE,
        ],
        4,
      ],
      [
        [
          LockerStatus.BUSY,
          LockerStatus.FREE,
          LockerStatus.BUSY,
          LockerStatus.FREE,
          LockerStatus.BUSY,
        ],
        1,
      ],
      [
        [
          LockerStatus.BUSY,
          LockerStatus.BUSY,
          LockerStatus.BUSY,
          LockerStatus.BUSY,
        ],
        -1,
      ],
      [
        [
          LockerStatus.FREE,
          LockerStatus.FREE,
          LockerStatus.FREE,
          LockerStatus.FREE,
        ],
        0,
      ],
      [
        [
          LockerStatus.FREE,
          LockerStatus.FREE,
          LockerStatus.FREE,
          LockerStatus.BUSY,
          LockerStatus.FREE,
          LockerStatus.FREE,
        ],
        5,
      ],
      [
        [
          LockerStatus.FREE,
          LockerStatus.FREE,
          LockerStatus.FREE,
          LockerStatus.BUSY,
          LockerStatus.FREE,
          LockerStatus.BUSY,
        ],
        0,
      ],
      [
        [
          LockerStatus.BUSY,
          LockerStatus.FREE,
          LockerStatus.FREE,
          LockerStatus.FREE,
          LockerStatus.FREE,
          LockerStatus.BUSY,
        ],
        2,
      ],
      [[], -1],
    ] as [LockerStatus[], number][]
  ).forEach(([lockers, expectedReservedLockerIndex]) => {
    it(`should reserve locker number #${
      expectedReservedLockerIndex + 1
    }`, () => {
      const reserved = service.markReserved(
        lockers.map((status, index) => ({
          id: index,
          number: index,
          status,
        })),
      );
      expect(
        reserved.findIndex((locker) => locker.status === LockerStatus.RESERVED),
      ).toEqual(expectedReservedLockerIndex);
    });
  });
});
