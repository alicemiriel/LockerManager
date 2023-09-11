import { LockerNumberPipe } from './locker-number.pipe';

describe('LockerNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new LockerNumberPipe();
    expect(pipe).toBeTruthy();
  });

  (
    [
      [123, '#123'],
      ['456', '#456'],
      [undefined, '#-'],
      [null, '#-'],
      ['', '#-'],
      ['unknown', '#unknown'],
    ] as [any, string][]
  ).forEach(([number, expected]) => {
    it(`should format locker number ${number}`, () => {
      const pipe = new LockerNumberPipe();
      expect(pipe.transform(number as any)).toEqual(expected);
    });
  });
});
