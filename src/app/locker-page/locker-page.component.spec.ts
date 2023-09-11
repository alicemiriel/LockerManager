import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerPageComponent } from './locker-page.component';
import { MockComponent, MockProvider } from 'ng-mocks';
import { LockerService } from '../locker.service';
import { ReserveButtonComponent } from './reserve-button/reserve-button.component';
import { LockerListComponent } from './locker-list/locker-list.component';
import { EMPTY, of } from 'rxjs';
import { Locker, LockerStatus } from '../locker.type';
import { By } from '@angular/platform-browser';
import { LockerReservationService } from '../locker-reservation.service';
import Spy = jasmine.Spy;
import Func = jasmine.Func;

describe('LockerPageComponent', () => {
  let component: LockerPageComponent;
  let fixture: ComponentFixture<LockerPageComponent>;
  let reserveSpy: Spy<Func>;

  beforeEach(() => {
    reserveSpy = jasmine.createSpy().and.returnValue(EMPTY);
    TestBed.configureTestingModule({
      declarations: [
        LockerPageComponent,
        ReserveButtonComponent,
        MockComponent(LockerListComponent),
      ],
      providers: [
        MockProvider(LockerService, {
          getLockers: () =>
            of([
              {
                id: 1,
                number: 1,
                status: LockerStatus.FREE,
              },
            ] as Locker[]),
          updateLocker: reserveSpy,
        }),
        MockProvider(LockerReservationService, {
          markReserved: () => {
            return [
              {
                id: 1,
                number: 1,
                status: LockerStatus.RESERVED,
              },
            ];
          },
        }),
      ],
    });
    fixture = TestBed.createComponent(LockerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service when reserving a locker', () => {
    getButtonElement().click();
    fixture.detectChanges();

    expect(reserveSpy).toHaveBeenCalled();
  });

  function getButtonElement() {
    return fixture.debugElement.query(By.css(`[data-testid="reserveButton"]`))
      .nativeElement;
  }
});
