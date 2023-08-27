import { Component } from '@angular/core';
import { LoadingService } from './shared/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'locker-manager';

  constructor(public loader: LoadingService) {}
}
