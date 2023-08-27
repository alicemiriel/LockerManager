import { Component, Input } from '@angular/core';
import { Locker, LockerStatus } from '../../../locker.type';

@Component({
  selector: 'app-locker-tile',
  templateUrl: './locker-tile.component.html',
  styleUrls: ['./locker-tile.component.less'],
})
export class LockerTileComponent {
  LockerStatus = LockerStatus;

  @Input() locker: Locker | undefined;
}
