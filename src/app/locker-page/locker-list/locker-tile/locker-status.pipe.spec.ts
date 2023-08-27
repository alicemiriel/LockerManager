import { LockerStatusPipe } from './locker-status.pipe';

describe('LockerStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new LockerStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
