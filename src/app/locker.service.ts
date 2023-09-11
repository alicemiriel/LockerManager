import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locker } from './locker.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LockerService {
  constructor(private http: HttpClient) {}

  getLockers(): Observable<Locker[]> {
    return this.http.get<Locker[]>('api/lockers');
  }

  updateLocker(locker: Locker): Observable<any> {
    return this.http.put(`api/lockers/${locker.id}`, locker);
  }
}
