import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reserve-button',
  templateUrl: './reserve-button.component.html',
  styleUrls: ['./reserve-button.component.less'],
})
export class ReserveButtonComponent {
  @Output() onReserve = new EventEmitter();
}
