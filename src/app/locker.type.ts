export interface Locker {
  id: number;
  number: number;
  status: LockerStatus;
}

export enum LockerStatus {
  FREE = 'FREE',
  RESERVED = 'RESERVED',
  BUSY = 'BUSY',
}
