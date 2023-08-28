import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveButtonComponent } from './reserve-button.component';
import { By } from '@angular/platform-browser';

describe('ReserveButtonComponent', () => {
  let component: ReserveButtonComponent;
  let fixture: ComponentFixture<ReserveButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReserveButtonComponent],
    });
    fixture = TestBed.createComponent(ReserveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should disable button when disable property is set to true', () => {
    component.disabled = true;
    fixture.detectChanges();
    expect(getButtonElement().disabled).toBeTruthy();
  });

  it('Should not be able to click button when disable property is set to true', () => {
    spyOn(component.onReserve, 'emit');
    component.disabled = true;
    fixture.detectChanges();

    getButtonElement().click();
    fixture.detectChanges();

    expect(component.onReserve.emit).not.toHaveBeenCalled();
  });

  it('Should enable button when disable property is set to false', () => {
    component.disabled = false;
    fixture.detectChanges();
    expect(getButtonElement().disabled).toBeFalsy();
  });

  it('Should be able to click button when disable property is set to false', () => {
    spyOn(component.onReserve, 'emit');

    getButtonElement().click();
    fixture.detectChanges();

    expect(component.onReserve.emit).toHaveBeenCalled();
  });

  function getButtonElement() {
    return fixture.debugElement.query(By.css(`[data-testid="reserveButton"]`))
      .nativeElement;
  }
});
