import { Injectable } from '@angular/core';
import { Observable, of,throwError } from 'rxjs';
import { catchError, map, tap,finalize } from 'rxjs/operators';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private sideBarStatus = new BehaviorSubject('hide');
  currentSideBarStatus = this.sideBarStatus.asObservable();

  constructor(private http: HttpClient,private spinner: NgxSpinnerService) { }
  signin(postData): Observable<any>{
    this.spinner.show();
    return this.http.post<any>(environment.apiBaseUrl+'/login',postData,httpOptions).pipe(
      catchError(this.handleError),
      finalize(() => this.spinner.hide())
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  changeSidebarStatus(message: string) {
    this.sideBarStatus.next(message);
  }
}
