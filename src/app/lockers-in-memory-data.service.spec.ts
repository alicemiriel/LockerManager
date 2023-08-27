import { TestBed } from '@angular/core/testing';

import { LockersInMemoryDataService } from './lockers-in-memory-data.service';

describe('LockersInMemoryDataService', () => {
  let service: LockersInMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LockersInMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
