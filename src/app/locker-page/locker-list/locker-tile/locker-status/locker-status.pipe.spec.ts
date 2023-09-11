import { LockerStatusPipe } from './locker-status.pipe';
import { LockerStatus } from '../../../../locker.type';

describe('LockerStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new LockerStatusPipe();
    expect(pipe).toBeTruthy();
  });

  (
    [
      [LockerStatus.FREE, 'Free'],
      [LockerStatus.BUSY, 'Busy'],
      [LockerStatus.RESERVED, 'Current Reserved Locker'],
      [undefined, ''],
      [null, ''],
      ['', ''],
      ['unknown', ''],
    ] as [any, string][]
  ).forEach(([status, expected]) => {
    it(`should format locker status ${status}`, () => {
      const pipe = new LockerStatusPipe();
      expect(pipe.transform(status as LockerStatus)).toEqual(expected);
    });
  });
});
