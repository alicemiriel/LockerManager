import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reserve-button',
  templateUrl: './reserve-button.component.html',
  styleUrls: ['./reserve-button.component.less'],
})
export class ReserveButtonComponent {
  @Input() disabled: boolean = false;
  @Output() onReserve = new EventEmitter();
}
