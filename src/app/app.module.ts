import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReserveButtonComponent } from './locker-page/reserve-button/reserve-button.component';
import { LockerListComponent } from './locker-page/locker-list/locker-list.component';
import { LockerTileComponent } from './locker-page/locker-list/locker-tile/locker-tile.component';
import { LockerPageComponent } from './locker-page/locker-page.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './shared/loading/loading.interceptor';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LockersInMemoryDataService } from './lockers-in-memory-data.service';
import { LockerNumberPipe } from './locker-page/locker-list/locker-tile/locker-number.pipe';
import { LockerStatusPipe } from './locker-page/locker-list/locker-tile/locker-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReserveButtonComponent,
    LockerListComponent,
    LockerTileComponent,
    LockerPageComponent,
    SpinnerComponent,
    LockerNumberPipe,
    LockerStatusPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(LockersInMemoryDataService),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
