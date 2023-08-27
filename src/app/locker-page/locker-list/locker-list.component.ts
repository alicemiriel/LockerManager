import { Component, Input } from '@angular/core';
import { Locker } from '../../locker.type';

@Component({
  selector: 'app-locker-list',
  templateUrl: './locker-list.component.html',
  styleUrls: ['./locker-list.component.less'],
})
export class LockerListComponent {
  @Input() lockers: Locker[] | null | undefined;
}
