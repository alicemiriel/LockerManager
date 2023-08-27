import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerListComponent } from './locker-list.component';

describe('LockerListComponent', () => {
  let component: LockerListComponent;
  let fixture: ComponentFixture<LockerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LockerListComponent]
    });
    fixture = TestBed.createComponent(LockerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
