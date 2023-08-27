import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerPageComponent } from './locker-page.component';

describe('LockerPageComponent', () => {
  let component: LockerPageComponent;
  let fixture: ComponentFixture<LockerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LockerPageComponent]
    });
    fixture = TestBed.createComponent(LockerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
