import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerListComponent } from './locker-list.component';
import { LockerStatus } from '../../locker.type';
import { By } from '@angular/platform-browser';
import { LockerTileComponent } from './locker-tile/locker-tile.component';
import { MockComponent } from 'ng-mocks';

describe('LockerListComponent', () => {
  let component: LockerListComponent;
  let fixture: ComponentFixture<LockerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LockerListComponent, MockComponent(LockerTileComponent)],
    });
    fixture = TestBed.createComponent(LockerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render lockers', () => {
    component.lockers = [
      {
        id: 1,
        number: 124,
        status: LockerStatus.FREE,
      },
      {
        id: 2,
        number: 125,
        status: LockerStatus.BUSY,
      },
      {
        id: 3,
        number: 126,
        status: LockerStatus.RESERVED,
      },
    ];
    fixture.detectChanges();

    expect(getElements('locker').length).toEqual(3);
  });

  function getElements(dataTestId: string) {
    return fixture.debugElement.queryAll(
      By.css(`[data-testid="${dataTestId}"]`),
    );
  }
});
