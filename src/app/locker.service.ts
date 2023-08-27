import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Locker } from './locker.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LockerService {
  constructor(private http: HttpClient) {}

  getLockers(): Observable<Locker[]> {
    return this.http.get<Locker[]>('api/lockers');
    // .pipe(catchError(this.handleError<Locker[]>('getLockers', [])));
  }

  updateLocker(locker: Locker): Observable<any> {
    return this.http.put(`api/lockers/${locker.id}`, locker);
  }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  //
  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);
  //
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
}
