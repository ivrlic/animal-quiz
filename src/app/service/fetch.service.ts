import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// getting url using httpClient and handling errors
export class FetchService {
  private baseUrl =
    'https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=';

  constructor(private http: HttpClient) {}
  // getting url using httpClient
  getRandomImg(animal: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl + animal}`)
      .pipe(catchError(this.handleError));
  }
  // handling errors
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(
        'There is an issue with the client or network:',
        error.error
      );
    } else {
      console.error('Server-side error: ', error.error);
    }
    return throwError(
      () => new Error('Cannot retrieve data from the server. Please try again.')
    );
  }
}
