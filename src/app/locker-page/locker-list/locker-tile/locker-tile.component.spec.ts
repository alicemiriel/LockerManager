import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerTileComponent } from './locker-tile.component';
import { LockerStatus } from '../../../locker.type';
import { By } from '@angular/platform-browser';
import { LockerNumberPipe } from './locker-number.pipe';
import { LockerStatusPipe } from './locker-status.pipe';

describe('LockerTileComponent', () => {
  let component: LockerTileComponent;
  let fixture: ComponentFixture<LockerTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LockerTileComponent, LockerNumberPipe, LockerStatusPipe],
    });
    fixture = TestBed.createComponent(LockerTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render empty locker', () => {
    expect(getElement('header').nativeElement.textContent.trim()).toEqual('#-');
    expect(getElement('body').nativeElement.textContent.trim()).toEqual('');
  });

  it('should render reserved locker', () => {
    component.locker = {
      id: 1,
      number: 123,
      status: LockerStatus.RESERVED,
    };
    fixture.detectChanges();

    expect(getElement('header').nativeElement.textContent.trim()).toEqual(
      '#123',
    );
    expect(getElement('body').nativeElement.textContent.trim()).toEqual(
      'Current Reserved Locker',
    );
    expect(getElement('tile').classes['reserved']).toBeTruthy();
  });

  it('should render busy locker', () => {
    component.locker = {
      id: 2,
      number: 124,
      status: LockerStatus.BUSY,
    };
    fixture.detectChanges();

    expect(getElement('header').nativeElement.textContent.trim()).toEqual(
      '#124',
    );
    expect(getElement('body').nativeElement.textContent.trim()).toEqual('Busy');
    expect(getElement('tile').classes['busy']).toBeTruthy();
  });

  it('should render free locker', () => {
    component.locker = {
      id: 2,
      number: 125,
      status: LockerStatus.FREE,
    };
    fixture.detectChanges();

    expect(getElement('header').nativeElement.textContent.trim()).toEqual(
      '#125',
    );
    expect(getElement('body').nativeElement.textContent.trim()).toEqual('Free');
    expect(getElement('tile').classes['free']).toBeTruthy();
  });

  function getElement(dataTestId: string) {
    return fixture.debugElement.query(By.css(`[data-testid="${dataTestId}"]`));
  }
});
