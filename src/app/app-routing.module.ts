import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LockerPageComponent } from './locker-page/locker-page.component';

const routes: Routes = [{ path: '', component: LockerPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
