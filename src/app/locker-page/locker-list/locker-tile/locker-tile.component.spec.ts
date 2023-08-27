import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerTileComponent } from './locker-tile.component';

describe('LockerTileComponent', () => {
  let component: LockerTileComponent;
  let fixture: ComponentFixture<LockerTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LockerTileComponent]
    });
    fixture = TestBed.createComponent(LockerTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
