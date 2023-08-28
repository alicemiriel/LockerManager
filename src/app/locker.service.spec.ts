import { TestBed } from '@angular/core/testing';

import { LockerService } from './locker.service';
import { MockProvider } from 'ng-mocks';
import { HttpClient } from '@angular/common/http';

describe('LockerService', () => {
  let service: LockerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProvider(HttpClient)],
    });
    service = TestBed.inject(LockerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
